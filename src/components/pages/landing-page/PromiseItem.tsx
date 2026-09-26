"use client";

import { useRef } from "react";
import OwnersIcon from "./OwnersIcons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { PromiseData } from "@/constant/ownersData";

const PromiseItem: React.FC<{ promise: PromiseData; delayMs: number }> = ({ promise, delayMs }) => {
  const ref = useRef<HTMLLIElement>(null);
  const reveal = useScrollReveal(ref, delayMs);

  return (
    <li ref={ref} className={`flex flex-col gap-3 border-t border-ink pt-7 ${reveal.className}`} style={reveal.style}>
      <OwnersIcon name={promise.icon} />
      <p className="max-w-[22em] text-[19px] leading-[1.45] font-medium tracking-[-0.02em] text-ink" style={{ textWrap: "pretty" }}>
        {promise.text}
      </p>
    </li>
  );
};

export default PromiseItem;
