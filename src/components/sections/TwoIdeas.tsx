import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function TwoIdeas() {
  return (
    <section
      id="two-ideas"
      aria-labelledby="two-ideas-heading"
      className="print-tex section-pad border-b border-border bg-paper"
    >
      <div className="container-wide">
        <Reveal className="mb-12">
          <p className="eyebrow mb-4">What this project argues</p>
          <h2
            id="two-ideas-heading"
            className="poster-title max-w-[18ch] text-[length:var(--text-display)] text-ink"
          >
            Two ideas. One project.
          </h2>
        </Reveal>

        {/*
          Split panel: left is bg-card (paper family, saffron accent),
          right is bg-ink (dark, paper text).
          Mobile: stack. Tablet+: side by side with a tricolor hairline divider.
        */}
        <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border lg:flex-row">

          {/* Vertical tricolor hairline — visible only on large screens */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-saffron via-paper to-green lg:block"
          />

          {/* Panel I — five-year plan (light) */}
          <div className="flex flex-col bg-card px-8 py-10 sm:px-10 sm:py-12 lg:w-1/2 lg:px-12">
            <Reveal>
              {/* Oversized Fraunces numeral */}
              <span
                aria-hidden="true"
                className="mb-4 block font-display text-[5.5rem] leading-none text-saffron/25 lg:text-[7rem]"
                style={{ fontVariantNumeric: "oldstyle-nums" }}
              >
                I
              </span>

              {/* Saffron accent bar */}
              <div className="mb-6 h-1 w-12 rounded-full bg-saffron" aria-hidden="true" />

              <p className="eyebrow mb-3">Idea I — the plan</p>
              <h3 className="text-[length:var(--text-title)] text-ink">
                A plan for the next five years
              </h3>
              <p className="mt-4 text-[length:var(--text-base)] leading-relaxed text-ink-soft">
                Evidence-based plans for health, education, and jobs —
                every number sourced, every intervention costed, every
                target traceable to a real-world benchmark. What could
                actually change if the right people were in charge.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#plan"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-saffron px-6 text-sm font-semibold text-[oklch(0.16_0.01_60)] transition-transform hover:-translate-y-0.5"
                >
                  See the plan <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/plan/health"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-paper-2"
                >
                  Read the evidence briefs
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Panel II — sortition reform */}
          <div className="flex flex-col bg-paper-2 px-8 py-10 sm:px-10 sm:py-12 lg:w-1/2 lg:px-12">
            <Reveal>
              {/* Oversized numeral */}
              <span
                aria-hidden="true"
                className="mb-4 block font-display text-[5.5rem] leading-none text-green/30 lg:text-[7rem]"
              >
                II
              </span>

              {/* Green accent bar */}
              <div className="mb-6 h-1 w-12 rounded-full bg-green" aria-hidden="true" />

              <p className="eyebrow mb-3 text-saffron-ink">Idea II — the reform</p>
              <h3 className="text-[length:var(--text-title)] text-ink">
                A reform for the next fifty
              </h3>
              <p className="mt-4 text-[length:var(--text-base)] leading-relaxed text-ink-soft">
                Ending the auction for power — a legislature of ordinary
                citizens chosen by lot, not by fundraising and party
                machinery. Already tried in Ireland, France, and Belgium.
                It sounds radical until you see how it works.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/sortition"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ink px-6 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Understand sortition <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/end-goal"
                  className="inline-flex h-11 items-center justify-center rounded-md border-2 border-ink px-6 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Then see the end goal
                </Link>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-ink-faint">
                Read the sortition page first — the end goal only makes
                sense once you do.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
