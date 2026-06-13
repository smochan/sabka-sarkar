import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { sortition } from "@/content/sortition";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { SortitionChamber } from "@/components/sortition/SortitionChamber";
import { Faq } from "@/components/sortition/Faq";
import { Cited } from "@/components/evidence/Cited";
import { SourceList } from "@/components/evidence/SourceList";
import type { Source } from "@/content/evidence/types";

export const metadata: Metadata = {
  title: "What is sortition? — choosing leaders by lottery",
  description:
    "Sortition selects a representative panel of citizens at random instead of by election. Here's how it works, how it could work in India, and answers to the obvious objections.",
};

export default function SortitionPage() {
  const c = sortition;
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
            <p className="eyebrow mb-5">{c.hero.eyebrow}</p>
            <h1 className="max-w-[18ch] text-[length:var(--text-hero)] text-ink">
              {c.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
              {c.hero.sub}
            </p>
          </div>
        </section>

        {/* What it is */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide grid gap-10 lg:grid-cols-[20rem_1fr]">
            <Reveal>
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.whatItIs.title}
              </h2>
            </Reveal>
            <Reveal className="space-y-4">
              {c.whatItIs.body.map((p) => (
                <p
                  key={p}
                  className="text-[length:var(--text-lead)] leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Interactive chamber */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="mb-10 max-w-2xl">
              <p className="eyebrow mb-4">The house we imagine</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                A room small enough to actually think.
              </h2>
            </Reveal>
            <Reveal>
              <SortitionChamber
                seats={c.chamber.seats}
                centerLabel={c.chamber.centerLabel}
                sampleRoles={c.chamber.sampleRoles}
              />
            </Reveal>
          </div>
        </section>

        {/* How in India */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.howIndia.title}
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                {c.howIndia.intro}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.howIndia.points.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={(i % 3) * 70}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why small — size comparison */}
        <section className="print-tex section-pad border-b-2 border-ink bg-paper-2">
          <div className="container-wide grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
            <Reveal>
              <h2 className="poster-title text-[length:var(--text-display)] text-ink">
                {c.whySmall.title}
              </h2>
              <p className="mt-5 max-w-xl text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
                {c.whySmall.body}
              </p>
            </Reveal>
            <Reveal className="space-y-4">
              <div className="rounded-xl border border-ink/15 p-5">
                <div className="font-display text-5xl text-ink-faint">
                  {c.whySmall.currentCount}
                </div>
                <p className="mt-1 text-sm text-ink-faint">
                  {c.whySmall.currentLabel}
                </p>
              </div>
              <div className="rounded-xl border border-saffron bg-saffron/15 p-5">
                <div className="font-display text-5xl text-saffron-ink">
                  {c.whySmall.proposedCount}
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  {c.whySmall.proposedLabel}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Separation of powers */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.separation.title}
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                {c.separation.intro}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {c.separation.pillars.map((p) => (
                <div key={p.name} className="bg-card p-6">
                  <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it changes India */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.howItChanges.title}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.howItChanges.points.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={(i % 3) * 70}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/15 text-saffron-ink">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Precedents */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.precedents.title}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {c.precedents.items.map((p, i) => (
                <Reveal
                  key={p.place}
                  delay={(i % 2) * 60}
                  className="border-t-2 border-saffron pt-4"
                >
                  <h3 className="font-display text-xl text-ink">{p.place}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    <Cited text={p.body} sources={c.sources as Source[]} />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Constitutional path */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4">Legal roadmap</p>
              <h2 className="text-[length:var(--text-display)] text-ink">
                {c.constitutionalPath.title}
              </h2>
              <p className="mt-4 text-[length:var(--text-lead)] text-ink-soft">
                {c.constitutionalPath.intro}
              </p>
            </Reveal>
            <div className="mt-12 space-y-6">
              {c.constitutionalPath.steps.map((step, i) => (
                <Reveal
                  key={step.tag}
                  delay={i * 60}
                  className="rounded-xl border border-border bg-card p-6 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <div className="mb-3 sm:mb-0">
                    <span className="inline-block rounded-full bg-saffron/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-saffron-ink">
                      {step.tag}
                    </span>
                    <p className="mt-2 text-base font-semibold text-ink leading-snug">
                      {step.label}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed text-ink-soft">
                      <Cited text={step.body} sources={c.sources as Source[]} />
                    </p>
                    <div className="rounded-lg border border-border bg-paper px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-1">
                        Legal instrument
                      </p>
                      <p className="text-xs leading-relaxed text-ink-soft">
                        <Cited text={step.legalNote} sources={c.sources as Source[]} />
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-b border-border bg-paper-2">
          <div className="container-wide max-w-3xl">
            <Reveal>
              <h2 className="mb-10 text-[length:var(--text-display)] text-ink">
                The obvious objections
              </h2>
            </Reveal>
            <Faq items={c.faqs} />
          </div>
        </section>

        {/* Sources */}
        <section className="section-pad border-b border-border bg-paper">
          <div className="container-wide max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-4">Citations</p>
              <h2 className="mb-8 text-[length:var(--text-display)] text-ink">
                Sources
              </h2>
            </Reveal>
            <SourceList sources={c.sources as Source[]} compact />
          </div>
        </section>

        {/* CTA to end goal */}
        <section className="grain section-pad bg-saffron/12">
          <div className="container-wide max-w-3xl text-center">
            <h2 className="text-[length:var(--text-display)] text-ink">
              Now you&apos;re ready for the real plan.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[length:var(--text-lead)] text-ink-soft">
              This is where Sabka Sarkar is actually headed — and how we get there
              without breaking anything.
            </p>
            <Link
              href="/end-goal"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-ink px-8 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              See the end goal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
