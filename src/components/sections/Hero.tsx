import Link from "next/link";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-border bg-paper"
      aria-labelledby="hero-heading"
    >
      {/* tricolor accent rail */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-paper to-green"
      />
      <div className="container-wide relative pb-20 pt-20 sm:pt-28 lg:pb-28">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>

        <h1
          id="hero-heading"
          className="max-w-[16ch] text-[length:var(--text-hero)] font-semibold tracking-tight text-ink"
        >
          {hero.headlineLead}{" "}
          <span className="relative whitespace-nowrap text-saffron-ink">
            {hero.headlineEmphasis}
          </span>{" "}
          {hero.headlineTail}
        </h1>

        <p className="mt-8 max-w-2xl text-[length:var(--text-lead)] text-ink-soft">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#cabinet"
            className="inline-flex h-12 items-center justify-center rounded-md bg-saffron px-7 text-base font-semibold text-[oklch(0.16_0.01_60)] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="#two-ideas"
            className="inline-flex h-12 items-center justify-center rounded-md border border-ink/20 px-7 text-base font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-paper-2"
          >
            {hero.ctaSecondary}
          </Link>
        </div>

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-faint">
          {hero.disclaimer}
        </p>
      </div>

      <p className="sr-only">{site.description}</p>
    </section>
  );
}
