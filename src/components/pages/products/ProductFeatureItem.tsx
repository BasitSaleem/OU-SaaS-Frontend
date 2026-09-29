import ProductFeatureIcon from "./ProductFeatureIcons";
import type { ProductKey } from "@/constant/navigationData";

// Full class strings per product so Tailwind can detect them.
const ICON_TONE: Record<ProductKey, string> = {
  pulse: "bg-paper text-ink group-hover/fitem:bg-coral group-hover/fitem:text-white",
  inventory: "bg-[rgb(121_92_245/0.09)] text-[#5a3fd6] group-hover/fitem:bg-purple group-hover/fitem:text-white",
};

interface ProductFeatureItemProps {
  tone: ProductKey;
  icon: string;
  label: string;
}

const ProductFeatureItem: React.FC<ProductFeatureItemProps> = ({ tone, icon, label }) => (
  <li className="group/fitem flex items-center gap-3 rounded-xl py-2.5 pr-2.5 pl-2 text-[15px] leading-[1.35] font-medium tracking-[-0.01em] [transition:background-color_180ms,translate_420ms_var(--ease-out)] hover:translate-x-[3px] hover:bg-paper">
    <span
      className={`grid size-9 flex-none place-items-center rounded-[10px] transition-[background-color,color] duration-[180ms] ${ICON_TONE[tone]}`}
    >
      <ProductFeatureIcon name={icon} />
    </span>
    <span>{label}</span>
  </li>
);

export default ProductFeatureItem;
