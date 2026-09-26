import MosaicItem from "./MosaicItem";
import { MOSAIC_ITEMS } from "@/constant/ownersData";

const Mosaic: React.FC = () => (
  <div className="relative h-[clamp(440px,46vw,640px)] max-[900px]:h-[96vw] max-[900px]:max-h-[620px]">
    {MOSAIC_ITEMS.map((item) => (
      <MosaicItem key={item.key} item={item} />
    ))}
  </div>
);

export default Mosaic;
