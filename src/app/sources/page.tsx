import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { SourceList } from "@/components/evidence/SourceList";
import { aggregateSources, categoryLabels, methodology } from "@/content/sources";
import type { SourceCategory } from "@/content/evidence/types";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Sources & methodology — Apni Sarkar",
  description:
    "Every number on this site has a receipt. Browse the full source list, organised by category, with links to original documents.",
};

const categoryOrder: SourceCategory[] = ["official", "multilateral", "research", "other"];

export default function SourcesPage() {
  const sources = aggregateSources();

  const byCategory = categoryOrder
    .map((cat) => ({
      cat,
      label: categoryLabels[cat],
      items: sources.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="grain relative border-b border-border bg-paper">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-paper to-green"
          />
          <div className="container-wide py-20">
            <p className="eyebrow mb-5">Transparency</p>
            <h1 className="max-w-[22ch] text-[length:var(--text-hero)] text-ink">
              Every number on this site has a receipt.
            </h1>
            <p className="mt-7 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
              We cite primary sources for every statistic, baseline, and target.
              Browse the full list below, or jump to the methodology section for
              how we pick and apply sources.
            </p>
            <p className="mt-5 text-sm text-ink-faint">
              {sources.length} source{sources.length !== 1 ? "s" : ""} indexed
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section
          id="methodology"
          className="section-pad border-b border-border bg-paper-2"
          aria-labelledby="methodology-heading"
        >
          <div className="container-wide max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">How we work</p>
              <h2
                id="methodology-heading"
                className="text-[length:var(--text-display)] text-ink"
              >
                {methodology.title}
              </h2>
              <p className="mt-5 text-[length:var(--text-lead)] text-ink-soft">
                {methodology.intro}
              </p>
              <div className="mt-6 space-y-4">
                {methodology.body.map((para) => (
                  <p key={para} className="leading-relaxed text-ink-soft">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Master source list, grouped by category */}
        <section
          id="source-list"
          className="section-pad border-b border-border bg-paper"
          aria-labelledby="source-list-heading"
        >
          <div className="container-wide max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">All sources</p>
              <h2
                id="source-list-heading"
                className="text-[length:var(--text-display)] text-ink"
              >
                The full list.
              </h2>
              <p className="mt-4 text-sm text-ink-faint">
                Organised by source type. Each entry links to the original document.
                Source ids match the superscript references in evidence briefs.
              </p>
            </Reveal>

            <div className="mt-10 space-y-14">
              {byCategory.map(({ cat, label, items }) => (
                <div key={cat}>
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {label} ({items.length})
                  </h3>
                  <SourceList sources={items} />
                </div>
              ))}
            </div>

            {sources.length === 0 && (
              <p className="mt-10 text-ink-faint">
                No sources registered yet. Evidence briefs will populate this list as
                they are published.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="grain section-pad bg-paper-2">
          <div className="container-wide flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="eyebrow mb-2">Dive into the evidence</p>
              <h2 className="text-[length:var(--text-title)] text-ink">
                Read a sector brief.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link
                href="/plan/health"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                Health &amp; Wellbeing
              </Link>
              <Link
                href="/#plan"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-card px-8 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                All sectors
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
