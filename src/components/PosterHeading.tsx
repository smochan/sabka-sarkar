"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { loadGsap, prefersReducedMotion } from "@/lib/gsap";

interface PosterHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
  /** when true, animate a char-by-char slam-in on scroll into view */
  animate?: boolean;
}

/**
 * Condensed poster headline (.poster-title / Teko). When `animate` is set and
 * motion is allowed, GSAP SplitText slams the characters in on scroll-in.
 * Content is plain, fully-rendered text by default (SSR / no-JS / reduced
 * motion all show the finished heading) — animation is pure enhancement.
 */
export function PosterHeading({
  children,
  as = "h2",
  id,
  className,
  animate = false,
}: PosterHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const Tag = as;

  useEffect(() => {
    if (!animate) return;
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let split: { chars: Element[]; revert: () => void } | null = null;
    let trigger: { kill: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const { gsap, SplitText, ScrollTrigger } = await loadGsap();
      if (cancelled || !ref.current) return;

      const SplitTextCtor = SplitText as new (
        el: Element,
        opts: { type: string }
      ) => { chars: Element[]; revert: () => void };
      const ST = ScrollTrigger as {
        create: (cfg: Record<string, unknown>) => { kill: () => void };
      };

      // Split words AND chars: word wrappers keep words from breaking
      // mid-character across lines; we animate the chars within them.
      split = new SplitTextCtor(ref.current, { type: "words,chars" });
      gsap.set(split.chars, { yPercent: 110, opacity: 0 });

      trigger = ST.create({
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(split!.chars, {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.025,
          });
        },
      });
    })();

    return () => {
      cancelled = true;
      trigger?.kill();
      split?.revert();
    };
  }, [animate, children]);

  return (
    <Tag id={id} ref={ref} className={cn("poster-title", className)}>
      {children}
    </Tag>
  );
}
