import ProductIntro from "./ProductIntro";
import ProductMedia from "./ProductMedia";
import ProductFeatureColumns from "./ProductFeatureColumns";
import ProductPricing from "./ProductPricing";
import { CONTAINER } from "@/styles/sectionClasses";
import type { ProductSectionData } from "@/constant/productsPageData";

interface ProductSectionProps {
  product: ProductSectionData;
  /** Mirrors the copy/media columns (Owners Inventory). */
  flip?: boolean;
  className?: string;
}

/** One product's block on /products: intro copy + parallax photos, feature columns, pricing line. */
const ProductSection: React.FC<ProductSectionProps> = ({ product, flip = false, className = "" }) => (
  <section
    id={product.id}
    aria-labelledby={`${product.id}-title`}
    className={`relative scroll-mt-10 pt-[clamp(72px,9vw,120px)] ${className}`}
  >
    <div
      className={`${CONTAINER} grid grid-cols-2 items-center gap-[clamp(40px,6vw,96px)] max-[900px]:grid-cols-1`}
    >
      <ProductIntro product={product} flip={flip} />
      <ProductMedia main={product.media.main} sub={product.media.sub} flip={flip} />
    </div>
    <div className={CONTAINER}>
      <ProductFeatureColumns tone={product.key} groups={product.groups} />
      <ProductPricing text={product.pricing} />
    </div>
  </section>
);

export default ProductSection;
