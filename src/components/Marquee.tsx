import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReadonlyArray<string>;
  /** seconds for one full loop */
  durationSec?: number;
  reverse?: boolean;
  className?: string;
  /** separator glyph between items */
  sep?: string;
}

/**
 * Infinite horizontal ticker. Pure CSS (no JS): the track is duplicated and
 * translated -50%, so the loop is seamless. Pauses on hover and freezes
 * entirely under prefers-reduced-motion (handled in globals.css).
 */
export function Marquee({
  items,
  durationSec = 40,
  reverse = false,
  className,
  sep = "✦",
}: MarqueeProps) {
  const sequence = (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="px-5">{item}</span>
          <span className="text-saffron/70" aria-hidden="true">
            {sep}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("marquee group relative overflow-hidden", className)}
      role="marquee"
    >
      <div
        className="marquee-track"
        data-reverse={reverse ? "true" : undefined}
        style={{ ["--marquee-duration" as string]: `${durationSec}s` }}
      >
        {sequence}
        {sequence}
      </div>
      {/* accessible, static copy for SR + no-JS */}
      <span className="sr-only">{items.join(". ")}</span>
    </div>
  );
}
