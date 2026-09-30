"use client";

import { useEffect, useRef } from "react";

/** Drives the "Software" hoverword: initial sweep on load, 10s recurring sweep for mobile/tablet, and pointer spotlight on desktop hover. */
export function useHoverWordSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const triggerSweep = () => {
      el.classList.remove("is-sweep");
      // Force reflow to restart animation cleanly
      void el.offsetWidth;
      el.classList.add("is-sweep");
    };

    // Check if device is mobile or tablet
    const isTouchOrMobile = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 900px)").matches;

    // Trigger initial sweep animation
    const sweepTimer = setTimeout(() => {
      triggerSweep();
    }, 400);

    if (isTouchOrMobile) {
      // Re-trigger sweep every 10 seconds on touch/mobile/tablet screens
      intervalId = setInterval(() => {
        triggerSweep();
      }, 10000);
    }

    const onAnimEnd = () => {
      el.classList.remove("is-sweep");
    };

    el.addEventListener("animationend", onAnimEnd);

    const pos = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;

    function tick() {
      pos.x += (pos.tx - pos.x) * 0.22;
      pos.y += (pos.ty - pos.y) * 0.22;
      el!.style.setProperty("--mx", `${pos.x.toFixed(1)}px`);
      el!.style.setProperty("--my", `${pos.y.toFixed(1)}px`);
      raf = Math.abs(pos.tx - pos.x) + Math.abs(pos.ty - pos.y) > 0.3 ? requestAnimationFrame(tick) : 0;
    }

    function getLocal(e: PointerEvent): [number, number] {
      const b = el!.getBoundingClientRect();
      return [e.clientX - b.left, e.clientY - b.top];
    }

    function onEnter(e: PointerEvent) {
      el!.classList.remove("is-sweep");
      const [x, y] = getLocal(e);
      pos.x = x;
      pos.y = y;
      pos.tx = x;
      pos.ty = y;
      tick();
      el!.style.transitionDuration = "450ms";
      el!.style.setProperty("--spot", "clamp(90px, 11vw, 170px)");
    }

    function onMove(e: PointerEvent) {
      el!.classList.remove("is-sweep");
      const [x, y] = getLocal(e);
      pos.tx = x;
      pos.ty = y;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function onLeave() {
      el!.style.transitionDuration = "";
      el!.style.setProperty("--spot", "0px");
    }

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      clearTimeout(sweepTimer);
      if (intervalId) clearInterval(intervalId);
      el.removeEventListener("animationend", onAnimEnd);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
