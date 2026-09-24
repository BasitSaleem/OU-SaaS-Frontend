"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ProductShowcaseCard from "./ProductShowcaseCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  PRODUCTS_SECTION_EYEBROW,
  PRODUCTS_SECTION_SUB,
  PRODUCTS_SECTION_TITLE,
  PRODUCTS_SHOWCASE_CARDS,
} from "@/constant/productsPageData";

const ProductsShowcase: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerReveal = useScrollReveal(headerRef);

  return (
    <section id="products" className="relative bg-white py-[60px]">
      <Container>
        {/* Section Header */}
        <div
          ref={headerRef}
          style={headerReveal.style}
          className={`${headerReveal.className} max-w-[800px]`}
        >
          <Eyebrow text={PRODUCTS_SECTION_EYEBROW} className="mb-5" />

          <MainHeading className="!text-[32px] !font-normal !leading-[1.15] !tracking-[-0.025em] sm:!text-[36px] md:!text-[36px] lg:!text-[48px]">
            {PRODUCTS_SECTION_TITLE}
          </MainHeading>

          <Paragraph className="mt-4 max-w-[600px] !text-[15px] lg:!text-[15px] !leading-[1.65] !text-g500 sm:!text-[16px]">
            {PRODUCTS_SECTION_SUB}
          </Paragraph>
        </div>

        {/* 2-Column Product Showcase Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 sm:mt-16">
          {PRODUCTS_SHOWCASE_CARDS.map((card, index) => (
            <ProductShowcaseCard
              key={card.id}
              card={card}
              delayMs={index * 120}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsShowcase;
