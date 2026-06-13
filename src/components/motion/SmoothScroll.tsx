"use client";

import { useEffect } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Mounts a single Lenis smooth-scroll instance and drives it from the GSAP
 * ticker (so Lenis and ScrollTrigger stay frame-synced — the documented
 * integration). No-ops entirely under prefers-reduced-motion. Renders nothing.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    type LenisLike = {
      raf: (t: number) => void;
      destroy: () => void;
      on: (event: string, cb: () => void) => void;
    };
    let lenis: LenisLike | null = null;
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap, ScrollTrigger }] = await Promise.all([
        import("lenis"),
        loadGsap(),
      ]);
      if (cancelled) return;

      lenis = new Lenis({ lerp: 0.1, smoothWheel: true }) as unknown as LenisLike;

      // Drive Lenis from GSAP's ticker; disable lag smoothing for sync.
      const st = ScrollTrigger as { update: () => void };
      lenis.on("scroll", () => st.update());

      const tick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis?.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
