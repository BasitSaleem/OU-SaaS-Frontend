"use client";

import { useEffect, useRef } from "react";

const PURPLE = [121, 92, 245];
const CORAL = [249, 92, 91];
const PAPER = [247, 247, 245];

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (t: number) => t * t * (3 - 2 * t);
const mix = (a: number[], b: number[], t: number) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

interface Dot {
  x: number;
  y: number;
  band: number;
  sweep: number;
  tint: number;
  fade: number;
  max: number;
}

/** Halftone ring behind the Final CTA: dots print in as the section scrolls through, plus a pointer-driven lens. */
export function useHalftoneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !section || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let dots: Dot[] = [];
    let raf = 0;
    let visible = false;
    const lens = { x: -9999, y: -9999, tx: -9999, ty: -9999, a: 0, ta: 0 };

    function getProgress() {
      if (reduceMotion) return 1;
      const r = section!.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh - r.top) / (vh + r.height);
      return clamp01((p - 0.12) / 0.36);
    }

    function draw() {
      raf = 0;
      const P = getProgress();
      lens.x += (lens.tx - lens.x) * 0.2;
      lens.y += (lens.ty - lens.y) * 0.2;
      lens.a += (lens.ta - lens.a) * 0.15;
      const L = W * 0.16;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, W, H);

      for (const d of dots) {
        let k = 1;
        if (lens.a > 0.01) {
          const ld = Math.hypot(d.x - lens.x, d.y - lens.y);
          if (ld < L) k += lens.a * 0.9 * Math.pow(1 - ld / L, 2);
        }
        if (d.band > 0) {
          const on = smooth(clamp01((P * 1.12 - d.sweep) / 0.12));
          if (on > 0) {
            const size = d.max * (0.18 + 0.82 * Math.pow(d.band, 1.1)) * on * Math.min(k, 1.35);
            const c = mix(PURPLE, CORAL, d.tint);
            ctx!.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.22 + 0.58 * d.band})`;
            ctx!.beginPath();
            ctx!.arc(d.x, d.y, size, 0, Math.PI * 2);
            ctx!.fill();
            continue;
          }
        }
        const base = 0.8 * k;
        const alpha = (0.09 + 0.3 * (k - 1)) * d.fade;
        if (alpha < 0.01) continue;
        ctx!.fillStyle = `rgba(${PAPER[0]},${PAPER[1]},${PAPER[2]},${alpha})`;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, base, 0, Math.PI * 2);
        ctx!.fill();
      }

      const settling = Math.abs(lens.tx - lens.x) + Math.abs(lens.ty - lens.y) > 0.5 || Math.abs(lens.ta - lens.a) > 0.01;
      if (settling && visible && !raf) raf = requestAnimationFrame(draw);
    }

    function schedule() {
      if (!raf) raf = requestAnimationFrame(draw);
    }

    function build() {
      const r = canvas!.getBoundingClientRect();
      W = r.width;
      H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      const gap = W < 520 ? 11 : 14;
      const cx = W / 2;
      const cy = H / 2;
      const R = W * 0.35;
      const T = W * 0.075;
      dots = [];
      for (let y = gap / 2; y < H; y += gap) {
        for (let x = gap / 2; x < W; x += gap) {
          const dx = x - cx;
          const dy = y - cy;
          const d = Math.hypot(dx, dy);
          const band = 1 - Math.abs(d - R) / T;
          const ang = Math.atan2(dy, dx);
          const sweep = dy <= 0 ? (ang + Math.PI) / Math.PI : (Math.PI - ang) / Math.PI;
          const tint = smooth(clamp01((dy / (T * 0.9) + 1) / 2));
          const fade = clamp01(1.25 - d / (W * 0.5));
          dots.push({ x, y, band, sweep: clamp01(sweep), tint, fade, max: gap * 0.34 });
        }
      }
      draw();
    }

    function onScroll() {
      if (visible) schedule();
    }

    function onPointerMove(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      lens.tx = e.clientX - r.left;
      lens.ty = e.clientY - r.top;
      if (lens.ta === 0) {
        lens.x = lens.tx;
        lens.y = lens.ty;
      }
      lens.ta = 1;
      schedule();
    }

    function onPointerLeave() {
      lens.ta = 0;
      schedule();
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    io.observe(canvas);

    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    window.addEventListener("scroll", onScroll, { passive: true });
    const interactive = !reduceMotion && window.matchMedia("(hover: hover)").matches;
    if (interactive) {
      section.addEventListener("pointermove", onPointerMove, { passive: true });
      section.addEventListener("pointerleave", onPointerLeave);
    }
    build();

    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { canvasRef, sectionRef };
}
