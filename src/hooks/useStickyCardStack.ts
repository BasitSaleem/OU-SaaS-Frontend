"use client";

import { useEffect, useRef } from "react";

/**
 * Cards use position:sticky to stack on top of each other while scrolling. This only
 * toggles an `is-stacked` class (CSS handles the actual scale/shadow) once the next
 * card's top starts overlapping the current one — pure CSS can't detect that overlap.
 */
export function useStickyCardStack<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    if (!container || reduced) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;

    let frame: number;
    const tick = () => {
      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i].getBoundingClientRect();
        const next = cards[i + 1].getBoundingClientRect();
        cards[i].classList.toggle("is-stacked", current.bottom - next.top > 30);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return containerRef;
}
