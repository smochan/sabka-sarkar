// Client-safe slugs module — the ONLY evidence module client components may import.
// Does NOT import the registry or any content file. Keep it tiny so it never
// pulls large prose strings into the browser bundle.

/** All three flagship deep-dive slugs (whether or not the brief is registered yet). */
export const flagshipSlugs = ["health", "education", "jobs"] as const;

export type FlagshipSlug = (typeof flagshipSlugs)[number];

/**
 * Per-slug metadata for the homepage FiveYearPlan component.
 * Only REGISTERED dives should appear here; unregistered flagships
 * (education, jobs in Phase 1) are omitted — their tabs fall back to
 * the in-progress honesty line.
 *
 * Counts are declared here and asserted against real arrays in index.ts
 * via assertSlugMeta() called at the bottom of that module.
 * NOTE: index.ts exports assertSlugMeta for use there; we define the
 * source-of-truth here and index.ts validates it.
 */
export const flagshipMeta: Record<
  string,
  { sector: string; sourceCount: number; interventionCount: number }
> = {
  health: {
    sector: "Health & Wellbeing",
    sourceCount: 35,
    interventionCount: 6,
  },
  education: {
    sector: "Education & Skills",
    sourceCount: 44,
    interventionCount: 5,
  },
  jobs: {
    sector: "Jobs & Livelihoods",
    sourceCount: 36,
    interventionCount: 6,
  },
};

/**
 * Returns true when a slug has a registered evidence brief.
 * Safe to call from client components.
 */
export function hasDeepDive(slug: string): boolean {
  return slug in flagshipMeta;
}
