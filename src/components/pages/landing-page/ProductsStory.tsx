"use client";

import { useRef } from "react";
import ProductsStoryChapters from "./ProductsStoryChapters";
import ProductsStoryVisual from "./ProductsStoryVisual";
import { useProductsActiveChapter } from "@/hooks/useProductsActiveChapter";
import { usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";
import { CONTAINER } from "@/styles/sectionClasses";

const ProductsStory: React.FC = () => {
  const storyRef = usePinnedScrollProgress<HTMLDivElement>();
  const pulseChapterRef = useRef<HTMLElement>(null);
  const inventoryChapterRef = useRef<HTMLElement>(null);
  const activeIndex = useProductsActiveChapter([pulseChapterRef, inventoryChapterRef]);

  return (
    <div
      ref={storyRef}
      id="product-story"
      data-active={activeIndex}
      className={`${CONTAINER} relative grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[clamp(32px,5vw,88px)] max-[900px]:grid-cols-1 [--p:0]`}
    >
      <ProductsStoryChapters pulseRef={pulseChapterRef} inventoryRef={inventoryChapterRef} />
      <ProductsStoryVisual activeIndex={activeIndex} />
    </div>
  );
};

export default ProductsStory;
