import { Globe, MapPin } from "lucide-react";
import type { Benchmark, Source } from "@/content/evidence/types";
import { Cited } from "./Cited";
import { Reveal } from "@/components/Reveal";

type BenchmarksProps = {
  items: Benchmark[];
  sources: Source[];
};

function BenchmarkCard({
  item,
  sources,
  index,
}: {
  item: Benchmark;
  sources: Source[];
  index: number;
}) {
  return (
    <Reveal
      delay={(index % 3) * 70}
      className="rounded-xl border border-border bg-card p-6"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {item.scope === "world" ? (
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {item.scope === "world" ? "International" : "India"}
      </div>
      <h3 className="mt-3 font-display text-xl text-ink">{item.place}</h3>
      <p className="mt-1 text-sm font-medium text-saffron-ink">{item.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        <Cited text={item.body} sources={sources} />
      </p>
    </Reveal>
  );
}

/**
 * Renders benchmarks grouped into two panels:
 *   "Around the world" (scope: "world")
 *   "Within India"     (scope: "india")
 *
 * Sections are skipped entirely when no items match that scope.
 */
export function Benchmarks({ items, sources }: BenchmarksProps) {
  const worldItems = items.filter((b) => b.scope === "world");
  const indiaItems = items.filter((b) => b.scope === "india");

  return (
    <div className="space-y-12">
      {worldItems.length > 0 && (
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">
            <Globe className="h-4 w-4" aria-hidden="true" />
            Around the world
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {worldItems.map((item, i) => (
              <BenchmarkCard key={item.place} item={item} sources={sources} index={i} />
            ))}
          </div>
        </div>
      )}

      {indiaItems.length > 0 && (
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink-faint">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Within India
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {indiaItems.map((item, i) => (
              <BenchmarkCard key={item.place} item={item} sources={sources} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
