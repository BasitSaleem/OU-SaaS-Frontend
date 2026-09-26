import ProductsIntro from "./ProductsIntro";
import ProductsStory from "./ProductsStory";

const Products: React.FC = () => (
  <section id="products" aria-labelledby="products-title" className="relative bg-paper pt-[clamp(40px,8vw,120px)]">
    <ProductsIntro />
    <ProductsStory />
  </section>
);

export default Products;
