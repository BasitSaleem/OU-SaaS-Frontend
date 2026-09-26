import Image from "next/image";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import type { ProductKey } from "@/constant/navigationData";

const BusProductTile: React.FC<{ productKey: ProductKey; logoHeight: number }> = ({ productKey, logoHeight }) => (
  <div className="relative mb-8 flex h-16 items-center justify-between gap-2.5 rounded-[14px] bg-paper px-4 text-ink [box-shadow:0_1px_0_rgba(255,255,255,0.4)_inset,0_16px_36px_-18px_rgba(0,0,0,0.9)] transition-transform duration-[420ms] ease-[var(--ease-out)] after:absolute after:top-full after:left-1/2 after:h-8 after:w-px after:-translate-x-1/2 after:bg-[var(--rail)] after:content-[''] hover:-translate-y-0.5 max-[640px]:h-12 max-[640px]:justify-center max-[640px]:rounded-[10px] max-[640px]:px-1.5 max-[640px]:after:h-6">
    <Image src={PRODUCT_LOGOS[productKey]} alt="" style={{ height: logoHeight, width: "auto" }} className="max-[640px]:!h-[13px]" />
  </div>
);

export default BusProductTile;
