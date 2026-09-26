import Image from "next/image";
import type { MosaicItemData } from "@/constant/ownersData";

const MosaicItem: React.FC<{ item: MosaicItemData }> = ({ item }) => (
  <figure
    className={`group absolute overflow-hidden rounded-[var(--r-lg)] bg-paper-2 [box-shadow:var(--shadow-2)] will-change-transform ${item.className}`}
    style={{ transform: `translate3d(0, calc((var(--p) - 0.5) * ${item.s} * 140px), 0)` }}
  >
    <Image
      src={item.src}
      alt={item.alt}
      width={720}
      height={480}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.04]"
    />
  </figure>
);

export default MosaicItem;
