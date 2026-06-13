import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sortition } from "@/content/sortition";
import { Reveal } from "@/components/Reveal";

const PRECEDENTS = [
  "Ireland",
  "France — Citizens' Convention",
  "Ostbelgien, Belgium",
  "OECD deliberative wave",
] as const;

export function SortitionPillar() {
  const { whySmall } = sortition;

  return (
    <section
      id="sortition-pillar"
      aria-labelledby="sortition-pillar-heading"
      className="grain print-tex section-pad border-b-2 border-ink bg-paper-2"
    >
      <div className="container-wide">

        {/* Header */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-saffron-ink">Idea II — the reform</p>
          <h2
            id="sortition-pillar-heading"
            className="poster-title text-[length:var(--text-display)] text-ink"
          >
            A parliament that looks like India, because it is India.
          </h2>
          <p className="mt-5 text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
            When representatives are drawn by lottery — stratified so the
            assembly mirrors the country by gender, region, caste, age, and
            income — power stops being a prize that money or connections can
            buy.
          </p>
        </Reveal>

        {/* Stat pair — 543 → 200 (reuses whySmall data) */}
        <Reveal className="mt-14 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-ink bg-card p-6">
            <div className="font-display text-5xl leading-none text-ink">
              {whySmall.currentCount}
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              {whySmall.currentLabel}
            </p>
          </div>
          <div className="rounded-xl border-2 border-saffron bg-saffron/15 p-6">
            <div className="font-display text-5xl leading-none text-saffron-ink">
              {whySmall.proposedCount}
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              {whySmall.proposedLabel}
            </p>
          </div>
        </Reveal>

        {/* Precedent strip */}
        <Reveal className="mt-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-faint">
            Already tried here
          </p>
          <ul className="flex flex-wrap gap-3" aria-label="Countries with sortition precedents">
            {PRECEDENTS.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-full border border-ink/25 px-4 py-1.5 text-sm font-medium text-ink-soft">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* CTAs */}
        <Reveal className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/sortition"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-7 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            Understand sortition <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/end-goal"
            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-ink px-7 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            The end goal
          </Link>
        </Reveal>

        <Reveal>
          <p className="mt-5 text-sm text-ink-faint">
            Read the sortition page first — the end goal only makes sense
            once you do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
