"use client";

import FinalTitle from "./FinalTitle";
import FinalCtaButtons from "./FinalCtaButtons";
import { useThroughScrollProgress } from "@/hooks/useThroughScrollProgress";
import { useHalftoneCanvas } from "@/hooks/useHalftoneCanvas";
import { useRevealOnce } from "@/hooks/useRevealOnce";
import { CONTAINER } from "@/styles/sectionClasses";

const FinalCta: React.FC = () => {
  const progressRef = useThroughScrollProgress<HTMLElement>();
  const { canvasRef, sectionRef } = useHalftoneCanvas();
  const { ref: revealRef, isIn } = useRevealOnce<HTMLDivElement>();

  return (
    <section
      ref={(el) => {
        progressRef.current = el;
        sectionRef.current = el;
      }}
      id="final"
      aria-labelledby="final-title"
      className="relative isolate -mt-7 overflow-hidden rounded-t-[var(--r-xl)] bg-ink py-[clamp(120px,16vw,220px)] text-paper [--d:clamp(0,calc((var(--p)-0.12)/0.36),1)] [--f:clamp(0,calc((var(--p)-0.18)/0.3),1)] [--mx:0] [--my:0] [--p:0]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[max(-17vw,-250px)] z-0 h-auto w-[min(880px,62vw)] -translate-y-1/2 [aspect-ratio:1] max-[900px]:top-[-6%] max-[900px]:right-[-30vw] max-[900px]:w-screen max-[900px]:translate-y-0 max-[900px]:opacity-55"
      />
      <div ref={revealRef} className={`relative z-1 flex flex-col gap-[clamp(40px,5vw,64px)] ${CONTAINER}`}>
        <FinalTitle isIn={isIn} />
        <FinalCtaButtons isIn={isIn} />
      </div>
    </section>
  );
};

export default FinalCta;
