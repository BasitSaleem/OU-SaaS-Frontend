"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { OWNERS_LEAD, OWNERS_TITLE } from "@/constant/ownersData";

const OwnersCopy: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(ref);

  return (
    <div ref={ref} className={`flex flex-col gap-7 ${reveal.className}`} style={reveal.style}>
      <h2 id="owners-title" className="text-[clamp(36px,4.8vw,64px)] leading-[1.02] font-semibold tracking-[-0.045em]" style={{ textWrap: "balance" }}>
        {OWNERS_TITLE}
      </h2>
      <p className="max-w-[34em] text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-neutral" style={{ textWrap: "pretty" }}>
        {OWNERS_LEAD}
      </p>
    </div>
  );
};

export default OwnersCopy;
