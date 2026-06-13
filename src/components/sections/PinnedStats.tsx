import { Reveal } from "@/components/Reveal";
import { TricolorRail } from "@/components/TricolorRail";

/**
 * "The receipts" — the most damning, sourced numbers, as a normal compact
 * section (no scroll-pinning; native scroll only, so nothing can freeze).
 */

interface Stat {
  big: string;
  unit: string;
  claim: string;
  source: string;
}

const STATS: ReadonlyArray<Stat> = [
  {
    big: "46%",
    unit: "of new MPs",
    claim: "face criminal cases.",
    source: "Association for Democratic Reforms, 2024",
  },
  {
    big: "₹1.35",
    unit: "lakh crore",
    claim: "the costliest election ever held.",
    source: "ADR, 2024 General Election",
  },
  {
    big: "7×",
    unit: "more babies",
    claim: "die in UP than in Kerala. Same country.",
    source: "SRS / RGI, 2023",
  },
  {
    big: "18%",
    unit: "got a job",
    claim: "out of everyone trained by Skill India.",
    source: "IndiaSpend, PMKVY analysis",
  },
];

export function PinnedStats() {
  return (
    <section
      aria-labelledby="receipts-heading"
      className="grain print-tex relative border-b-2 border-ink bg-paper-2 text-ink section-pad"
    >
      <TricolorRail className="absolute inset-x-0 top-0" />
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-3 text-saffron-ink">The receipts</p>
          <h2
            id="receipts-heading"
            className="poster-title max-w-[20ch] text-[length:var(--text-display)] text-ink"
          >
            The numbers they would rather you not see.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {STATS.map((s, i) => (
            <Reveal
              key={s.big}
              delay={(i % 2) * 80}
              className="border-t-2 border-ink pt-5"
            >
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="poster-title text-[clamp(3.5rem,2rem+8vw,7rem)] leading-none text-saffron-ink">
                  {s.big}
                </span>
                <span className="poster-title text-[length:var(--text-title)] text-ink">
                  {s.unit}
                </span>
              </p>
              <p className="mt-2 max-w-md text-[length:var(--text-lead)] text-ink">
                {s.claim}
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-ink-faint">
                Source — {s.source}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
