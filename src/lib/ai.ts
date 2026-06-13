import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import type { LanguageModel } from "ai";

// Latest Claude by default; override with AI_MODEL. Prefer the Vercel AI Gateway
// when its key is present (recommended on Vercel), else call Anthropic directly.
const MODEL = process.env.AI_MODEL || "claude-sonnet-4-6";

export function aiConfigured(): boolean {
  return Boolean(process.env.AI_GATEWAY_API_KEY || process.env.ANTHROPIC_API_KEY);
}

function model(): LanguageModel | null {
  if (process.env.AI_GATEWAY_API_KEY) return `anthropic/${MODEL}`;
  if (process.env.ANTHROPIC_API_KEY) return anthropic(MODEL);
  return null;
}

const UA = "SabkaSarkar/1.0 (civic non-profit; hello@sabkasarkar.com)";

const profileSchema = z.object({
  bio: z.string().describe("2-4 sentence factual, third-person bio"),
  achievements: z
    .array(z.string())
    .describe("3-5 concrete, source-supported achievement bullets"),
  why: z
    .string()
    .describe("1-2 sentences connecting their real record to this ministry"),
  confident: z
    .boolean()
    .describe("true ONLY if the source text clearly describes this exact person"),
});

export type ResearchResult = {
  bio: string;
  achievements: string[];
  why: string;
  sourceUrls: string[];
  model: string;
  image: string;
  imageAttribution: string;
  imageLicense: string;
};

function stripHtml(s: unknown): string {
  return String(s || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function isFreeLicense(code: string, shortName: string): boolean {
  const s = `${code} ${shortName}`.toLowerCase();
  if (/fair use|non-?free|all rights reserved/.test(s)) return false;
  return /(^|[^a-z])cc[ -]?(by|0|pd)|public domain|pd-|cc0|attribution|godl|ogl|fal|free art/.test(s);
}

/** Fetch a free-licensed Wikimedia portrait for a nominee (or null). */
async function fetchPortrait(
  name: string
): Promise<{ image: string; imageAttribution: string; imageLicense: string } | null> {
  const api = "https://en.wikipedia.org/w/api.php";
  const commons = "https://commons.wikimedia.org/w/api.php";
  const clean = name
    .replace(/^(Dr\.?|Prof\.?|Justice \(Retd\.\)|Justice|Pandit|Smt\.?|Shri)\s+/i, "")
    .trim();

  const tryTitle = async (t: string) => {
    const r = await fetch(
      `${api}?action=query&format=json&redirects=1&prop=pageimages&piprop=thumbnail|name&pithumbsize=480&titles=${encodeURIComponent(t)}`,
      { headers: { "User-Agent": UA } }
    );
    if (!r.ok) return null;
    const j = await r.json();
    const p = Object.values(j?.query?.pages || {})[0] as
      | { thumbnail?: { source?: string }; pageimage?: string }
      | undefined;
    if (!p?.thumbnail?.source || !p.pageimage) return null;
    return { image: p.thumbnail.source, file: `File:${p.pageimage}` };
  };

  let res = await tryTitle(name);
  if (!res && clean !== name) res = await tryTitle(clean);
  if (!res) return null;

  // license + author from Commons
  const r2 = await fetch(
    `${commons}?action=query&format=json&prop=imageinfo&iiprop=extmetadata&titles=${encodeURIComponent(res.file)}`,
    { headers: { "User-Agent": UA } }
  );
  if (!r2.ok) return null;
  const j2 = await r2.json();
  const cp = Object.values(j2?.query?.pages || {})[0] as
    | { imageinfo?: Array<{ extmetadata?: Record<string, { value?: string }> }> }
    | undefined;
  const ext = cp?.imageinfo?.[0]?.extmetadata || {};
  const code = ext.License?.value || "";
  const short = ext.LicenseShortName?.value || "";
  const artist = stripHtml(ext.Artist?.value) || "Unknown";
  if (!isFreeLicense(code, short)) return null;

  return {
    image: res.image,
    imageAttribution: `${artist} / Wikimedia Commons (${short || code})`,
    imageLicense: short || code,
  };
}

async function wikiExtract(
  name: string
): Promise<{ extract: string; url: string } | null> {
  const tryTitle = async (t: string) => {
    const r = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}`,
      { headers: { "User-Agent": UA } }
    );
    if (!r.ok) return null;
    const j = await r.json();
    if (j.type === "disambiguation" || !j.extract) return null;
    return {
      extract: String(j.extract),
      url:
        j.content_urls?.desktop?.page ||
        `https://en.wikipedia.org/wiki/${encodeURIComponent(t)}`,
    };
  };
  let res = await tryTitle(name);
  if (!res) {
    const cleaned = name
      .replace(/^(Dr\.?|Prof\.?|Justice \(Retd\.\)|Justice|Pandit|Smt\.?|Shri)\s+/i, "")
      .trim();
    if (cleaned !== name) res = await tryTitle(cleaned);
  }
  return res;
}

/**
 * Draft a structured profile for a nominee, GROUNDED in their Wikipedia extract
 * (not open-ended generation) to minimise hallucination. Returns null if there's
 * no reliable source or the model isn't confident — the admin can then do it by
 * hand. Output is a DRAFT only; nothing publishes without admin approval.
 */
export async function researchNominee(args: {
  name: string;
  ministry: string;
  mandate: string;
}): Promise<ResearchResult | null> {
  const m = model();
  if (!m) return null;
  const wiki = await wikiExtract(args.name);
  if (!wiki) return null;

  const { object } = await generateObject({
    model: m,
    schema: profileSchema,
    prompt:
      `You are drafting a NEUTRAL, factual profile for a non-partisan Indian civic ` +
      `site. Use ONLY facts supported by the source text below — never invent ` +
      `claims, awards, or numbers.\n\n` +
      `Person: ${args.name}\n` +
      `Nominated to lead: ${args.ministry} — ${args.mandate}\n\n` +
      `Source (Wikipedia extract):\n"""${wiki.extract}"""\n\n` +
      `Rules: third person; no praise, adjectives of opinion, or political ` +
      `framing; achievements must be concrete and supported by the source; if the ` +
      `source is thin or ambiguous about this exact person, set confident=false. ` +
      `"why" connects their real, sourced record to the ministry's mandate.`,
  });

  if (!object.confident) return null;

  // Best-effort portrait (same Wikipedia subject); fine if absent.
  let portrait: Awaited<ReturnType<typeof fetchPortrait>> = null;
  try {
    portrait = await fetchPortrait(args.name);
  } catch {
    portrait = null;
  }

  return {
    bio: object.bio,
    achievements: object.achievements,
    why: object.why,
    sourceUrls: [wiki.url],
    model: typeof m === "string" ? m : MODEL,
    image: portrait?.image ?? "",
    imageAttribution: portrait?.imageAttribution ?? "",
    imageLicense: portrait?.imageLicense ?? "",
  };
}
