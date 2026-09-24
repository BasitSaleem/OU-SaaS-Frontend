"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import WhyTwoIcon from "./WhyTwoIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import whyTwoBanner from "../../../../public/assets/products/why-two-product-banner.webp";
import {
  WHY_TWO_CTA_HREF,
  WHY_TWO_CTA_TEXT,
  WHY_TWO_EYEBROW,
  WHY_TWO_FEATURES,
  WHY_TWO_PARAGRAPH_1,
  WHY_TWO_PARAGRAPH_2,
  WHY_TWO_TITLE_GRADIENT,
  WHY_TWO_TITLE_PREFIX,
  WHY_TWO_TITLE_SUFFIX,
} from "@/constant/productsWhyTwoData";

const WhyTwoProducts: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const text = useScrollReveal(textRef);

  return (
    <section className="bg-[#FCFBFD] py-[60px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div ref={textRef} style={text.style} className={text.className}>
            <Eyebrow text={WHY_TWO_EYEBROW} className="mb-5" />

            <MainHeading as="h2" className="mb-5 !text-[32px] !font-normal !leading-[1.15] !tracking-[-0.02em] sm:!text-[36px] md:!text-[36px] lg:!text-[48px]">
              {WHY_TWO_TITLE_PREFIX}
              <span className="bg-[linear-gradient(90deg,#795CF5_0%,#F95C5B_100%)] bg-clip-text text-transparent">
                {WHY_TWO_TITLE_GRADIENT}
              </span>
              {WHY_TWO_TITLE_SUFFIX}
            </MainHeading>

            <Paragraph className="mb-4 text-[15px] lg:text-[15px] leading-[1.7] text-g600">{WHY_TWO_PARAGRAPH_1}</Paragraph>
            <Paragraph className="mb-7 text-[15px] lg:text-[15px] leading-[1.7] text-g600">{WHY_TWO_PARAGRAPH_2}</Paragraph>

            <ul className="mb-8 flex flex-col gap-3.5">
              {WHY_TWO_FEATURES.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-10 text-purple">
                    <WhyTwoIcon name={feature.icon} className="h-[15px] w-[15px]" />
                  </span>
                  <span className="text-[14.5px] text-g700">{feature.text}</span>
                </li>
              ))}
            </ul>

            <ButtonPrimary text={WHY_TWO_CTA_TEXT} href={WHY_TWO_CTA_HREF} magnetic />
          </div>

          <Image
            src={whyTwoBanner}
            alt="Owners Pulse and Owners Inventory share one Owners Universe platform"
            className="mx-auto h-auto w-full max-w-[520px]"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default WhyTwoProducts;
