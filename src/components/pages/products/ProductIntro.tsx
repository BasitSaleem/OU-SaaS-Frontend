import Image from "next/image";
import Reveal from "@/components/common-components/Reveal";
import ButtonInkPill from "@/components/button/ButtonInkPill";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import type { ProductSectionData } from "@/constant/productsPageData";

// Full class strings per product so Tailwind can detect them.
const CHIP_HOVER = {
  pulse: "hover:border-coral",
  inventory: "hover:border-purple",
} as const;

interface ProductIntroProps {
  product: ProductSectionData;
  flip?: boolean;
}

const ProductIntro: React.FC<ProductIntroProps> = ({ product, flip = false }) => (
  <Reveal className={`flex flex-col items-start gap-5 ${flip ? "order-2 max-[900px]:order-none" : ""}`}>
    <Image src={PRODUCT_LOGOS[product.key]} alt={product.name} className="mb-1 h-11 w-auto" />
    <h2
      id={`${product.id}-title`}
      className="text-[clamp(36px,4.8vw,64px)] leading-[1.02] font-semibold tracking-[-0.045em]"
      style={{ textWrap: "balance" }}
    >
      <span className="sr-only">{product.name}: </span>
      {product.headline}
    </h2>
    {product.leads.map((lead, i) => (
      <p
        key={lead}
        className={`max-w-[34em] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-neutral ${i > 0 ? "-mt-1.5" : ""}`}
        style={{ textWrap: "pretty" }}
      >
        {lead}
      </p>
    ))}
    <div className="mt-1 mb-1.5 flex flex-col gap-2.5">
      <span className="text-sm font-medium text-[#5f5f5a]">Industries served</span>
      <ul className="flex flex-wrap gap-1.5">
        {product.industries.map((industry) => (
          <li
            key={industry}
            className={`inline-flex h-8 items-center rounded-full border border-line bg-white px-[13px] text-[13.5px] font-medium [transition:border-color_180ms,translate_420ms_var(--ease-out)] hover:-translate-y-px ${CHIP_HOVER[product.key]}`}
          >
            {industry}
          </li>
        ))}
      </ul>
    </div>
    <ButtonInkPill href={product.cta.href} target="_blank" size="lg" icon="arrow-up-right">
      {product.cta.label}
    </ButtonInkPill>
  </Reveal>
);

export default ProductIntro;
