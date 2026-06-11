import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { portfolios } from "@/content/cabinet";
import { flagshipSlugs } from "@/content/evidence/slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/sortition`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/end-goal`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sources`, changeFrequency: "weekly", priority: 0.8 },
  ];

  // /plan/{health,education,jobs} — 3 flagship slugs
  const planRoutes: MetadataRoute.Sitemap = flagshipSlugs.map((slug) => ({
    url: `${base}/plan/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // /m/{slug} — all 12 portfolio ministry channels
  const ministryRoutes: MetadataRoute.Sitemap = portfolios.map((p) => ({
    url: `${base}/m/${p.slug}`,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...planRoutes, ...ministryRoutes];
}
