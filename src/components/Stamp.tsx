import { cn } from "@/lib/utils";

interface StampProps {
  children: React.ReactNode;
  /** rotation in degrees; defaults to a slight counter-clockwise tilt */
  rotate?: number;
  className?: string;
}

/** Rotated, bordered protest stamp ("NON-PARTISAN", "OPEN SOURCE", …). */
export function Stamp({ children, rotate, className }: StampProps) {
  return (
    <span
      className={cn("stamp text-[0.7rem] sm:text-xs", className)}
      style={rotate !== undefined ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </span>
  );
}
