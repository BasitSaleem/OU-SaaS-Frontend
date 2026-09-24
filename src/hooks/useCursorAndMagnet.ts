"use client";

import { useEffect } from "react";

/**
 * Delegated global listener (instead of binding to each `.magnet` / `[data-cursor-hover]`
 * element individually) so it keeps working as sections mount client-side across navigation.
 */
export function useCursorAndMagnet(cursorId?: string) {
  useEffect(() => {
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const cursor = cursorId ? document.getElementById(cursorId) : null;
    let shown = false;
    let hoveredBig: Element | null = null;
    let hoveredMagnet: HTMLElement | null = null;

    const resetMagnet = (el: HTMLElement | null) => {
      if (el) el.style.transform = "translate(0,0)";
    };

    const onMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
        if (!shown) {
          cursor.classList.add("show");
          shown = true;
        }
      }

      const target = e.target as HTMLElement;

      const bigTarget = target.closest("[data-cursor-hover]");
      if (bigTarget !== hoveredBig) {
        cursor?.classList.toggle("big", !!bigTarget);
        hoveredBig = bigTarget;
      }

      const magnetTarget = target.closest<HTMLElement>(".magnet");
      if (magnetTarget !== hoveredMagnet) {
        resetMagnet(hoveredMagnet);
        hoveredMagnet = magnetTarget;
      }
      if (magnetTarget) {
        const r = magnetTarget.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) * 0.35;
        const my = (e.clientY - r.top - r.height / 2) * 0.45;
        magnetTarget.style.transform = `translate(${mx}px,${my}px)`;
      }
    };

    const onWindowLeave = () => cursor?.classList.remove("show");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onWindowLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onWindowLeave);
      resetMagnet(hoveredMagnet);
    };
  }, [cursorId]);
}
