import type { StaticImageData } from "next/image";
import ownersPulseLogo from "../../public/assets/logos/owners-pulse.svg";
import ownersInventoryLogo from "../../public/assets/logos/owners-inventory.svg";
import type { ProductKey } from "./navigationData";

export const PRODUCT_LOGOS: Record<ProductKey, StaticImageData> = {
  pulse: ownersPulseLogo,
  inventory: ownersInventoryLogo,
};
