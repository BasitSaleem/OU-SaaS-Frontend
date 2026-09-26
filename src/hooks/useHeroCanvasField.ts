"use client";

import { useEffect, useRef } from "react";

const GAP = 72;
const STEP = 12;
const LENS_R = 150;
const LENS_PUSH = 16;
const RIPPLE_SPEED = 0.55;
const RIPPLE_LIFE = 1500;
const RIPPLE_AMP = 6;
const RIPPLE_W = 38;
const EMIT_EVERY = 110;

interface Ripple {
  x: number;
  y: number;
  t: number;
}

/** Renders the dotted-grid particle field behind the hero copy, with a pointer-driven lens + ripples. */
export function useHeroCanvasField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interactive = !reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let ox = 0;
    let oy = 0;
    let raf = 0;
    const m = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4, s: 0, ts: 0, travel: 0, lx: null as number | null, ly: null as number | null };
    const snap = { x: -1e4, y: -1e4 };
    let ripples: Ripple[] = [];

    function displace(x: number, y: number, now: number): [number, number] {
      let dx = 0;
      let dy = 0;
      if (m.s > 0.001) {
        const vx = x - m.x;
        const vy = y - m.y;
        const d2 = vx * vx + vy * vy;
        if (d2 < LENS_R * LENS_R * 4) {
          const d = Math.sqrt(d2) || 1;
          const f = Math.exp(-d2 / (2 * LENS_R * LENS_R)) * LENS_PUSH * m.s;
          dx += (vx / d) * f;
          dy += (vy / d) * f;
        }
      }
      for (const rp of ripples) {
        const age = now - rp.t;
        const front = age * RIPPLE_SPEED;
        const vx = x - rp.x;
        const vy = y - rp.y;
        const d = Math.hypot(vx, vy) || 1;
        const off = d - front;
        if (off > RIPPLE_W * 2.5 || off < -RIPPLE_W * 2.5) continue;
        const life = 1 - age / RIPPLE_LIFE;
        const f = Math.exp(-(off * off) / (RIPPLE_W * RIPPLE_W)) * RIPPLE_AMP * life * life;
        dx += (vx / d) * f;
        dy += (vy / d) * f;
      }
      return [x + dx, y + dy];
    }

    function draw(now: number) {
      raf = 0;
      m.x += (m.tx - m.x) * 0.18;
      m.y += (m.ty - m.y) * 0.18;
      m.s += (m.ts - m.s) * 0.08;
      ripples = ripples.filter((r) => now - r.t < RIPPLE_LIFE);

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, W, H);

      const g = ctx!.createRadialGradient(m.x, m.y, 0, m.x, m.y, 320);
      g.addColorStop(0, `rgba(11,11,11,${0.045 + 0.1 * m.s})`);
      g.addColorStop(1, "rgba(11,11,11,0.045)");
      ctx!.strokeStyle = g;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      for (let x = ox; x <= W; x += GAP) {
        for (let y = 0; y <= H + STEP; y += STEP) {
          const [px, py] = displace(x, y, now);
          if (y === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
      }
      for (let y = oy; y <= H; y += GAP) {
        for (let x = 0; x <= W + STEP; x += STEP) {
          const [px, py] = displace(x, y, now);
          if (x === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
      }
      ctx!.stroke();

      if (m.s > 0.01) {
        for (let x = ox; x <= W; x += GAP) {
          for (let y = oy; y <= H; y += GAP) {
            const d = Math.hypot(x - m.x, y - m.y);
            if (d > 240) continue;
            const [px, py] = displace(x, y, now);
            ctx!.fillStyle = `rgba(11,11,11,${(1 - d / 240) * 0.35 * m.s})`;
            ctx!.beginPath();
            ctx!.arc(px, py, 1.4, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
        const nx = ox + Math.round((m.x - ox) / GAP) * GAP;
        const ny = oy + Math.round((m.y - oy) / GAP) * GAP;
        snap.x += (nx - snap.x) * 0.22;
        snap.y += (ny - snap.y) * 0.22;
        const [sx, sy] = displace(snap.x, snap.y, now);
        ctx!.fillStyle = `rgba(249,92,91,${0.9 * m.s})`;
        ctx!.beginPath();
        ctx!.arc(sx, sy, 2.6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.strokeStyle = `rgba(249,92,91,${0.28 * m.s})`;
        ctx!.beginPath();
        ctx!.arc(sx, sy, 9, 0, Math.PI * 2);
        ctx!.stroke();
      }

      const moving =
        Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) > 0.3 ||
        Math.abs(m.ts - m.s) > 0.005 ||
        Math.abs(snap.x - (ox + Math.round((m.x - ox) / GAP) * GAP)) > 0.3 ||
        ripples.length > 0;
      if (moving) raf = requestAnimationFrame(draw);
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(draw);
    }

    function resize() {
      const r = canvas!.getBoundingClientRect();
      W = r.width;
      H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      ox = ((W / 2) % GAP) - 1;
      oy = -1;
      draw(performance.now());
    }

    function onPointerMove(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (m.ts === 0) {
        m.x = x;
        m.y = y;
        snap.x = x;
        snap.y = y;
      }
      m.tx = x;
      m.ty = y;
      m.ts = 1;
      if (m.lx !== null) m.travel += Math.hypot(x - m.lx, y - m.ly!);
      m.lx = x;
      m.ly = y;
      if (m.travel > EMIT_EVERY) {
        m.travel = 0;
        if (ripples.length < 5) ripples.push({ x, y, t: performance.now() });
      }
      kick();
    }

    function onPointerLeave() {
      m.ts = 0;
      m.lx = null;
      kick();
    }

    if (interactive) {
      host.addEventListener("pointermove", onPointerMove, { passive: true });
      host.addEventListener("pointerleave", onPointerLeave);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    return () => {
      ro.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { canvasRef, hostRef };
}
