"use client";

import clsx from "clsx";
import { useRevealOnce } from "@/hooks/useRevealOnce";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** "rise" lifts the block itself; "stagger" lifts each direct child, 90ms apart. */
  mode?: "rise" | "stagger";
}

// Class strings are written out in full so Tailwind can detect them.
const RISE = {
  base: "transition-[opacity,translate] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0! motion-reduce:opacity-100!",
  out: "translate-y-12 opacity-0",
  in: "translate-y-0 opacity-100",
};

const STAGGER = {
  base: "[&>*]:transition-[opacity,translate] [&>*]:duration-[900ms] [&>*]:ease-[cubic-bezier(0.16,1,0.3,1)] [&>*:nth-child(2)]:delay-[90ms] [&>*:nth-child(3)]:delay-[180ms] [&>*:nth-child(4)]:delay-[270ms] motion-reduce:[&>*]:translate-y-0! motion-reduce:[&>*]:opacity-100!",
  out: "[&>*]:translate-y-10 [&>*]:opacity-0",
  in: "[&>*]:translate-y-0 [&>*]:opacity-100",
};

/** Fades and lifts its content the first time it scrolls into view; shown immediately for reduced motion. */
const Reveal: React.FC<RevealProps> = ({ children, className, mode = "rise" }) => {
  const { ref, isIn } = useRevealOnce<HTMLDivElement>();
  const set = mode === "rise" ? RISE : STAGGER;

  return (
    <div ref={ref} className={clsx(set.base, isIn ? set.in : set.out, className)}>
      {children}
    </div>
  );
};

export default Reveal;
