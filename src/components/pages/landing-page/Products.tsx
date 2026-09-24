"use client";

import { useStickyCardStack } from "@/hooks/useStickyCardStack";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import ProductPanel from "./ProductPanel";
import { PRODUCT_PANELS } from "@/constant/productsData";

const Products: React.FC = () => {
  const trackRef = useStickyCardStack<HTMLDivElement>();

  return (
    <section id="products" className="relative bg-white py-[60px]">
      <Container className="mb-[clamp(28px,3.5vw,48px)]">
        <Eyebrow text="Our Products" className="mb-3" />
        <MainHeading as="h2">
          Two products.
          <br />
          One universe.
        </MainHeading>
      </Container>

      <Container className="relative">
        <div ref={trackRef} className="flex flex-col gap-6">
          {PRODUCT_PANELS.map((product) => (
            <ProductPanel key={product.variant} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
