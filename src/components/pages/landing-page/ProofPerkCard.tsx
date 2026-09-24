"use client";

import { useRef } from "react";
import GlyphIcon from "@/components/icons/GlyphIcon";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useTilt } from "@/hooks/useTilt";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { mergeRefs } from "@/utils/mergeRefs";
import type { ProofPerk } from "@/constant/proofData";

const ProofPerkCard: React.FC<{ perk: ProofPerk; delayMs?: number }> = ({ perk, delayMs }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useTilt<HTMLDivElement>();
  const reveal = useScrollReveal(cardRef, delayMs);

  return (
    <div
      ref={mergeRefs(cardRef, tiltRef)}
      style={{ ...reveal.style, transformStyle: "preserve-3d" }}
      className={`${reveal.className} bg-white/[0.02] p-9 py-9 text-left transition-[background] will-change-transform [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/[0.05]`}
    >
      <div className="mb-[18px] inline-flex items-center justify-center rounded-[11px] bg-[#795CF524] p-2">
        <GlyphIcon name={perk.icon} className="h-6 w-6 text-[#795CF5]" />
      </div>
      <CardHeading className="mb-2 text-white">{perk.title}</CardHeading>
      <CardDesc className="text-g400">{perk.description}</CardDesc>
    </div>
  );
};

export default ProofPerkCard;
