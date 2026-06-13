/**
 * Generates Twitter profile + banner using Segmind FLUX1-dev.
 * Run: node scripts/gen-twitter-assets.mjs
 * Requires SEGMIND_API_KEY in environment.
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../social-assets");
mkdirSync(OUT_DIR, { recursive: true });

const API_KEY = process.env.SEGMIND_API_KEY;
if (!API_KEY) { console.error("SEGMIND_API_KEY not set"); process.exit(1); }

async function generate({ prompt, negative_prompt = "text, words, letters, watermark, blurry, ugly, distorted, low quality", width, height, filename, model = "sdxl1.0-txt2img" }) {
  console.log(`\nGenerating ${filename} via ${model} (${width}×${height})…`);
  const body = {
    prompt,
    negative_prompt,
    samples: 1,
    scheduler: "UniPC",
    num_inference_steps: 30,
    guidance_scale: 8,
    seed: 1337,
    img_width: width,
    img_height: height,
    base64: true,
  };
  const res = await fetch(`https://api.segmind.com/v1/${model}`, {
    method: "POST",
    headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) { const e = await res.text(); throw new Error(`Segmind ${res.status}: ${e}`); }
  const data = await res.json();
  const b64 = data.image ?? data.output ?? data.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image: " + JSON.stringify(data).slice(0, 300));
  writeFileSync(join(OUT_DIR, filename), Buffer.from(b64, "base64"));
  console.log(`  Saved → ${join(OUT_DIR, filename)}`);
}

const PROFILE_PROMPT = `Civic seal of India's people's democracy movement. Center: a detailed Ashoka Chakra (24-spoke dharma wheel) in burnished saffron-gold on deep dark charcoal stone. The wheel occupies 60% of the frame, ornate spokes, museum engraving quality. Background: dark warm almost-black stone texture with subtle concentric light rings. Composition: perfectly centered, symmetrical. Style: government seal, monumental, civic gravitas. No text, no faces, no political figures. Suitable for circular crop.`;

const BANNER_PROMPT = `Wide cinematic banner 3:2 aspect ratio. India's new Sansad Bhavan Parliament building at golden dusk — dramatic saffron and amber sunset sky, architectural photography, ultra-sharp building details, long shadows. Left quarter of image gradually darker warm shadow zone for text overlay. No people, no faces. Top edge: very thin horizontal tricolor ribbon (saffron / white / green). Photorealistic, editorial magazine quality, 4K, aspirational and powerful civic imagery. No text embedded in image.`;

await generate({ prompt: PROFILE_PROMPT, width: 1024, height: 1024, filename: "twitter-profile-ai.png" });
await generate({ prompt: BANNER_PROMPT,  width: 1536, height: 1024, filename: "twitter-banner-ai.png" });

console.log("\nDone. Files in social-assets/");
