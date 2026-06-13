// Lazy, client-only GSAP loader. Dynamically imports gsap + plugins so they
// stay off the critical path, and registers each plugin exactly once.
//
// Usage (inside a "use client" component / effect):
//   const { gsap, ScrollTrigger } = await loadGsap();

import type { gsap as GsapType } from "gsap";

type GsapBundle = {
  gsap: typeof GsapType;
  // ScrollTrigger / SplitText are typed loosely to avoid pulling plugin types
  // into the critical bundle; callers use them through gsap.
  ScrollTrigger: unknown;
  SplitText: unknown;
};

let bundlePromise: Promise<GsapBundle> | null = null;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function loadGsap(): Promise<GsapBundle> {
  if (bundlePromise) return bundlePromise;

  bundlePromise = (async () => {
    const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText"),
    ]);

    gsap.registerPlugin(ScrollTrigger, SplitText);

    return { gsap, ScrollTrigger, SplitText };
  })();

  return bundlePromise;
}
