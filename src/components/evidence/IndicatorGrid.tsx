import type { Indicator, Source } from "@/content/evidence/types";
import { Cited } from "./Cited";
import { Reveal } from "@/components/Reveal";

type IndicatorGridProps = {
  indicators: Indicator[];
  sources: Source[];
};

export function IndicatorGrid({ indicators, sources }: IndicatorGridProps) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {indicators.map((ind, i) => (
        <Reveal key={ind.label} delay={(i % 3) * 60} className="bg-card p-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl text-ink sm:text-5xl">
              {ind.value}
            </span>
            <Cited
              text={ind.cite.map((id) => `[c:${id}]`).join("")}
              sources={sources}
            />
          </div>
          <p className="mt-2 text-sm font-medium text-ink-soft">{ind.label}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-ink-faint">
            {ind.vintage}
          </p>
          {ind.context && (
            <p className="mt-2 text-xs leading-relaxed text-ink-faint">
              <Cited text={ind.context} sources={sources} />
            </p>
          )}
        </Reveal>
      ))}
    </div>
  );
}
