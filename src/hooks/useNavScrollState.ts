"use client";

import { useEffect, useState } from "react";

interface NavScrollState {
  scrolled: boolean;
  hidden: boolean;
}

/** Tracks the header's compact glass state. The header remains sticky and visible at all times. */
export function useNavScrollState(_suspend?: boolean): NavScrollState {
  void _suspend;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, hidden: false };
}
