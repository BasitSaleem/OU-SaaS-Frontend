"use client";

import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ProductCheckIcon, ProductAddonIcon } from "./ProductShowcaseIcons";
import { PulseWatermark, InventoryWatermark } from "./ProductWatermarks";
import type { ProductShowcaseCardData } from "@/constant/productsPageData";

interface ProductShowcaseCardProps {
  card: ProductShowcaseCardData;
  delayMs?: number;
}

const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({
  card,
  delayMs = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef, delayMs);

  return (
    <div
      ref={cardRef}
      style={reveal.style}
      className={clsx(
        reveal.className,
        card.theme.bgGradient,
        "group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/60 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:rounded-[36px] sm:p-9 lg:p-11",
        "transition-[transform,box-shadow] duration-300 ease-[var(--ease)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
      )}
    >
      {/* Background Brand Watermark SVG */}
      {card.id === "pulse" ? (
        <PulseWatermark className="pointer-events-none absolute bottom-0 left-0 select-none" />
      ) : (
        <InventoryWatermark className="pointer-events-none absolute bottom-0 left-0 select-none" />
      )}

      {/* Top Header Area */}
      <div className="relative z-[2]">
        {/* Brand Logo matching contact page */}
        <div className="mb-6 flex items-center">
          <Image
            src={card.logo}
            alt={card.logoAlt}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </div>

        {/* Product Tag */}
        <div className="mb-5 inline-block">
          <span
            className={clsx(
              "inline-block rounded-full px-3.5 py-1 text-[12px] font-medium tracking-tight",
              card.theme.tagBg,
              card.theme.tagText
            )}
          >
            {card.tag}
          </span>
        </div>

        {/* Title & Description */}
        <CardHeading className="mb-3 !text-[26px] lg:!text-[26px] xl:!text-[26px] !font-normal !tracking-[-0.02em] sm:!text-[32px]">
          {card.title}
        </CardHeading>
        <CardDesc className="!text-[14px] !leading-[1.65] sm:!text-[14.5px]">
          {card.description}
        </CardDesc>

        {/* Included Features List */}
        <div className="mt-8">
          <CardDesc as="h4" className="mb-3.5 !text-[12px] font-medium tracking-wide !text-g500 uppercase">
            Included
          </CardDesc>
          <ul className="space-y-2.5">
            {card.included.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <ProductCheckIcon
                  color={card.theme.accentColor}
                  className="h-3.5 w-4 shrink-0"
                />
                <span className="text-[13.5px] font-normal text-charcoal sm:text-[14px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add-ons List */}
        <div className="mt-7">
          <CardDesc as="h4" className="mb-3.5 !text-[12px] font-medium tracking-wide !text-g500 uppercase">
            Add-ons
          </CardDesc>
          <ul className="space-y-2.5">
            {card.addons.map((addon) => (
              <li key={addon} className="flex items-center gap-2.5">
                <div
                  className={clsx(
                    "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full",
                    card.theme.plusCircleBg
                  )}
                >
                  <ProductAddonIcon
                    color={card.theme.accentColor}
                    className="h-2 w-2"
                  />
                </div>
                <span className="text-[13.5px] font-normal text-charcoal sm:text-[14px]">
                  {addon}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer */}
      <div className="relative z-[2] mt-9">
        <p className="text-[12px] leading-[1.55] text-g500/90 sm:text-[12.5px]">
          {card.footnote}
        </p>

        <a
          href={card.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 px-7 font-heading text-[14px] font-semibold text-charcoal shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,gap] duration-200 ease-[var(--ease)] hover:gap-3 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:w-auto"
        >
          <span>{card.ctaText}</span>
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductShowcaseCard;
