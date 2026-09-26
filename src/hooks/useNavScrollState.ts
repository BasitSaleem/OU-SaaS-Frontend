"use client";

import { useEffect, useRef, useState } from "react";

interface NavScrollState {
  scrolled: boolean;
  hidden: boolean;
  progress: number;
}

/** Tracks the header's frosted background, hide-on-scroll-down, and read-progress hairline. */
export function useNavScrollState(suspend: boolean): NavScrollState {
  const [state, setState] = useState<NavScrollState>({ scrolled: false, hidden: false, progress: 0 });
  const lastY = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    function measure() {
      raf.current = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      const scrolled = y > 8;

      setState((prev) => {
        const delta = y - lastY.current;
        let hidden = prev.hidden;
        if (suspend) {
          hidden = false;
        } else if (Math.abs(delta) > 6) {
          hidden = delta > 0 && y > window.innerHeight * 1.2;
          lastY.current = y;
        }
        return { scrolled, hidden, progress };
      });
    }

    function onScroll() {
      if (!raf.current) raf.current = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [suspend]);

  return state;
}
