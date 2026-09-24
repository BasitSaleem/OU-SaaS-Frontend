"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import ContactInfoIcon from "./ContactInfoIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BUSINESS_INFO_ITEMS, type BusinessInfoItem } from "@/constant/contactStripData";

const BusinessInfoItemCard: React.FC<{
  item: BusinessInfoItem;
  delayMs: number;
}> = ({ item, delayMs }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(itemRef, delayMs);

  return (
    <div
      ref={itemRef}
      style={reveal.style}
      className={`${reveal.className} text-center`}
    >
      <div className="mx-auto mb-4 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-g100 text-charcoal">
        <ContactInfoIcon name={item.icon} className="h-[18px] w-[18px]" strokeWidth={1.5} />
      </div>
      <h4 className="mb-2 font-heading text-[13px] font-medium tracking-[0.04em] uppercase text-charcoal">
        {item.title}
      </h4>
      {item.lines.map((line) => (
        <p key={line} className="mb-[2px] text-[13.5px] leading-[1.55] text-g500">
          {line}
        </p>
      ))}
      {item.link && (
        <p className="mb-[2px] text-[13.5px] leading-[1.55]">
          <a
            href={item.link.href}
            className="font-normal text-purple transition-colors duration-200 hover:text-purple-d"
          >
            {item.link.text}
          </a>
        </p>
      )}
    </div>
  );
};

const BusinessInfoStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionReveal = useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={sectionReveal.style}
      className={`${sectionReveal.className} border-y border-g200 py-[60px]`}
    >
      <Container>
        <div className="grid grid-cols-3 gap-[clamp(20px,3vw,40px)] max-sm:grid-cols-1 max-sm:gap-8">
          {BUSINESS_INFO_ITEMS.map((item, i) => (
            <BusinessInfoItemCard
              key={item.title}
              item={item}
              delayMs={(i + 1) * 80}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BusinessInfoStrip;
