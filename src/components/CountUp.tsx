"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  /** the final numeric value to count to */
  value: number;
  prefix?: string;
  suffix?: string;
  /** animation duration in ms */
  durationMs?: number;
  /** decimal places to render */
  decimals?: number;
  className?: string;
}

function format(n: number, decimals: number): string {
  return n.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Counts up to `value` the first time it scrolls into view. Honors
 * prefers-reduced-motion by rendering the final value immediately. The final
 * value is always present in the DOM as text for SR / no-JS.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion: leave `started` false so the final value renders as-is.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            observer.unobserve(entry.target);
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs);
              // easeOutExpo
              const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs, started]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {format(started ? display : value, decimals)}
      {suffix}
    </span>
  );
}
