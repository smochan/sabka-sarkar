import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, TriangleAlert } from "lucide-react";
import { portfolios } from "@/content/cabinet";
import { getDeepDive } from "@/content/evidence/index";
import { flagshipSlugs, hasDeepDive } from "@/content/evidence/slugs";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { Cited } from "@/components/evidence/Cited";
import { IndicatorGrid } from "@/components/evidence/IndicatorGrid";
import { InterventionCard } from "@/components/evidence/InterventionCard";
import { SourceList } from "@/components/evidence/SourceList";
import { RootCauses } from "@/components/evidence/RootCauses";
import { Benchmarks } from "@/components/evidence/Benchmarks";

type Params = { params: Promise<{ slug: string }> };

/** Generate static routes for all 12 portfolio slugs */
export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const dive = getDeepDive(slug);
  if (!dive) {
    return { title: "Evidence brief" };
  }
  return {
    title: `${dive.hero.title} — Evidence brief`,
    description: dive.hero.sub.replace(/\[c:[a-z0-9-]+\]/g, ""),
  };
}

export default async function PlanSlugPage({ params }: Params) {
  const { slug } = await params;

  // Unknown slug — not in any portfolio
  const portfolio = portfolios.find((p) => p.slug === slug);
  if (!portfolio) {
    notFound();
  }

  // Valid portfolio but not a flagship with a brief (registered or not)
  // Non-flagship portfolios redirect back to the plan section
  const isFlagship = (flagshipSlugs as readonly string[]).includes(slug);
  if (!isFlagship) {
    redirect("/#plan");
  }

  // Flagship but brief not yet registered (education/jobs in Phase 1)
  if (!hasDeepDive(slug)) {
    redirect("/#plan");
  }

  const dive = getDeepDive(slug);
  if (!dive) {
    // Should never reach here — hasDeepDive guards this — but satisfies TS
    redirect("/#plan");
  }

  const sourceCount = dive.sources.length;

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero — grain, tricolor rail */}
        <section className="grain relative border-b border-border bg-paper">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-paper to-green"
          />
          <div className="container-wide py-20">
            <Link
              href="/#plan"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint hover:text-saffron-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All sectors
            </Link>
            <p className="eyebrow mt-6 mb-5">{portfolio.name}</p>
            <h1 className="max-w-[22ch] text-[length:var(--text-hero)] text-ink">
              {dive.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
              <Cited text={dive.hero.sub} sources={dive.sources} />
            </p>
            <p className="mt-5 text-sm text-ink-faint">
              {sourceCount} source{sourceCount !== 1 ? "s" : ""} &middot;{" "}
              <Link href="#sources" className="text-navy hover:text-saffron-ink underline underline-offset-2">
                methodology
              </Link>
            </p>
          </div>
        </section>

        {/* Where India stands — indicators */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4">Where India stands</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                The numbers, sourced.
              </h2>
            </Reveal>
            <IndicatorGrid indicators={dive.indicators} sources={dive.sources} />
          </div>
        </section>

        {/* Root causes */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4">Why it hasn&#39;t changed</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                The root causes.
              </h2>
            </Reveal>
            <RootCauses items={dive.rootCauses} sources={dive.sources} />
          </div>
        </section>

        {/* Benchmarks */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4">What has worked</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                Benchmarks and precedents.
              </h2>
            </Reveal>
            <Benchmarks items={dive.benchmarks} sources={dive.sources} />
          </div>
        </section>

        {/* Pull-quote band — dark, no citations */}
        <section className="grain section-pad border-b border-border bg-ink">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <blockquote>
                <p className="text-[length:var(--text-display)] font-display leading-snug text-paper">
                  &ldquo;Every number here has a receipt. Every proposal names who
                  does it, what it costs, and what could go wrong.&rdquo;
                </p>
                <footer className="mt-6 text-sm uppercase tracking-[0.16em] text-paper/50">
                  Apni Sarkar — evidence standard
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Interventions */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4">What we propose</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                Costed interventions.
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                Each intervention names a problem, a causal mechanism, a
                measurable target, who implements it, what it costs, and the
                honest risks.
              </p>
            </Reveal>
            <div className="space-y-8">
              {dive.interventions.map((iv, i) => (
                <Reveal key={iv.title} delay={i * 60}>
                  <InterventionCard n={i + 1} item={iv} sources={dive.sources} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Overall cost */}
        <section className="grain section-pad border-b border-border bg-saffron/12">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">The price tag</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                {dive.overallCost.title}
              </h2>
              <div className="mt-5 space-y-4">
                {dive.overallCost.body.map((para) => (
                  <p key={para} className="text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
                    <Cited text={para} sources={dive.sources} />
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* What we don't know — honesty block */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <div className="flex items-start gap-3">
                <TriangleAlert
                  className="mt-1 h-5 w-5 shrink-0 text-saffron-ink"
                  aria-hidden="true"
                />
                <div>
                  <p className="eyebrow mb-4">What we don&#39;t know</p>
                  <h2 className="text-[length:var(--text-display)] text-ink">
                    Where we could be wrong.
                  </h2>
                </div>
              </div>
              <p className="mt-5 text-[length:var(--text-lead)] text-ink-soft">
                A credible plan names its own uncertainties. These are ours.
              </p>
              <ul className="mt-8 space-y-4">
                {dive.unknowns.map((u) => (
                  <li
                    key={u}
                    className="flex gap-3 rounded-lg border border-saffron/30 bg-saffron/5 p-4 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-0.5 text-saffron-ink" aria-hidden="true">
                      &bull;
                    </span>
                    <Cited text={u} sources={dive.sources} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Source list — anchors are required for Cited superscript links */}
        <section id="sources" className="section-pad border-b border-border bg-paper">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">Sources</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                Every number has a receipt.
              </h2>
              <p className="mt-4 text-sm text-ink-faint">
                {sourceCount} source{sourceCount !== 1 ? "s" : ""} cited on this page.{" "}
                <Link href="/sources" className="text-navy hover:text-saffron-ink underline underline-offset-2">
                  See the full methodology &rarr;
                </Link>
              </p>
            </Reveal>
            <SourceList sources={dive.sources} className="mt-8" />
          </div>
        </section>

        {/* CTA */}
        <section className="grain section-pad bg-paper-2">
          <div className="container-wide flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="eyebrow mb-2">Nominate a leader for this ministry</p>
              <h2 className="text-[length:var(--text-title)] text-ink">
                Who should lead {portfolio.name}?
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-4">
              <Link
                href={`/m/${slug}`}
                className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                Ministry channel <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#cabinet"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-card px-8 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Full cabinet
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
