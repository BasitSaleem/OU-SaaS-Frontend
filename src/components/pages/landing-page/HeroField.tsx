"use client";

import { useHeroCanvasField } from "@/hooks/useHeroCanvasField";

/** Dotted-grid particle field behind the hero copy; also the pointer-move surface for the whole sticky viewport. */
const HeroField: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { canvasRef, hostRef } = useHeroCanvasField();

  return (
    <div ref={hostRef} className="sticky top-0 h-[100svh] overflow-hidden [perspective:1600px]">
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,#000_20%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,#000_20%,transparent_75%)] [opacity:calc(1_-_var(--a)*0.5)]"
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
      {children}
    </div>
  );
};

export default HeroField;
