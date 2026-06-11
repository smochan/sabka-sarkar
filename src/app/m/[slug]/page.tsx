import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { portfolios } from "@/content/cabinet";
import { hasDeepDive } from "@/content/evidence/slugs";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Icon } from "@/components/Icon";
import { ChannelNominees } from "@/components/community/ChannelNominees";
import { Discussion } from "@/components/community/Discussion";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = portfolios.find((x) => x.slug === slug);
  if (!p) return { title: "Ministry" };
  return {
    title: `${p.name} — Dream Cabinet channel`,
    description: p.mandate.slice(0, 150),
  };
}

export default async function MinistryPage({ params }: Params) {
  const { slug } = await params;
  const portfolio = portfolios.find((p) => p.slug === slug);
  if (!portfolio) notFound();

  const showDeepDiveBanner = hasDeepDive(slug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Evidence brief banner */}
        {showDeepDiveBanner && (
          <div className="border-b border-saffron/40 bg-saffron/12">
            <div className="container-wide flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2 text-sm text-ink">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-saffron-ink" />
                A sourced evidence brief is available for this ministry.
              </p>
              <Link
                href={`/plan/${slug}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper hover:-translate-y-0.5"
              >
                Read the brief <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        <header className="grain border-b border-border bg-paper-2">
          <div className="container-wide py-12">
            <Link
              href="/#cabinet"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint hover:text-saffron-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All ministries
            </Link>
            <div className="mt-6 flex items-start gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-saffron/15 text-saffron-ink">
                <Icon name={portfolio.icon} className="h-7 w-7" />
              </span>
              <div>
                <h1 className="text-[length:var(--text-display)] text-ink">
                  {portfolio.name}
                </h1>
                <p className="mt-1 font-deva text-ink-faint">
                  {portfolio.tagline}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
              {portfolio.mandate}
            </p>
          </div>
        </header>

        <div className="container-wide grid gap-12 py-12 lg:grid-cols-[1fr_20rem]">
          <ChannelNominees slug={portfolio.slug} />
          <aside>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="eyebrow mb-3">The Council of 50</h2>
              <p className="mb-4 text-sm text-ink-faint">
                The minister would consult these voices every month.
              </p>
              <ul className="space-y-1.5 text-sm text-ink-soft">
                {portfolio.councilExamples.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-saffron-ink">·</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="border-t border-border bg-paper-2">
          <div className="container-wide max-w-3xl py-12">
            <Discussion
              slug={portfolio.slug}
              heading={`${portfolio.name} — open channel`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
