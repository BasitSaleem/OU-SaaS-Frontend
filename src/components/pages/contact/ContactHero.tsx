"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CONTACT_HERO_SUB, CONTACT_HERO_TITLE } from "@/constant/contactData";

const ContactHero: React.FC = () => {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const eyebrow = useScrollReveal(eyebrowRef);
  const title = useScrollReveal(titleRef, 80);
  const sub = useScrollReveal(subRef, 160);

  return (
    <section className="pt-[calc(var(--nav-h)+60px)] pb-[60px]">
      <Container>
        <Eyebrow ref={eyebrowRef} style={eyebrow.style} text="Contact" className={`${eyebrow.className} mb-[22px]`} />
        <MainHeading
          as="h1"
          ref={titleRef}
          style={title.style}
          className={`${title.className} mb-5 max-w-[14ch] !text-[36px] md:!text-[48px] lg:!text-[64px] !leading-[0.98] !font-bold !tracking-[-0.035em]`}
        >
          {CONTACT_HERO_TITLE}
        </MainHeading>
        <Paragraph
          ref={subRef}
          style={sub.style}
          className={`${sub.className} max-w-[480px] !text-[length:clamp(15px,1.2vw,17px)] lg:!text-[length:clamp(15px,1.2vw,17px)] !leading-[1.6] !text-g500`}
        >
          {CONTACT_HERO_SUB}
        </Paragraph>
      </Container>
    </section>
  );
};

export default ContactHero;
