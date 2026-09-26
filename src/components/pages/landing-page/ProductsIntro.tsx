"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PRODUCTS_INTRO } from "@/constant/productsStoryData";
import { CONTAINER } from "@/styles/sectionClasses";

const ProductsIntro: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const reveal = useScrollReveal(ref);

  return (
    <header
      ref={ref}
      className={`${CONTAINER} flex flex-col gap-7 ${reveal.className}`}
      style={reveal.style}
    >
      <h2
        id="products-title"
        className="flex flex-col text-[clamp(48px,8.4vw,124px)] leading-[0.94] font-semibold tracking-[-0.055em]"
      >
        {PRODUCTS_INTRO.title}
      </h2>
      <p className="max-w-[34em] text-[clamp(17px,1.35vw,20px)] leading-[1.6] text-neutral" style={{ textWrap: "pretty" }}>
        {PRODUCTS_INTRO.lead}
      </p>
    </header>
  );
};

export default ProductsIntro;
