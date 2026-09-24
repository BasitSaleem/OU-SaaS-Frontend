"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ABOUT_CTA_BUTTON_HREF,
  ABOUT_CTA_BUTTON_TEXT,
  ABOUT_CTA_SUB,
  ABOUT_CTA_TITLE,
} from "@/constant/aboutData";

const AboutCta: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(sectionRef);

  return (
    <section className="border-t border-g200 py-[60px] text-center">
      <Container>
        <div ref={sectionRef} style={reveal.style} className={reveal.className}>
          <MainHeading as="h2" className="mb-2.5 !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.02em]">
            {ABOUT_CTA_TITLE}
          </MainHeading>
          <Paragraph className="mb-6 !text-[15px] lg:!text-[15px] !text-g500">
            {ABOUT_CTA_SUB}
          </Paragraph>
          <ButtonPrimary
            text={ABOUT_CTA_BUTTON_TEXT}
            href={ABOUT_CTA_BUTTON_HREF}
            magnetic
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutCta;
