"use client";

import { useRef } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ProductsHeroIcon } from "./ProductsHeroIcons";
import {
  PRODUCTS_HERO_SUB,
  PRODUCTS_HERO_TITLE_GRADIENT,
  PRODUCTS_HERO_TITLE_PREFIX,
  PRODUCTS_TRUST_BADGES,
} from "@/constant/productsPageData";

const ProductsHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(heroRef);

  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-h)+60px)] pb-[60px]">
      <Container>
        <div
          ref={heroRef}
          style={reveal.style}
          className={`${reveal.className} mx-auto max-w-[1000px] text-center`}
        >
          {/* Main Hero Heading matching the reference screenshot */}
          <MainHeading
            as="h1"
            className="!text-[36px] !font-normal !leading-[1.12] !tracking-[-0.03em] md:!text-[48px] lg:!text-[64px]"
          >
            <span className="block">{PRODUCTS_HERO_TITLE_PREFIX}</span>
            <span className="inline-block bg-[linear-gradient(90deg,#795CF5_0%,#F95C5B_100%)] bg-clip-text font-normal text-transparent">
              {PRODUCTS_HERO_TITLE_GRADIENT}
            </span>
          </MainHeading>

          {/* Subtitle */}
          <Paragraph className="mx-auto mt-6 max-w-[640px] !text-[15px] lg:!text-[15px] !leading-[1.65] !text-g500 sm:!text-[16px]">
            {PRODUCTS_HERO_SUB}
          </Paragraph>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:mt-10">
            <ButtonPrimary
              text="Explore the products"
              href="#products"
              magnetic
            />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-g200 bg-white/90 px-7 py-[13px] font-heading text-sm font-medium text-charcoal shadow-sm transition-[background,border-color,transform] duration-150 ease-[var(--ease-h)] hover:border-g300 hover:bg-white active:scale-[0.97]"
            >
              <span>Talk to us</span>
              <ProductsHeroIcon name="chat" className="h-[15px] w-[15px] text-g600" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mt-16">
            {PRODUCTS_TRUST_BADGES.map((badge) => (
              <div
                key={badge.text}
                className="inline-flex items-center gap-2 text-[13px] text-g500"
              >
                <ProductsHeroIcon
                  name={badge.icon}
                  className="h-4 w-4 shrink-0 text-purple"
                />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsHero;
