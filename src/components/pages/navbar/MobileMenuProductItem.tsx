import Image from "next/image";
import type { ProductNavItem } from "@/constant/navigationData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";

const MobileMenuProductItem: React.FC<{ product: ProductNavItem }> = ({ product }) => (
  <a
    href={product.href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between gap-3 rounded-2xl bg-paper p-3.5 text-[13px] text-neutral"
  >
    <Image src={PRODUCT_LOGOS[product.key]} alt={product.name} className="h-6 w-auto" />
    <span className="text-right">{product.category}</span>
  </a>
);

export default MobileMenuProductItem;
