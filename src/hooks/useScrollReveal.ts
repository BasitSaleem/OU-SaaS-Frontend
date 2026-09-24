"use client";

import { useEffect, useState, type RefObject } from "react";
import clsx from "clsx";

/**
 * Fades an element in the first time it enters the viewport; never reverses.
 * Takes the target ref rather than creating/returning one, so the returned value
 * stays plain render data (mixing a ref into a hook's return taints the whole object).
 */
export function useScrollReveal<T extends HTMLElement>(targetRef: RefObject<T | null>, delayMs = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef]);

  return {
    className: clsx(
      "transition-[opacity,transform] duration-[0.6s] ease-[var(--ease)]",
      visible ? "translate-y-0 opacity-100" : "translate-y-[28px] opacity-0"
    ),
    style: delayMs ? { transitionDelay: `${delayMs}ms` } : undefined,
  };
}
