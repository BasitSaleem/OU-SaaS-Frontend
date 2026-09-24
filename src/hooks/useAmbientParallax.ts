"use client";

import { useEffect, useRef } from "react";

/** Subtly drifts a decorative element with scroll position. `factor` mirrors the source's `data-p`. */
export function useAmbientParallax<T extends HTMLElement>(factor: number) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * factor * 0.06}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [factor]);

  return ref;
}
