"use client";

import { useEffect } from "react";

const STACKED_QUERY = "(max-width: 1023px)";
/** A card finishes revealing once its top edge has travelled this far up from the bottom of the screen (fraction of the screen height). */
const REVEAL_SPAN = 0.55;

/** Distance from the top of the document, from layout alone, so it ignores the card's own reveal transform. */
function documentTop(el: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

/**
 * Below 1024px the hero stage is a stacked column, so the desktop's single pinned scroll progress doesn't apply.
 * Instead each stage card ([data-stage-node]) gets its own --b/--c (0 → 1) as it scrolls into view, which drives the
 * same chart draw-in, the Synced pill and the rise/fade-in. On desktop the inline values are removed again.
 */
const HeroStageScrollReveal: React.FC = () => {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-stage-node]"));
    const stacked = window.matchMedia(STACKED_QUERY);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const clear = () =>
      nodes.forEach((n) => {
        n.style.removeProperty("--b");
        n.style.removeProperty("--c");
      });

    const measure = () => {
      raf = 0;
      if (!stacked.matches) return clear();
      const vh = window.innerHeight;
      for (const node of nodes) {
        const top = documentTop(node) - window.scrollY;
        const p = reduceMotion.matches ? 1 : Math.min(1, Math.max(0, (vh - top) / (vh * REVEAL_SPAN)));
        node.style.setProperty("--b", p.toFixed(4));
        node.style.setProperty("--c", p.toFixed(4));
      }
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    stacked.addEventListener("change", request);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      stacked.removeEventListener("change", request);
      if (raf) cancelAnimationFrame(raf);
      clear();
    };
  }, []);

  return null;
};

export default HeroStageScrollReveal;
