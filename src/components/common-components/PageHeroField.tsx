"use client";

import { useHeroCanvasField } from "@/hooks/useHeroCanvasField";

interface PageHeroFieldProps {
  id?: string;
  labelledBy: string;
  children: React.ReactNode;
}

/** Page-hero section with the dotted-grid canvas behind its content; the section itself is the pointer surface. */
const PageHeroField: React.FC<PageHeroFieldProps> = ({ id, labelledBy, children }) => {
  const { canvasRef, hostRef } = useHeroCanvasField<HTMLElement>({ extras: false });

  return (
    <section
      ref={hostRef}
      id={id}
      aria-labelledby={labelledBy}
      className="relative overflow-hidden bg-paper pt-[clamp(128px,18vh,180px)] pb-[clamp(80px,10vw,128px)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,#000_20%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,#000_20%,transparent_75%)]"
      >
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />
      </div>
      {children}
    </section>
  );
};

export default PageHeroField;
