import ProductChapter from "./ProductChapter";
import PulseDashboard from "./PulseDashboard";
import InventoryDashboard from "./InventoryDashboard";
import { PRODUCT_CHAPTERS } from "@/constant/productsStoryData";

interface ProductsStoryChaptersProps {
  pulseRef: React.RefObject<HTMLElement | null>;
  inventoryRef: React.RefObject<HTMLElement | null>;
}

const ProductsStoryChapters: React.FC<ProductsStoryChaptersProps> = ({ pulseRef, inventoryRef }) => (
  <div className="flex flex-col">
    <ProductChapter ref={pulseRef} data={PRODUCT_CHAPTERS[0]}>
      <PulseDashboard />
    </ProductChapter>
    <ProductChapter ref={inventoryRef} data={PRODUCT_CHAPTERS[1]}>
      <InventoryDashboard />
    </ProductChapter>
  </div>
);

export default ProductsStoryChapters;
