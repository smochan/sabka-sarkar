import { cn } from "@/lib/utils";

interface LogoProps {
  /** pixel height of the emblem */
  size?: number;
  className?: string;
  title?: string;
}

/**
 * Sabka Sarkar emblem — three ascending bars in the Indian tricolor
 * (saffron → white → green), left-to-right = people rising, over an ink
 * baseline rule. The white bar carries a hairline ink outline so it stays
 * legible on light grounds. Matches the Twitter/X avatar identity.
 */
export function Logo({ size = 28, className, title = "Sabka Sarkar" }: LogoProps) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
    >
      {/* ascending bars */}
      <rect x="4" y="22" width="10" height="16" fill="var(--saffron)" />
      <rect
        x="19"
        y="14"
        width="10"
        height="24"
        fill="#ffffff"
        stroke="var(--ink)"
        strokeWidth="1.25"
      />
      <rect x="34" y="6" width="10" height="32" fill="var(--green)" />
      {/* ink baseline rule */}
      <rect x="2" y="42" width="44" height="3.5" fill="var(--ink)" />
    </svg>
  );
}
