import Reveal from "@/components/common-components/Reveal";
import ProductFeatureItem from "./ProductFeatureItem";
import type { ProductFeatureGroup } from "@/constant/productsPageData";
import type { ProductKey } from "@/constant/navigationData";

const TAG_TONE: Record<NonNullable<ProductFeatureGroup["tagKind"]>, string> = {
  included: "border-ink bg-ink text-paper",
  addon: "border-[rgb(249_92_91/0.35)] bg-[#fff5f4] text-[#c2413f]",
};

interface ProductFeatureColumnsProps {
  tone: ProductKey;
  groups: ProductFeatureGroup[];
}

const ProductFeatureColumns: React.FC<ProductFeatureColumnsProps> = ({ tone, groups }) => {
  const hasWide = groups.some((g) => g.wide);

  return (
    <Reveal
      mode="stagger"
      className={`mt-[clamp(64px,8vw,104px)] grid items-stretch gap-4 max-[900px]:grid-cols-1 ${
        hasWide ? "grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "grid-cols-2"
      }`}
    >
      {groups.map((group) => (
        <div key={group.title} className="rounded-[var(--r-xl)] border border-line bg-white p-7">
          <h3 className="mb-[18px] flex items-center gap-2.5 text-xl font-semibold tracking-[-0.025em]">
            {group.title}
            {group.tag && group.tagKind && (
              <span className={`rounded-full border px-2.5 py-1 text-xs font-medium tracking-normal ${TAG_TONE[group.tagKind]}`}>
                {group.tag}
              </span>
            )}
          </h3>
          <ul
            className={`grid gap-0.5 ${group.wide ? "grid-cols-2 gap-x-3 max-[720px]:grid-cols-1" : "grid-cols-1"}`}
          >
            {group.items.map((item) => (
              <ProductFeatureItem key={item.label} tone={tone} icon={item.icon} label={item.label} />
            ))}
          </ul>
        </div>
      ))}
    </Reveal>
  );
};

export default ProductFeatureColumns;
