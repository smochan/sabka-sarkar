import { ExternalLink } from "lucide-react";
import type { Source } from "@/content/evidence/types";
import { cn } from "@/lib/utils";

const categoryLabel: Record<Source["category"], string> = {
  official: "Official",
  multilateral: "Multilateral",
  research: "Research",
  other: "Other",
};

const categoryStyle: Record<Source["category"], string> = {
  official: "bg-green/10 text-green-ink",
  multilateral: "bg-navy/10 text-navy",
  research: "bg-saffron/10 text-saffron-ink",
  other: "bg-ink/8 text-ink-faint",
};

type SourceListProps = {
  sources: Source[];
  /** When true renders a more compact single-line layout */
  compact?: boolean;
  className?: string;
};

/**
 * Renders an ordered source list with stable HTML ids of the form
 * `src-<id>` so that Cited superscript links can jump to them.
 */
export function SourceList({ sources, compact = false, className }: SourceListProps) {
  return (
    <ol className={cn("space-y-3", className)} aria-label="Sources">
      {sources.map((src, i) => (
        <li
          key={src.id}
          id={`src-${src.id}`}
          className={cn(
            "scroll-mt-24 rounded-lg border border-border",
            compact ? "flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-2.5" : "p-4"
          )}
        >
          {compact ? (
            <>
              <span className="w-5 shrink-0 text-right text-xs font-semibold text-ink-faint">
                {i + 1}.
              </span>
              <span className="text-sm font-medium text-ink">{src.title}</span>
              <span className="text-xs text-ink-faint">{src.org}, {src.year}</span>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-navy hover:text-saffron-ink"
                  aria-label={`Open ${src.title} in new tab`}
                >
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  Source
                </a>
              )}
              <span
                className={cn(
                  "ml-auto rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                  categoryStyle[src.category]
                )}
              >
                {categoryLabel[src.category]}
              </span>
            </>
          ) : (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
              <span className="w-6 shrink-0 pt-0.5 text-right text-sm font-semibold text-ink-faint">
                {i + 1}.
              </span>
              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
                  <span className="text-sm font-semibold text-ink leading-snug">
                    {src.title}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                      categoryStyle[src.category]
                    )}
                  >
                    {categoryLabel[src.category]}
                  </span>
                </div>
                <p className="text-xs text-ink-faint">
                  {src.org} &middot; {src.year}
                </p>
                {src.note && (
                  <p className="text-xs italic text-ink-faint">{src.note}</p>
                )}
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-navy hover:text-saffron-ink"
                    aria-label={`Open ${src.title} in new tab`}
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    View source
                  </a>
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
