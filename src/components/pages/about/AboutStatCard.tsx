"use client";

import { useEffect, useRef, useState } from "react";
import type { AboutStatItem } from "@/constant/aboutData";

interface Props {
  stat: AboutStatItem;
  /** 0-indexed position in the grid — drives border and padding logic. */
  index: number;
}

const AboutStatCard: React.FC<Props> = ({ stat, index }) => {
  // Lazy init: if user prefers reduced motion, show the final value immediately
  // (window is safe here — this component is always client-only).
  const [display, setDisplay] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? stat.count
      : 0
  );
  const cardRef = useRef<HTMLLIElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return; // state already initialised to stat.count

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          observer.unobserve(node);
          const target = stat.count;
          const dur = 1300;
          const t0 = performance.now();
          const step = (t: number) => {
            const k = Math.min(1, (t - t0) / dur);
            setDisplay(Math.round(target * (1 - Math.pow(1 - k, 3))));
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [stat.count]);

  // First stat has right-padding only; every subsequent stat adds a left divider.
  // The 3rd stat (index 2) loses its left divider at ≤900 px (becomes left col in 2-col grid).
  const borderClass =
    index === 0
      ? "pr-[clamp(16px,2.5vw,32px)]"
      : index === 2
        ? "px-[clamp(16px,2.5vw,32px)] border-l border-[#262626] max-[900px]:border-l-0 max-[900px]:pl-0"
        : "px-[clamp(16px,2.5vw,32px)] border-l border-[#262626]";

  return (
    <li ref={cardRef} className={`group flex flex-col gap-2 py-2 ${borderClass}`}>
      <span className="text-[clamp(56px,7vw,104px)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#a894ff] [font-variant-numeric:tabular-nums] transition-colors duration-[420ms] ease-out group-hover:text-[#c2b5ff]">
        {display}
        {stat.suffix ?? ""}
      </span>
      <span className="text-base font-medium text-paper">
        {stat.label}
      </span>
      {stat.note && (
        <span className="text-sm text-[#a3a3a0]">{stat.note}</span>
      )}
    </li>
  );
};

export default AboutStatCard;
