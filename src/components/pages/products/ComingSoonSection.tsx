"use client";

import { useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import comingSoonBanner from "../../../../public/assets/products/coming-soon-banner.webp";
import {
  COMING_SOON_CTA_HREF,
  COMING_SOON_CTA_TEXT,
  COMING_SOON_DESC,
  COMING_SOON_EMAIL,
  COMING_SOON_EMAIL_HREF,
  COMING_SOON_EYEBROW,
  COMING_SOON_TITLE_GRADIENT,
  COMING_SOON_TITLE_PREFIX,
} from "@/constant/productsComingSoonData";

const ComingSoonSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef);

  return (
    <section className="bg-white py-[60px]">
      <Container>
        <div
          ref={cardRef}
          style={reveal.style}
          className={`${reveal.className} overflow-hidden rounded-[28px] border border-[#19181B14] bg-[#F7F6F9]`}
        >
          <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-6 lg:p-14">
            <Image
              src={comingSoonBanner}
              alt="Owners Universe — one platform, built for owners"
              className="mx-auto h-auto w-full max-w-[440px]"
              priority={false}
            />

            <div>
              <Eyebrow text={COMING_SOON_EYEBROW} className="mb-5" />

              <MainHeading className="mb-4 !text-[32px] !font-normal !leading-[1.2] !tracking-[-0.02em] sm:!text-[36px] md:!text-[36px] lg:!text-[48px]">
                {COMING_SOON_TITLE_PREFIX}
                <span className="bg-[linear-gradient(90deg,#795CF5_0%,#F95C5B_100%)] bg-clip-text text-transparent">
                  {COMING_SOON_TITLE_GRADIENT}
                </span>
              </MainHeading>

              <Paragraph className="mb-7 max-w-[440px] text-[15px] lg:text-[15px] leading-[1.7] text-g600">{COMING_SOON_DESC}</Paragraph>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonPrimary text={COMING_SOON_CTA_TEXT} href={COMING_SOON_CTA_HREF} magnetic />
                <a
                  href={COMING_SOON_EMAIL_HREF}
                  className="inline-flex items-center gap-2 text-[14px] text-g500 transition-colors duration-200 hover:text-purple"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {COMING_SOON_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComingSoonSection;
