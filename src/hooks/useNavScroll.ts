"use client";

import { useEffect, useState } from "react";

/** Nav stays fixed and visible at all times; gains a frosted background past 30px scroll. */
export function useNavScroll(enabled: boolean): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return scrolled;
}
