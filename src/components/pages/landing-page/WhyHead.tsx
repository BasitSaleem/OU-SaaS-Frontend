"use client";

import { useRef } from "react";
import ButtonInkPill from "@/components/button/ButtonInkPill";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CONTAINER } from "@/styles/sectionClasses";
import { WHY_LEAD } from "@/constant/whyData";

const WhyHead: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={`${CONTAINER} mb-[clamp(56px,7vw,88px)] grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-end gap-x-[clamp(40px,6vw,96px)] gap-y-7 max-[900px]:grid-cols-1 max-[900px]:items-start ${reveal.className}`}
      style={reveal.style}
    >
      <h2
        id="why-title"
        className="text-[clamp(36px,4.8vw,64px)] leading-[1.02] font-semibold tracking-[-0.045em]"
        style={{ textWrap: "balance" }}
      >
        One Account. All Products.
      </h2>
      <div className="flex flex-col items-start gap-7 pb-1.5">
        <p className="max-w-[34em] text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-[#a3a3a0]" style={{ textWrap: "pretty" }}>
          {WHY_LEAD}
        </p>
        <ButtonInkPill href="https://app.ownersuniverse.com/register" target="_blank" variant="light" size="lg" icon="arrow-up-right">
          Create Your Account
        </ButtonInkPill>
      </div>
    </div>
  );
};

export default WhyHead;
