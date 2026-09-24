import type { StaticImageData } from "next/image";
import pulseLogo from "../../public/assets/products/owners-pulse-logo.png";
import pulseMedia from "../../public/assets/products/owners-pulse-media.jpg";
import inventoryLogo from "../../public/assets/products/owners-inventory-logo.png";
import inventoryMedia from "../../public/assets/products/owners-inventory-media.jpg";

export interface ProductPanelData {
  variant: "op" | "oi";
  logo: StaticImageData;
  logoAlt: string;
  media: StaticImageData;
  description: string;
  features: string[];
  visitLabel: string;
  visitUrl: string;
  stickyTop: number;
  zIndex: number;
}

export const PRODUCT_PANELS: ProductPanelData[] = [
  {
    variant: "op",
    logo: pulseLogo,
    logoAlt: "Owners Pulse",
    media: pulseMedia,
    description:
      "CRM, automated Google reviews, online booking, estimate follow-up, an AI phone receptionist, and done-for-you marketing built for plumbers, HVAC, electricians, roofers, and cleaning companies.",
    features: ["Review Engine", "Smart CRM", "AI Receptionist", "From $97/mo"],
    visitLabel: "Explore Owners Pulse",
    visitUrl: "https://ownerspulse.com",
    stickyTop: 80,
    zIndex: 1,
  },
  {
    variant: "oi",
    logo: inventoryLogo,
    logoAlt: "Owners Inventory",
    media: inventoryMedia,
    description:
      "Point of sale, inventory tracking, purchasing, HR, finance, manufacturing, and eCommerce for retail businesses, restaurants, pharmacies, fashion, and wholesale operations.",
    features: ["Point of Sale", "Live Inventory", "Multi-location", "eCommerce"],
    visitLabel: "Explore Owners Inventory",
    visitUrl: "https://ownersinventory.com",
    stickyTop: 100,
    zIndex: 2,
  },
];
