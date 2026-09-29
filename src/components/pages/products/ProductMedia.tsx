"use client";

import Image from "next/image";
import Reveal from "@/components/common-components/Reveal";
import { useThroughScrollProgress } from "@/hooks/useThroughScrollProgress";
import type { ProductMediaImage } from "@/constant/productsPageData";

const SIZES = "(max-width: 900px) 90vw, 520px";

interface MediaFigureProps {
  image: ProductMediaImage;
  className: string;
  /** Parallax travel in px across the section's scroll, negative = drifts up. */
  travel: number;
}

const MediaFigure: React.FC<MediaFigureProps> = ({ image, className, travel }) => (
  <figure
    className={`group/fig absolute m-0 overflow-hidden rounded-[var(--r-lg)] bg-paper-2 shadow-[var(--shadow-2)] ${className}`}
    style={{ transform: `translate3d(0, calc((var(--p) - 0.5) * ${travel}px), 0)` }}
  >
    <Image
      src={image.large}
      alt={image.alt}
      fill
      sizes={SIZES}
      className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover/fig:scale-[1.04]"
    />
  </figure>
);

interface ProductMediaProps {
  main: ProductMediaImage;
  sub: ProductMediaImage;
  flip?: boolean;
}

/** Two overlapping photos that drift at different speeds as the section scrolls past (--p from 0 to 1). */
const ProductMedia: React.FC<ProductMediaProps> = ({ main, sub, flip = false }) => {
  const ref = useThroughScrollProgress<HTMLDivElement>();

  return (
    <Reveal>
      <div ref={ref} aria-hidden className="relative aspect-[1/0.92] [--p:0]">
        <MediaFigure
          image={main}
          travel={-40}
          className={`top-0 aspect-[4/3.1] w-[78%] ${flip ? "right-0" : "left-0"}`}
        />
        <MediaFigure
          image={sub}
          travel={60}
          className={`bottom-0 aspect-square w-[48%] border-[6px] border-paper ${flip ? "left-0" : "right-0"}`}
        />
      </div>
    </Reveal>
  );
};

export default ProductMedia;
