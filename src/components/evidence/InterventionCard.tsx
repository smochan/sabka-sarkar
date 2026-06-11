import { Crosshair, Landmark, TriangleAlert, Wallet } from "lucide-react";
import type { Intervention, Source } from "@/content/evidence/types";
import { Cited } from "./Cited";

type InterventionCardProps = {
  n: number;
  item: Intervention;
  sources: Source[];
};

function Row({
  label,
  text,
  sources,
}: {
  label: string;
  text: string;
  sources: Source[];
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </span>
      <p className="text-sm leading-relaxed text-ink-soft">
        <Cited text={text} sources={sources} />
      </p>
    </div>
  );
}

export function InterventionCard({ n, item, sources }: InterventionCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card">
      <header className="flex items-baseline gap-4 border-b border-border bg-paper-2/60 px-6 py-5 sm:px-8">
        <span className="font-display text-3xl text-saffron-ink">
          {String(n).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl text-ink sm:text-2xl">
          {item.title}
        </h3>
      </header>

      <div className="space-y-5 px-6 py-6 sm:px-8">
        <Row label="The problem" text={item.problem} sources={sources} />
        <Row label="The intervention" text={item.intervention} sources={sources} />
        <Row label="Why it works" text={item.mechanism} sources={sources} />

        {/* Target — the measurable commitment, visually distinct */}
        <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <span className="flex items-start gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-green-ink">
            <Crosshair className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            5-yr target
          </span>
          <div className="rounded-lg border border-green/30 bg-green/5 p-4">
            <p className="text-sm font-medium leading-relaxed text-ink">
              <Cited text={item.target.text} sources={sources} />
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-faint">
              Baseline: <Cited text={item.target.baseline} sources={sources} />
            </p>
          </div>
        </div>

        <div className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              <Landmark className="h-3.5 w-3.5" aria-hidden="true" /> Who does it
            </span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              <Cited text={item.owner} sources={sources} />
            </p>
          </div>
          <div>
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              <Wallet className="h-3.5 w-3.5" aria-hidden="true" /> What it costs
            </span>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              <Cited text={item.cost} sources={sources} />
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-saffron/30 bg-saffron/5 p-4">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-saffron-ink">
            <TriangleAlert className="h-3.5 w-3.5" aria-hidden="true" />
            Risks &amp; trade-offs
          </span>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            <Cited text={item.risks} sources={sources} />
          </p>
        </div>
      </div>
    </article>
  );
}
