"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  CLOSING_CTA_PRIMARY_HREF,
  CLOSING_CTA_PRIMARY_TEXT,
  CLOSING_CTA_SECONDARY_HREF,
  CLOSING_CTA_SECONDARY_TEXT,
  CLOSING_CTA_SUB,
  CLOSING_CTA_TITLE,
} from "@/constant/productsClosingCtaData";

const CTA_BACKGROUND = [
  "radial-gradient(circle at 15% 15%, rgba(121,92,245,.4) 0%, transparent 45%)",
  "radial-gradient(circle at 88% 88%, rgba(249,92,91,.35) 0%, transparent 45%)",
  "#0E0E12",
].join(", ");

const ProductsClosingCta: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef);

  return (
    <section className="bg-white py-[60px]">
      <Container>
        <div
          ref={cardRef}
          style={{ ...reveal.style, background: CTA_BACKGROUND }}
          className={`${reveal.className} overflow-hidden rounded-[28px] px-8 py-14 text-center sm:px-14 sm:py-16`}
        >
          <MainHeading as="h2" className="mb-3 !text-[32px] !font-medium !tracking-[-0.02em] !text-white sm:!text-[36px] md:!text-[36px] lg:!text-[48px]">
            {CLOSING_CTA_TITLE}
          </MainHeading>
          <Paragraph className="mx-auto mb-8 max-w-[560px] !text-[14px] leading-[1.6] !text-white/60 sm:!text-[15px]">
            {CLOSING_CTA_SUB}
          </Paragraph>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CLOSING_CTA_PRIMARY_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-heading text-[14px] font-medium text-charcoal transition-[transform,box-shadow] duration-200 ease-[var(--ease)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,.15)] active:scale-[0.97]"
            >
              {CLOSING_CTA_PRIMARY_TEXT}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href={CLOSING_CTA_SECONDARY_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-heading text-[14px] font-medium text-white transition-[background,transform] duration-200 ease-[var(--ease)] hover:-translate-y-0.5 hover:bg-white/15 active:scale-[0.97]"
            >
              {CLOSING_CTA_SECONDARY_TEXT}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsClosingCta;
