import Link from "next/link";
import clsx from "clsx";
import ProductsMenuItem from "./ProductsMenuItem";
import { PRODUCT_NAV_ITEMS } from "@/constant/navigationData";

const ProductsMenu: React.FC<{ open: boolean; id: string }> = ({ open, id }) => (
  <div
    id={id}
    data-open={open}
    className={clsx(
      "absolute top-[calc(100%+14px)] left-1/2 w-[540px] origin-[50%_0] -translate-x-1/2 scale-[0.97] -translate-y-2 opacity-0 transition-[opacity,transform,visibility] duration-200 ease-[var(--ease)] invisible",
      open && "visible translate-y-0 scale-100 opacity-100 duration-[420ms]"
    )}
  >
    <div className="grid grid-cols-2 gap-1.5 rounded-[22px] border border-black/[0.07] bg-white p-1.5 shadow-[0_1px_2px_rgba(11,11,11,0.04),0_30px_60px_-24px_rgba(11,11,11,0.3)]">
      <ProductsMenuItem product={PRODUCT_NAV_ITEMS[0]} />
      <ProductsMenuItem product={PRODUCT_NAV_ITEMS[1]} />

      <Link
        href="/products"
        className="col-span-2 flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 pb-2.5 text-[13px] text-neutral transition-colors duration-150 hover:bg-paper"
      >
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
          One account. All products.
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-ink">
          Explore Products
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  </div>
);

export default ProductsMenu;
