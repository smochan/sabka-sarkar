"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { fiveYearPlan } from "@/content/plan";
import { portfolios } from "@/content/cabinet";
import { flagshipMeta, hasDeepDive } from "@/content/evidence/slugs";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

function iconFor(slug: string): string {
  return portfolios.find((p) => p.slug === slug)?.icon ?? "Scale";
}

export function FiveYearPlan() {
  const [active, setActive] = useState(fiveYearPlan[0]?.portfolioSlug ?? "");
  const sector = fiveYearPlan.find((s) => s.portfolioSlug === active);

  return (
    <section
      id="plan"
      aria-labelledby="plan-heading"
      className="print-tex section-pad border-b border-border bg-paper-2"
    >
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">A 5-year plan for India</p>
          <h2
            id="plan-heading"
            className="poster-title text-[length:var(--text-display)] text-ink"
          >
            What could actually change in five years.
          </h2>
          <p className="mt-5 text-[length:var(--text-lead)] text-ink-soft">
            Concrete goals, sector by sector. These are aspirational targets for
            this thought experiment — a direction of travel, not promises.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[18rem_1fr]">
          {/* Sector selector */}
          <div
            role="tablist"
            aria-label="Sectors"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {fiveYearPlan.map((s) => {
              const selected = s.portfolioSlug === active;
              return (
                <button
                  key={s.portfolioSlug}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(s.portfolioSlug)}
                  className={cn(
                    "flex shrink-0 items-center gap-2.5 rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors",
                    selected
                      ? "border-ink bg-ink text-paper"
                      : "border-border bg-card text-ink-soft hover:border-ink/30 hover:text-ink"
                  )}
                >
                  <Icon name={iconFor(s.portfolioSlug)} className="h-4 w-4" />
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {s.sector}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="mb-4 font-display text-2xl text-ink">
              {sector?.sector}
            </h3>

            {/* Flagship evidence band — saffron accent */}
            {sector && hasDeepDive(sector.portfolioSlug) && (
              <div className="mb-6 flex flex-col gap-2 rounded-lg border border-saffron/40 bg-saffron/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-soft">
                  <span className="font-semibold text-saffron-ink">Full evidence brief &mdash;</span>{" "}
                  {flagshipMeta[sector.portfolioSlug]?.sourceCount ?? 0} sources,{" "}
                  {flagshipMeta[sector.portfolioSlug]?.interventionCount ?? 0} costed
                  intervention{(flagshipMeta[sector.portfolioSlug]?.interventionCount ?? 0) !== 1 ? "s" : ""}
                </p>
                <Link
                  href={`/plan/${sector.portfolioSlug}`}
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-saffron-ink hover:text-ink"
                >
                  Read the brief <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Non-flagship honesty line */}
            {sector && !hasDeepDive(sector.portfolioSlug) && (
              <div className="mb-6 rounded-lg border border-border bg-paper-2 px-4 py-3">
                <p className="text-sm text-ink-faint">
                  Evidence brief in progress &mdash; these are directional targets,
                  not yet fully sourced.{" "}
                  <Link href="/sources" className="text-navy hover:text-saffron-ink underline underline-offset-2">
                    Our methodology
                  </Link>
                </p>
              </div>
            )}
            <ol className="relative space-y-7 before:absolute before:left-[1.15rem] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {sector?.years.map((y) => (
                <li key={y.year} className="relative flex gap-5">
                  <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron text-sm font-bold text-[oklch(0.16_0.01_60)]">
                    Y{y.year}
                  </span>
                  <ul className="space-y-2 pt-1">
                    {y.milestones.map((m) => (
                      <li key={m} className="flex gap-2.5 text-sm text-ink-soft">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-green-ink"
                          aria-hidden="true"
                        />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
