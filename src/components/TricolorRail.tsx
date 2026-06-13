import { cn } from "@/lib/utils";

interface TricolorRailProps {
  className?: string;
  /** thickness utility, e.g. "h-1.5" (default) or "h-2" */
  thickness?: string;
}

/**
 * The Indian tricolor as a thin rail: saffron / true-white / green.
 * The white segment carries top+bottom ink hairlines so it reads as WHITE
 * against a near-white page (otherwise it disappears into the background).
 */
export function TricolorRail({ className, thickness = "h-1.5" }: TricolorRailProps) {
  return (
    <div aria-hidden="true" className={cn("flex w-full", thickness, className)}>
      <div className="flex-1 bg-saffron" />
      <div className="flex-1 border-y border-ink/25 bg-white" />
      <div className="flex-1 bg-green" />
    </div>
  );
}
