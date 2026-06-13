// Single source of truth for the Sabka Sarkar brand.
// Hex values are canonical — they match the Twitter/X assets (see
// social-assets/HANDOFF.md) and src/app/globals.css. The site, OG share
// cards, and (next session) Remotion video all read from here so the brand
// never drifts across surfaces.

// Risograph-newsprint palette (matches the site's oklch tokens in globals.css).
export const brandColors = {
  saffron: "#ff8a1f", // punchier orange
  paper: "#f7f4ec", // bright bone white
  green: "#0f7a2e", // deeper India green
  ink: "#14110d", // true near-black
  saffronInk: "#b8631a", // readable burnt-orange (eyebrow text)
} as const;

export const brandFonts = {
  // Display / poster — Teko (condensed, Latin + Devanagari)
  poster: "Teko",
  // Placard accent — Yatra One (railway-signage)
  placard: "Yatra One",
  body: "Inter",
  devanagari: "Tiro Devanagari Hindi",
} as const;

export const brand = {
  name: "Sabka Sarkar",
  nameDeva: "सबकी सरकार",
  tagline: "If the best of our generation ran the country.",
} as const;

// Stat ticker — every line is sourced in docs/research/synthesis.md.
// Kept terse + uppercase-ready for the agitprop marquee and video lower-thirds.
export const statTicker: ReadonlyArray<string> = [
  "46% of newly elected MPs face criminal cases",
  "₹1.35 lakh crore — the costliest election ever",
  "7× more babies die in UP than in Kerala",
  "Only 18% of Skill India trainees got placed",
  "10 lakh teaching posts lie vacant",
  "India spends just 1.9% of GDP on health — WHO says 6%",
];

// Short, punchy slogans for stamps / placards.
export const slogans: ReadonlyArray<string> = [
  "Non-partisan",
  "Open source",
  "Owned by no one",
  "Chosen by the people",
];
