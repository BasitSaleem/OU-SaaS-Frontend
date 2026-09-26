"use client";

import { useEffect, useRef } from "react";

/** Tracks the pointer over `containerRef` and writes --fx/--fy (relative to `targetRef`) for a CSS spotlight. */
export function useSpotlightPointer(
  containerRef: React.RefObject<HTMLElement | null>,
  targetRef: React.RefObject<HTMLElement | null>
) {
  const raf = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    function onPointerMove(e: PointerEvent) {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const b = target!.getBoundingClientRect();
        target!.style.setProperty("--fx", `${e.clientX - b.left}px`);
        target!.style.setProperty("--fy", `${e.clientY - b.top}px`);
      });
    }

    container.addEventListener("pointermove", onPointerMove);
    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [containerRef, targetRef]);
}
