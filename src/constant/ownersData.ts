export const OWNERS_TITLE = "Built for Business Owners, Not IT Departments";
export const OWNERS_LEAD =
  "Every Owners Universe product is designed for people who run businesses, not people who run servers. No technical skills required. No consultants needed. Your team sets everything up for you.";

export interface MosaicItemData {
  key: "m1" | "m2" | "m3" | "m4";
  src: string;
  alt: string;
  s: number;
  className: string;
}

export const MOSAIC_ITEMS: MosaicItemData[] = [
  {
    key: "m1",
    src: "/assets/images/roofer-sm.webp",
    alt: "Roofer climbing a ladder on a terracotta tile roof",
    s: -0.6,
    className: "top-[6%] left-0 w-[46%] [aspect-ratio:4/5] max-[900px]:top-0",
  },
  {
    key: "m2",
    src: "/assets/images/warehouse-sm.webp",
    alt: "Long warehouse aisle with stocked shelving on both sides",
    s: 0.5,
    className: "top-0 right-0 w-1/2 [aspect-ratio:4/3]",
  },
  {
    key: "m3",
    src: "/assets/images/storefront-sm.webp",
    alt: "Neighborhood café storefront on a quiet street corner",
    s: -0.25,
    className: "right-[6%] bottom-[2%] w-[44%] [aspect-ratio:1/1] max-[900px]:bottom-0",
  },
  {
    key: "m4",
    src: "/assets/images/team-sm.webp",
    alt: "Small team working together around a shared table with laptops",
    s: 0.8,
    className: "bottom-0 left-[8%] w-[38%] border-[6px] border-paper [aspect-ratio:4/3]",
  },
];

export interface PromiseData {
  icon: "onboarding" | "flexible" | "team";
  text: string;
}

export const OWNERS_PROMISES: PromiseData[] = [
  { icon: "onboarding", text: "Every product includes onboarding. Our team configures everything for you" },
  { icon: "flexible", text: "Month-to-month on every plan. No contracts. Cancel anytime." },
  { icon: "team", text: "Built and supported by an 80+ person team" },
];
