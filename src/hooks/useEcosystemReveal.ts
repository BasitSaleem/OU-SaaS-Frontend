"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven storytelling reveal: content fades in, then each of the 3 cards
 * rises one at a time as the section transits the viewport. Polls the section's
 * own bounding rect via rAF (a plain scroll listener can silently miss firing in
 * some embedding contexts) and never un-reveals once a stage has fired.
 */
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useEcosystemReveal<T extends HTMLElement>() {
  const sectionRef = useRef<T>(null);
  const [inView, setInView] = useState(prefersReducedMotion);
  const [risen, setRisen] = useState(() => (prefersReducedMotion() ? [true, true, true] : [false, false, false]));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const risenState = [false, false, false];
    let frame: number;

    const tick = () => {
      const r = section.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const end = -(r.height * 0.15);
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));

      if (p > 0.06) setInView(true);

      risenState[0] = risenState[0] || p > 0.34;
      risenState[1] = risenState[1] || p > 0.56;
      risenState[2] = risenState[2] || p > 0.78;
      setRisen([...risenState]);

      if (p >= 1 || risenState.every(Boolean)) return;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return { sectionRef, inView, risen };
}
