import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { ProductNavItem } from "@/constant/navigationData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";

interface MobileMenuProductItemProps {
  product: ProductNavItem;
  onClick: () => void;
  className?: string;
}

const MobileMenuProductItem: React.FC<MobileMenuProductItemProps> = ({ product, onClick, className }) => (
  <Link
    href={product.href}
    onClick={onClick}
    className={clsx("flex items-center justify-between gap-3 rounded-2xl bg-paper p-3.5 text-[13px] text-neutral", className)}
  >
    <Image src={PRODUCT_LOGOS[product.key]} alt={product.name} className="h-6 w-auto" />
    <span className="text-right">{product.category}</span>
  </Link>
);

export default MobileMenuProductItem;
