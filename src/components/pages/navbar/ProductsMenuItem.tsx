import Image from "next/image";
import Link from "next/link";
import type { ProductNavItem } from "@/constant/navigationData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-2 transition-transform duration-300 ease-[var(--ease)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" aria-hidden>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const ProductsMenuItem: React.FC<{ product: ProductNavItem }> = ({ product }) => (
  <Link
    href={product.href}
    className="group flex flex-col gap-2.5 rounded-2xl bg-paper p-4 pb-3.5 transition-colors duration-150 hover:bg-paper-2"
  >
    <span className="flex items-center justify-between">
      <Image src={PRODUCT_LOGOS[product.key]} alt={product.name} className="h-[26px] w-auto" />
      <ArrowUpRightIcon />
    </span>
    <span className="text-sm font-semibold tracking-[-0.01em] text-ink">{product.category}</span>
    <span className="flex flex-nowrap gap-[5px] overflow-hidden" title={product.tags.join(", ")}>
      <span className="inline-flex h-[22px] shrink-0 items-center rounded-full border border-line bg-white px-[9px] text-[11.5px] font-medium tracking-[-0.005em] whitespace-nowrap text-[#3d3d3d]">
        {product.tags[0]}
      </span>
      {product.tags.length > 1 && (
        <span className="inline-flex h-[22px] shrink-0 items-center rounded-full border border-dashed border-line px-[7px] text-[11.5px] font-medium whitespace-nowrap text-neutral">
          +{product.tags.length - 1}
        </span>
      )}
    </span>
  </Link>
);

export default ProductsMenuItem;
