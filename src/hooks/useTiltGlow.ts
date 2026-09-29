"use client";

import { useEffect, useRef } from "react";

/** Writes --dx/--dy (pointer position) and --rx/--ry (subtle 3D tilt, in degrees) on a card as the pointer moves over it. */
export function useTiltGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    function onMove(e: PointerEvent) {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const b = el!.getBoundingClientRect();
        const x = e.clientX - b.left;
        const y = e.clientY - b.top;
        el!.style.setProperty("--dx", `${x}px`);
        el!.style.setProperty("--dy", `${y}px`);
        el!.style.setProperty("--ry", `${(x / b.width - 0.5) * 5}deg`);
        el!.style.setProperty("--rx", `${(0.5 - y / b.height) * 5}deg`);
      });
    }

    function onLeave() {
      el!.style.setProperty("--ry", "0deg");
      el!.style.setProperty("--rx", "0deg");
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
