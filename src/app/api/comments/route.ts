import { NextResponse } from "next/server";
import { listComments, addComment } from "@/lib/db";
import { commentCreateSchema, isForgedUserKey } from "@/lib/schema";
import { rateLimit } from "@/lib/ratelimit";
import { portfolios } from "@/content/cabinet";
import { sessionVoterKey } from "@/auth";

export const dynamic = "force-dynamic";

const slugSet = new Set(portfolios.map((p) => p.slug));

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const slug = params.get("slug") ?? "";
  const voter = params.get("voter") ?? "";
  const order = params.get("order") === "new" ? "new" : "top";
  const nomineeIdRaw = params.get("nomineeId");
  const nomineeId = nomineeIdRaw ? Number(nomineeIdRaw) : null;

  if (!slugSet.has(slug)) {
    return NextResponse.json(
      { success: false, error: "Unknown channel." },
      { status: 400 }
    );
  }

  try {
    const data = await listComments(
      slug,
      Number.isFinite(nomineeId as number) ? nomineeId : null,
      voter,
      order
    );
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not load the discussion." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = commentCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: parsed.error.issues[0]?.message ?? "Invalid comment.",
      },
      { status: 422 }
    );
  }

  const { portfolioSlug, nomineeId, parentId, body: text, authorName, voterKey } =
    parsed.data;

  const sv = await sessionVoterKey();
  if (isForgedUserKey(voterKey, Boolean(sv))) {
    return NextResponse.json(
      { success: false, error: "Invalid voter key." },
      { status: 400 }
    );
  }
  const finalKey = sv?.key ?? voterKey;

  if (!rateLimit(`comment:${finalKey}`, 5, 60_000)) {
    return NextResponse.json(
      { success: false, error: "You're posting too fast. Take a breath." },
      { status: 429 }
    );
  }

  // Identity is derived ONLY from server-trusted session state. A signed-in
  // user posting non-anonymously is shown under their verified session name
  // (never a client-supplied name). Everyone else is "anon".
  const wantsAnon = !authorName || authorName.length === 0;
  const name = sv && !wantsAnon ? sv.name ?? "Verified user" : wantsAnon ? "Anonymous" : authorName;
  const kind = sv && !wantsAnon ? "google" : "anon";

  try {
    const comment = await addComment({
      portfolioSlug,
      nomineeId,
      parentId,
      body: text,
      authorName: name,
      authorKind: kind,
      voterKey: finalKey,
    });
    if (!comment) {
      return NextResponse.json(
        { success: false, error: "Could not post that." },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true, data: comment }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not post that." },
      { status: 500 }
    );
  }
}
