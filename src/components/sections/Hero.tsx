import Link from "next/link";
import { hero, site } from "@/content/site";
import { PosterHeading } from "@/components/PosterHeading";
import { Marquee } from "@/components/Marquee";
import { Stamp } from "@/components/Stamp";
import { TricolorRail } from "@/components/TricolorRail";
import { statTicker } from "@/lib/brand";

const SCALE = [
  { value: "1.4B", label: "people" },
  { value: "543", label: "MPs today" },
  { value: "12", label: "ministries" },
  { value: "₹0", label: "party funds" },
];

// Authentic 24-spoke Ashoka Chakra — the flag's wheel, in navy.
function AshokaChakra() {
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);
  const C = 200;
  return (
    <svg
      viewBox="0 0 400 400"
      className="chakra-spin h-full w-full"
      aria-hidden="true"
    >
      {/* outer ring (double rim) */}
      <circle cx={C} cy={C} r="194" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx={C} cy={C} r="182" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* hub */}
      <circle cx={C} cy={C} r="30" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx={C} cy={C} r="9" fill="currentColor" />
      {spokes.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const sin = Math.sin(rad);
        const cos = Math.cos(rad);
        // spoke line
        const x1 = C + 30 * sin;
        const y1 = C - 30 * cos;
        const x2 = C + 182 * sin;
        const y2 = C - 182 * cos;
        // rim stud at spoke end
        const dx = C + 188 * sin;
        const dy = C - 188 * cos;
        return (
          <g key={deg}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.25" />
            <circle cx={dx} cy={dy} r="3" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b-2 border-ink bg-paper"
      aria-labelledby="hero-heading"
    >
      {/* top tricolor rail */}
      <TricolorRail className="absolute inset-x-0 top-0 z-10" />

      {/* Ashoka Chakra watermark — navy, the flag's true wheel colour */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-[42%] h-[600px] w-[600px] -translate-y-1/2 text-navy/[0.18] sm:-right-10 lg:right-6"
      >
        <AshokaChakra />
      </div>

      <div className="container-wide relative pb-16 pt-20 sm:pt-28 lg:pb-20">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <p className="eyebrow text-saffron-ink">{hero.eyebrow}</p>
          <Stamp className="text-ink/70">Owned by no one</Stamp>
        </div>

        <PosterHeading
          as="h1"
          id="hero-heading"
          animate
          className="max-w-[14ch] text-[length:var(--text-hero)] text-ink"
        >
          {hero.headlineLead}{" "}
          <span className="riso-offset text-saffron">
            {hero.headlineEmphasis}
          </span>{" "}
          {hero.headlineTail}
        </PosterHeading>

        {/* scale framing */}
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2">
          {SCALE.map((s, i) => (
            <span key={s.label} className="flex items-baseline gap-1.5">
              {i > 0 && (
                <span className="mr-2 text-paper/20" aria-hidden="true">
                  /
                </span>
              )}
              <span className="poster-title text-2xl text-saffron-ink">{s.value}</span>
              <span className="text-sm text-ink-faint">{s.label}</span>
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-ink-soft">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#cabinet"
            className="inline-flex h-12 items-center justify-center rounded-md bg-saffron px-7 text-base font-semibold uppercase tracking-wide text-[oklch(0.16_0.01_60)] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="#two-ideas"
            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-ink px-7 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {hero.ctaSecondary}
          </Link>
        </div>

        <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-faint">
          {hero.disclaimer}
        </p>
      </div>

      {/* stat ticker — the agitprop signature, sourced from research */}
      <div className="relative border-t-2 border-ink bg-paper py-3 text-sm font-semibold uppercase tracking-wide text-ink">
        <Marquee items={statTicker} durationSec={50} />
      </div>

      <p className="sr-only">{site.description}</p>
    </section>
  );
}
