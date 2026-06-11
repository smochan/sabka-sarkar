/**
 * Feature flags — all default to false so the site works with zero ENV config.
 * Set NEXT_PUBLIC_INTERACTIVE=true in Vercel when the database is live.
 */
export const interactiveEnabled =
  process.env.NEXT_PUBLIC_INTERACTIVE === "true";
