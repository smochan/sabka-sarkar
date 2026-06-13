"use client";

import { useEffect, useRef, useState } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";
import { TricolorRail } from "@/components/TricolorRail";
import { cn } from "@/lib/utils";

/**
 * A pinned scrollytelling sequence: the viewport "sticks" while the reader
 * scrolls through a handful of the most damning, sourced numbers — each
 * crossfading to the next. CSS `position: sticky` does the pinning (robust
 * with Lenis); ScrollTrigger only maps scroll progress → active index.
 *
 * Degrades fully: with no JS or reduced motion it renders as a plain stacked
 * list of the same stats (all visible, no pin).
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || prefersReducedMotion()) return;

    let trigger: { kill: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const { ScrollTrigger } = await loadGsap();
      if (cancelled || !sectionRef.current) return;
      setEnhanced(true);

      const ST = ScrollTrigger as {
        create: (cfg: Record<string, unknown>) => { kill: () => void };
        refresh: () => void;
      };

      trigger = ST.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self: { progress: number }) => {
          const idx = Math.min(
            STATS.length - 1,
            Math.floor(self.progress * STATS.length)
          );
          setActive(idx);
        },
      });
      ST.refresh();
    })();

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pinned-stats-heading"
      className={cn(
        "grain print-tex relative border-b-2 border-ink bg-paper-2 text-ink",
        enhanced ? "" : "section-pad"
      )}
      style={enhanced ? { height: `${STATS.length * 100}vh` } : undefined}
    >
      <h2 id="pinned-stats-heading" className="sr-only">
        The numbers they would rather you not see
      </h2>

      {/* top tricolor rail */}
      <TricolorRail className="absolute inset-x-0 top-0 z-10" />

      {enhanced ? (
        // Pinned mode: one sticky viewport, layers crossfade by active index.
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="halftone pointer-events-none absolute inset-0 text-ink/[0.05]" />
          <div className="container-wide relative">
            <p className="eyebrow mb-8 text-saffron-ink">The receipts</p>
            <div className="relative min-h-[42vh]">
              {STATS.map((s, i) => (
                <div
                  key={s.big}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-out",
                    i === active
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  )}
                >
                  <StatBlock stat={s} />
                </div>
              ))}
            </div>
            {/* progress dots */}
            <div className="mt-10 flex gap-2" aria-hidden="true">
              {STATS.map((s, i) => (
                <span
                  key={s.big}
                  className={cn(
                    "h-1 w-10 rounded-full transition-colors",
                    i === active ? "bg-saffron" : "bg-ink/15"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Static fallback: stacked list, all visible.
        <div className="container-wide">
          <p className="eyebrow mb-10 text-saffron">The receipts</p>
          <ul className="space-y-12">
            {STATS.map((s) => (
              <li key={s.big}>
                <StatBlock stat={s} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function StatBlock({ stat }: { stat: Stat }) {
  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-4">
        <span className="poster-title text-[clamp(4rem,2rem+14vw,12rem)] text-saffron-ink">
          {stat.big}
        </span>
        <span className="poster-title text-[length:var(--text-title)] text-ink">
          {stat.unit}
        </span>
      </p>
      <p className="mt-2 max-w-2xl text-[length:var(--text-lead)] text-ink">
        {stat.claim}
      </p>
      <p className="mt-4 text-xs uppercase tracking-widest text-ink-faint">
        Source — {stat.source}
      </p>
    </div>
  );
}
