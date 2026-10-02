import ProductsHero from "@/components/pages/products/ProductsHero";
import ProductSection from "@/components/pages/products/ProductSection";
import ComingSoon from "@/components/pages/products/ComingSoon";
import WhySeparate from "@/components/pages/products/WhySeparate";
import { INVENTORY_SECTION, PULSE_SECTION } from "@/constant/productsPageData";

const Page = () => (
  <main id="main" className="overflow-x-clip bg-paper font-display">
    <ProductsHero />
    <ProductSection product={PULSE_SECTION} />
    <ProductSection product={INVENTORY_SECTION} flip className="pt-[clamp(120px,14vw,180px)]!" />
    <WhySeparate />
    <ComingSoon />
  </main>
);

export default Page;
