"use client";

import { useEffect, useRef } from "react";

/**
 * Writes --p (0→1) on `ref`'s element as it travels through the viewport — 0 when its top
 * edge enters the bottom of the screen, 1 when its bottom edge leaves the top. Scroll-linked,
 * never autoplaying, for elements (ticker, spotlight strips) that aren't sticky-pinned.
 */
export function useThroughScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function measure() {
      raf.current = 0;
      if (reduceMotion) {
        el!.style.setProperty("--p", "0.5");
        return;
      }
      const r = el!.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el!.style.setProperty("--p", p.toFixed(4));
    }

    function onScroll() {
      if (!raf.current) raf.current = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return ref;
}
