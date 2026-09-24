"use client";

import { useRef } from "react";
import clsx from "clsx";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ContactStep } from "@/constant/contactStepsData";

interface ContactStepCardProps {
  step: ContactStep;
  delayMs: number;
}

const ContactStepCard: React.FC<ContactStepCardProps> = ({ step, delayMs }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef, delayMs);

  return (
    <div
      ref={cardRef}
      style={reveal.style}
      className={clsx(
        reveal.className,
        "rounded-[20px] border border-g200 bg-surface p-[clamp(26px,3vw,32px)] transition-[transform,box-shadow,background-color] duration-[0.35s] ease-[var(--ease)]",
        "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_32px_rgba(20,10,40,.06)]"
      )}
    >
      <span className="mb-[18px] inline-block rounded-full bg-purple-10 px-3 py-[5px] font-heading text-[13px] font-bold tracking-[0.02em] text-purple">
        {step.step}
      </span>
      <CardHeading className="mb-2 !text-[1.0625rem] lg:!text-[1.0625rem] xl:!text-[1.0625rem] !font-medium !leading-[1.3] !tracking-[-0.01em]">
        {step.title}
      </CardHeading>
      <CardDesc className="!text-[13.5px] !leading-[1.6]">
        {step.desc}
      </CardDesc>
    </div>
  );
};

export default ContactStepCard;
