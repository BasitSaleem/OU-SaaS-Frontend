"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import ContactInfoIcon from "./ContactInfoIcon";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  CONTACT_INVEST_DESC,
  CONTACT_INVEST_EMAIL,
  CONTACT_INVEST_EMAIL_HREF,
  CONTACT_INVEST_SUGGEST,
  CONTACT_INVEST_TITLE,
} from "@/constant/contactInvestData";

const ContactInvestors: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef);

  return (
    <section className="py-[60px]">
      <Container>
        <div
          ref={cardRef}
          style={reveal.style}
          className={`${reveal.className} w-full rounded-[24px] border border-[rgba(121,92,245,0.08)] bg-[linear-gradient(150deg,rgba(121,92,245,0.04),rgba(249,92,91,0.03))] p-[clamp(36px,4vw,56px)] text-center`}
        >
          <MainHeading
            as="h2"
            className="mb-3 !text-[32px] md:!text-[36px] lg:!text-[48px] !font-bold !tracking-[-0.02em]"
          >
            {CONTACT_INVEST_TITLE}
          </MainHeading>
          <Paragraph className="mx-auto mb-[22px] max-w-[480px] !text-[15px] lg:!text-[15px] !leading-[1.6] !text-g500">
            {CONTACT_INVEST_DESC}
          </Paragraph>
          <a
            href={CONTACT_INVEST_EMAIL_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-g200 bg-white px-6 py-3 font-heading text-[14px] font-normal text-purple transition-[border-color,color] duration-200 hover:border-purple hover:text-purple-d"
          >
            <ContactInfoIcon name="mail" className="h-[15px] w-[15px]" strokeWidth={2} />
            {CONTACT_INVEST_EMAIL}
          </a>
          <CardDesc as="p" className="mt-3.5 !text-[12px] !text-g400">
            {CONTACT_INVEST_SUGGEST}
          </CardDesc>
        </div>
      </Container>
    </section>
  );
};

export default ContactInvestors;
