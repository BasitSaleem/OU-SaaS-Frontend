"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const BRAND_BASES: [number, number, number][] = [
  [121, 92, 245], // purple
  [249, 92, 91], // coral
  [177, 30, 103], // magenta
  [155, 123, 247], // light purple
  [249, 123, 107], // light coral
];

const randomBrandHex = () => {
  const base = BRAND_BASES[Math.floor(Math.random() * BRAND_BASES.length)];
  const jitter = (channel: number) => Math.round(Math.max(0, Math.min(255, channel + (Math.random() - 0.5) * 60)));
  return `#${base.map(jitter).map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};

const HeroTubesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let app: ReturnType<typeof import("threejs-components/build/cursors/tubes1.min.js").default> | undefined;

    import("threejs-components/build/cursors/tubes1.min.js")
      .then(({ default: TubesCursor }) => {
        if (disposed) return;
        app = TubesCursor(canvas, {
          tubes: {
            colors: ["#795CF5", "#F95C5B", "#B11E67"],
            lights: { intensity: 180, colors: ["#9B7BF7", "#F97B6B", "#D4459E", "#A48DFB"] },
          },
        });
        setLoaded(true);
      })
      .catch((err) => {
        console.warn("Tubes effect unavailable:", err);
      });

    const section = canvas.closest("section");
    const onClick = (e: MouseEvent) => {
      if (!app || (e.target as HTMLElement).closest("a, button")) return;
      app.tubes.setColors([randomBrandHex(), randomBrandHex(), randomBrandHex()]);
      app.tubes.setLightsColors([randomBrandHex(), randomBrandHex(), randomBrandHex(), randomBrandHex()]);
    };
    section?.addEventListener("click", onClick);

    return () => {
      disposed = true;
      section?.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className={clsx("absolute inset-0 z-[1] opacity-0 transition-opacity duration-[1.8s]", loaded && "opacity-[0.16] mix-blend-multiply max-md:opacity-10")}>
      <canvas ref={canvasRef} className="block h-full w-full touch-none" />
    </div>
  );
};

export default HeroTubesCanvas;
