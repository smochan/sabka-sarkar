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
      className="grain section-pad border-b border-border bg-ink text-paper"
    >
      <div className="container-wide">

        {/* Header */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-saffron">Idea II — the reform</p>
          <h2
            id="sortition-pillar-heading"
            className="text-[length:var(--text-display)] text-paper"
          >
            A parliament that looks like India, because it is India.
          </h2>
          <p className="mt-5 text-[length:var(--text-lead)] leading-relaxed text-paper/75">
            When representatives are drawn by lottery — stratified so the
            assembly mirrors the country by gender, region, caste, age, and
            income — power stops being a prize that money or connections can
            buy.
          </p>
        </Reveal>

        {/* Stat pair — 543 → 200 (reuses whySmall data) */}
        <Reveal className="mt-14 grid max-w-lg gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-paper/15 p-6">
            <div className="font-display text-5xl leading-none text-paper/45">
              {whySmall.currentCount}
            </div>
            <p className="mt-2 text-sm text-paper/55">
              {whySmall.currentLabel}
            </p>
          </div>
          <div className="rounded-xl border border-saffron bg-saffron/10 p-6">
            <div className="font-display text-5xl leading-none text-saffron">
              {whySmall.proposedCount}
            </div>
            <p className="mt-2 text-sm text-paper/80">
              {whySmall.proposedLabel}
            </p>
          </div>
        </Reveal>

        {/* Precedent strip */}
        <Reveal className="mt-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-paper/40">
            Already tried here
          </p>
          <ul className="flex flex-wrap gap-3" aria-label="Countries with sortition precedents">
            {PRECEDENTS.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-full border border-paper/20 px-4 py-1.5 text-sm font-medium text-paper/75">
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
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-paper px-7 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Understand sortition <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/end-goal"
            className="inline-flex h-12 items-center justify-center rounded-md border border-paper/20 px-7 text-base font-semibold text-paper/80 transition-colors hover:border-paper/40 hover:bg-paper/5"
          >
            The end goal
          </Link>
        </Reveal>

        <Reveal>
          <p className="mt-5 text-sm text-paper/40">
            Read the sortition page first — the end goal only makes sense
            once you do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
