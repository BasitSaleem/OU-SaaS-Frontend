"use client";

import { useEffect, useRef, useState } from "react";

/** true once `ref`'s element has entered the viewport; never reverses. Plain boolean, for CSS
 * driven by a container-level "is-in" state rather than per-element reveal classes. */
export function useRevealOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isIn };
}
