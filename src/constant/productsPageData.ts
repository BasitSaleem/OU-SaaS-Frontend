import type { StaticImageData } from "next/image";
import pulseLogo from "../../public/assets/products/owners-pulse-logo.png";
import inventoryLogo from "../../public/assets/products/owners-inventory-logo.png";

export const PRODUCTS_HERO_TITLE_PREFIX = "Purpose-built software for";
export const PRODUCTS_HERO_TITLE_GRADIENT = "service industries";

export const PRODUCTS_HERO_SUB =
  "Owners Pulse for home services marketing automation. Owners Inventory for retail POS and operations. One Owners Universe, two ways to grow.";

export interface ProductTrustBadge {
  icon: "shield" | "card" | "chart";
  text: string;
}

export const PRODUCTS_TRUST_BADGES: ProductTrustBadge[] = [
  { icon: "shield", text: "SOC 2-ready infrastructure" },
  { icon: "card", text: "No credit card required" },
  { icon: "chart", text: "One account, all products" },
];

export const PRODUCTS_SECTION_EYEBROW = "The Products";
export const PRODUCTS_SECTION_TITLE = "Everything you need to run both sides of your business";
export const PRODUCTS_SECTION_SUB =
  "Two focused tools. One shared platform. Choose the one that fits now — add the other whenever you're ready.";

export interface ProductShowcaseCardData {
  id: "pulse" | "inventory";
  logo: StaticImageData;
  logoAlt: string;
  tag: string;
  title: string;
  description: string;
  included: string[];
  addons: string[];
  footnote: string;
  ctaText: string;
  ctaHref: string;
  theme: {
    accentColor: string;
    bgGradient: string;
    tagBg: string;
    tagText: string;
    plusCircleBg: string;
  };
}

export const PRODUCTS_SHOWCASE_CARDS: ProductShowcaseCardData[] = [
  {
    id: "pulse",
    logo: pulseLogo,
    logoAlt: "Owners Pulse",
    tag: "Marketing automation built for home services.",
    title: "Owners Pulse",
    description:
      "Owners Pulse helps service businesses turn every homeowner interaction into a booked job. It orchestrates outreach, follow-ups, and review requests automatically — so leads never go cold.",
    included: [
      "Automated follow-up campaigns",
      "Review & reputation management",
      "Two-way SMS & email inbox",
      "ROI & campaign reporting",
    ],
    addons: [
      "Advanced lead scoring",
      "Dynamic audience segmentation",
      "Multi-location rollout",
      "API access & custom integrations",
    ],
    footnote: "Core included in every plan — advanced modules available as add-ons to scale with your growth.",
    ctaText: "Book a Free Demo",
    ctaHref: "https://ownerspulse.com",
    theme: {
      accentColor: "#F95C5B",
      bgGradient: "bg-[linear-gradient(180deg,#FDEEEC_0%,#FDB2B0_100%)]",
      tagBg: "bg-[#FCE1DF]/80",
      tagText: "text-[#F95C5B]",
      plusCircleBg: "bg-[#FCE1DF]",
    },
  },
  {
    id: "inventory",
    logo: inventoryLogo,
    logoAlt: "Owners Inventory",
    tag: "Marketing automation built for home services.",
    title: "Owners Inventory",
    description:
      "Owners Inventory unifies point-of-sale, stock control, and day-to-day operations for growing retail brands. Count, move, and sell with a single source of truth.",
    included: [
      "Unified point-of-sale",
      "Real-time stock tracking",
      "Purchase order management",
      "Sales & margin insights",
    ],
    addons: [
      "Multi-store forecasting",
      "Loyalty & promotions engine",
      "Barcode & label printing",
      "Supplier portal integrations",
    ],
    footnote: "Core included in every plan — advanced modules available as add-ons to scale with your growth.",
    ctaText: "Book a Free Demo",
    ctaHref: "https://ownersinventory.com",
    theme: {
      accentColor: "#795CF5",
      bgGradient: "bg-[linear-gradient(180deg,#F5F3FF_0%,#B8A7FB_100%)]",
      tagBg: "bg-[#ECE6FE]/80",
      tagText: "text-[#795CF5]",
      plusCircleBg: "bg-[#ECE6FE]",
    },
  },
];

