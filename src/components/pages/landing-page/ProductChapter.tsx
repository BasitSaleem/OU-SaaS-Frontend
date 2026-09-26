"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";
import ButtonInkPill from "@/components/button/ButtonInkPill";
import DashboardWindow from "./DashboardWindow";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ProductChapterData } from "@/constant/productsStoryData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";

interface ProductChapterProps {
  data: ProductChapterData;
  children: React.ReactNode;
}

const ProductChapter = forwardRef<HTMLElement, ProductChapterProps>(({ data, children }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(innerRef);

  return (
    <article ref={ref} data-index={data.index} aria-labelledby={`${data.productKey}-name`} className="flex min-h-screen items-center py-[12vh] max-[900px]:min-h-0 max-[900px]:py-6 max-[900px]:pt-[72px]">
      <div ref={innerRef} className={`flex flex-col items-start gap-7 ${reveal.className}`} style={reveal.style}>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.08em] text-neutral uppercase">
          <span className="text-ink">{data.num}</span>
          <span className="h-px w-6 bg-line" aria-hidden />
          <span>{data.category}</span>
        </p>
        <h3 id={`${data.productKey}-name`}>
          <Image src={PRODUCT_LOGOS[data.productKey]} alt={data.logoAlt} className="h-11 w-auto" />
        </h3>
        <p className="text-[clamp(19px,1.7vw,24px)] leading-[1.5] tracking-[-0.015em] text-[#2e2e2e]" style={{ textWrap: "pretty" }}>
          {data.body}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label={`${data.logoAlt} highlights`}>
          {data.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-white px-3 py-1.75 font-mono text-[11.5px] tracking-[0.06em] text-[#3d3d3d] transition-[border-color,transform] duration-[180ms] ease-[var(--ease-out)] hover:-translate-y-px hover:border-[#c9c9c4]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-1 flex flex-wrap items-center gap-5 max-[520px]:gap-3.5">
          <ButtonInkPill href={data.ctaUrl} target="_blank" variant="primary" size="base" icon="arrow-up-right">
            {data.ctaLabel}
          </ButtonInkPill>
          {data.price && (
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.06em] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />
              {data.price}
            </span>
          )}
        </div>

        <div aria-hidden className="hidden w-full max-[900px]:mt-3 max-[900px]:block">
          <DashboardWindow>{children}</DashboardWindow>
        </div>
      </div>
    </article>
  );
});

ProductChapter.displayName = "ProductChapter";

export default ProductChapter;
