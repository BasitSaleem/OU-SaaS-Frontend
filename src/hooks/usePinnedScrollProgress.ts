"use client";

import { useEffect, useRef } from "react";

/**
 * Writes --p (0→1) on `ref`'s element as the visitor scrolls through a tall, sticky-pinned
 * section — how far the sticky viewport has travelled through the section's total scroll range.
 */
export function usePinnedScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function measure() {
      raf.current = 0;
      if (reduceMotion) {
        el!.style.setProperty("--p", "1");
        return;
      }
      const r = el!.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
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
