import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { endgoal } from "@/content/endgoal";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { RoadmapTimeline } from "@/components/endgoal/RoadmapTimeline";

export const metadata: Metadata = {
  title: "The end goal — from a dream cabinet to government by the people",
  description:
    "A long-term, legitimate reform path: the merit-based interim cabinet is a bridge to a sortition-based system, piloted from the panchayat up.",
};

export default function EndGoalPage() {
  const c = endgoal;
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Prerequisite gate */}
        <div className="border-b border-saffron/40 bg-saffron/15">
          <div className="container-wide flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm text-ink">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-saffron-ink" />
              {c.prerequisite.text}
            </p>
            <Link
              href="/sortition"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper hover:-translate-y-0.5"
            >
              {c.prerequisite.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="grain border-b border-border bg-paper">
          <div className="container-wide py-20">
            <p className="eyebrow mb-5">{c.hero.eyebrow}</p>
            <h1 className="max-w-[18ch] text-[length:var(--text-hero)] text-ink">
              {c.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
              {c.hero.sub}
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="mb-12 max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.roadmap.title}
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                {c.roadmap.intro}
              </p>
            </Reveal>
            <RoadmapTimeline phases={c.roadmap.phases} />
          </div>
        </section>

        {/* Feasibility */}
        {c.feasibility && (
          <section className="print-tex section-pad border-b-2 border-ink bg-paper-2">
            <div className="container-wide grid gap-10 lg:grid-cols-[20rem_1fr]">
              <Reveal>
                <p className="eyebrow mb-4 text-ink-faint">Reality check</p>
                <h2 className="poster-title text-[length:var(--text-display)] text-ink">
                  {c.feasibility.title}
                </h2>
              </Reveal>
              <Reveal className="space-y-5">
                {c.feasibility.body.map((p, i) => (
                  <p
                    key={i}
                    className="text-[length:var(--text-lead)] leading-relaxed text-ink-soft"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </section>
        )}

        {/* Parliament */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.parliament.title}
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                {c.parliament.intro}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.parliament.features.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={(i % 3) * 70}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/15 text-saffron-ink">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="print-tex section-pad border-b-2 border-ink bg-paper-2">
          <div className="container-wide">
            <Reveal>
              <h2 className="poster-title max-w-[20ch] text-[length:var(--text-display)] text-ink">
                {c.principles.title}
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {c.principles.items.map((p, i) => (
                <li key={p.title}>
                  <Reveal delay={i * 50} className="border-l-2 border-saffron pl-5">
                    <h3 className="text-xl text-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-faint">{p.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA + disclaimer */}
        <section className="grain section-pad bg-saffron/12">
          <div className="container-wide max-w-3xl text-center">
            <h2 className="text-[length:var(--text-display)] text-ink">
              It starts with one nomination.
            </h2>
            <Link
              href="/#cabinet"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Nominate your cabinet <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-ink-faint">
              {c.disclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
