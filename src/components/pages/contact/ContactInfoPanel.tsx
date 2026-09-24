"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactInfoItem from "./ContactInfoItem";
import { CONTACT_INFO_ITEMS } from "@/constant/contactData";

const ContactInfoPanel: React.FC = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(panelRef, 160);

  return (
    <div
      ref={panelRef}
      style={reveal.style}
      className={`${reveal.className} h-full rounded-3xl border border-g200 bg-white p-[clamp(28px,3vw,40px)]`}
    >
      {CONTACT_INFO_ITEMS.map((item, i) => (
        <ContactInfoItem
          key={item.label}
          item={item}
          isFirst={i === 0}
          isLast={i === CONTACT_INFO_ITEMS.length - 1}
        />
      ))}
    </div>
  );
};

export default ContactInfoPanel;
