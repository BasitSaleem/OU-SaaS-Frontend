"use client";

import { useRef } from "react";
import clsx from "clsx";
import WhyIcon from "./WhyIcons";
import { useSpotlightPointer } from "@/hooks/useSpotlightPointer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CONTAINER } from "@/styles/sectionClasses";
import { WHY_STRIP_ITEMS } from "@/constant/whyData";

const WhyFeatureStrip: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(revealRef);
  const stripRef = useRef<HTMLUListElement>(null);
  useSpotlightPointer(stripRef, stripRef);

  return (
    <div ref={revealRef} className={`mt-6 ${CONTAINER} ${reveal.className}`} style={reveal.style}>
      <ul
        ref={stripRef}
        id="why-strip"
        className="group relative mt-[clamp(20px,2vw,28px)] grid grid-cols-3 overflow-hidden rounded-[var(--r-xl)] border border-[#1d1d1d] bg-[#0e0e0e] before:absolute before:inset-0 before:bg-[radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.07),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-[420ms] before:content-[''] before:pointer-events-none hover:before:opacity-100 max-[900px]:grid-cols-1"
        style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
      >
        {WHY_STRIP_ITEMS.map((item, i) => (
          <li
            key={item.title}
            className={clsx(
              "group/item relative flex flex-col gap-2.5 p-[clamp(28px,3vw,40px)]",
              i > 0 && "border-l border-[#1d1d1d] max-[900px]:border-t max-[900px]:border-l-0"
            )}
          >
            <span className="mb-3.5 grid h-10 w-10 place-items-center rounded-full border border-[#2a2a2a] text-paper transition-[border-color,transform] duration-[420ms] ease-[var(--ease-out)] group-hover/item:-translate-y-0.5 group-hover/item:border-[#555]">
              <WhyIcon name={item.icon} className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="max-w-[26em] text-[15px] text-[#a3a3a0]">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyFeatureStrip;
