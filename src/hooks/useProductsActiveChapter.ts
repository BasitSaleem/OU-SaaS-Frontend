"use client";

import { useEffect, useState, type RefObject } from "react";

/** Tracks which product chapter is centered in the viewport, to drive the sticky visual's rail/screen swap. */
export function useProductsActiveChapter(chapterRefs: RefObject<HTMLElement | null>[]) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elements = chapterRefs.map((r) => r.current).filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
