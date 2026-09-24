import PageMesh from "@/components/PageMesh";
import ProductsHero from "@/components/pages/products/ProductsHero";
import ProductsShowcase from "@/components/pages/products/ProductsShowcase";
import WhyTwoProducts from "@/components/pages/products/WhyTwoProducts";
import ComingSoonSection from "@/components/pages/products/ComingSoonSection";
import ProductsClosingCta from "@/components/pages/products/ProductsClosingCta";

const Page = () => (
  <>
    <PageMesh />
    <ProductsHero />
    <ProductsShowcase />
    <WhyTwoProducts />
    <ComingSoonSection />
    <ProductsClosingCta />
  </>
);

export default Page;
