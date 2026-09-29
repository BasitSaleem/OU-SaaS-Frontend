import type { ProductKey } from "./navigationData";

export const PRODUCTS_HERO = {
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Products" }],
  titleLead: "Our",
  titleWord: "Products",
  body: "Each product is purpose-built for a specific industry. We don't build generic software. We build tools that understand your business, your customers, and your daily challenges.",
};

export interface ProductDoorData {
  key: ProductKey;
  href: string;
  line: string;
  chips: string[];
  toneRgb: string;
  toneVar: string;
}

export interface ProductFeatureData {
  icon: string;
  label: string;
}

export interface ProductFeatureGroup {
  title: string;
  tag?: string;
  tagKind?: "included" | "addon";
  wide?: boolean;
  items: ProductFeatureData[];
}

export interface ProductSectionData {
  key: ProductKey;
  id: string;
  name: string;
  headline: string;
  leads: string[];
  industries: string[];
  cta: { label: string; href: string };
  media: { main: ProductMediaImage; sub: ProductMediaImage };
  groups: ProductFeatureGroup[];
  pricing: string;
}

export interface ProductMediaImage {
  small: string;
  large: string;
  alt: string;
}

export const PULSE_SECTION: ProductSectionData = {
  key: "pulse",
  id: "owners-pulse",
  name: "Owners Pulse",
  headline: "Marketing Automation for Home Services",
  leads: [
    "Owners Pulse is the all-in-one marketing automation platform built for home services businesses. It combines CRM, automated review requests, online booking, estimate follow-up, AI phone receptionist, and more, with optional done-for-you marketing services including website design, SEO, Google Ads, social media, and Google Business Profile management.",
    "Built specifically for plumbers, HVAC technicians, electricians, roofers, and cleaning companies. Not generic \"business software\". Every feature is designed around how contractors actually work.",
  ],
  industries: ["Plumbing", "HVAC", "Electrical", "Roofing", "Cleaning"],
  cta: { label: "Visit Owners Pulse", href: "https://ownerspulse.com" },
  media: {
    main: { small: "/assets/images/plumber-sm.webp", large: "/assets/images/plumber.webp", alt: "Plumbing service technician" },
    sub: { small: "/assets/images/hvac-sm.webp", large: "/assets/images/hvac.webp", alt: "HVAC technician inspecting unit" },
  },
  groups: [
    {
      title: "Platform Features",
      tag: "Included",
      tagKind: "included",
      wide: true,
      items: [
        { icon: "star", label: "Automated Review Engine with Rating Gate" },
        { icon: "calendar-check", label: "Smart Booking (24/7 Online Scheduling)" },
        { icon: "users", label: "CRM (Contacts, Pipeline, Conversations)" },
        { icon: "calendar-clock", label: "Estimate Follow-Up (Auto 4-6 Touchpoints)" },
        { icon: "rotate", label: "Customer Reactivation" },
        { icon: "calendar-grid", label: "Seasonal Campaigns" },
        { icon: "clock", label: "Speed-to-Lead (60-Second Callback)" },
        { icon: "phone", label: "AI Phone Receptionist" },
        { icon: "trending-up", label: "Job Profitability Tracker" },
        { icon: "map-pin", label: "Neighborhood Marketing" },
      ],
    },
    {
      title: "Done-for-You Services",
      tag: "Add-On",
      tagKind: "addon",
      items: [
        { icon: "layout", label: "Professional Website Design" },
        { icon: "search", label: "SEO Management (15-25 Keywords)" },
        { icon: "cursor", label: "Google Ads Management" },
        { icon: "share", label: "Social Media Management" },
        { icon: "map-pin-dot", label: "Google Business Profile Management" },
      ],
    },
  ],
  pricing: "Platform plans from $97/month. Done-for-you services from $400/month. No contracts. 14-day free trial.",
};

export const INVENTORY_SECTION: ProductSectionData = {
  key: "inventory",
  id: "owners-inventory",
  name: "Owners Inventory",
  headline: "POS & Operations Management for Retail",
  leads: [
    "Owners Inventory is a complete business operations platform for retail businesses. Point of sale, real-time inventory tracking, purchasing, supplier management, HR, payroll, finance, manufacturing, and eCommerce, all in one system. Built for business owners who need to manage everything from one dashboard without hiring an IT team.",
    "Designed for retail stores, restaurants, pharmacies, fashion boutiques, wholesale distributors, and manufacturing businesses.",
  ],
  industries: ["Retail", "Restaurants", "Pharmacies", "Fashion", "Wholesale", "Manufacturing"],
  cta: { label: "Visit Owners Inventory", href: "https://ownersinventory.com" },
  media: {
    main: { small: "/assets/images/retail-sm.webp", large: "/assets/images/retail.webp", alt: "Retail store interior" },
    sub: { small: "/assets/images/warehouse-sm.webp", large: "/assets/images/warehouse.webp", alt: "Warehouse inventory shelving" },
  },
  groups: [
    {
      title: "Core Modules",
      items: [
        { icon: "barcode", label: "Point of Sale (POS)" },
        { icon: "package", label: "Inventory Management" },
        { icon: "truck", label: "Purchasing & Suppliers" },
        { icon: "wallet", label: "HR & Payroll" },
        { icon: "calculator", label: "Finance & Accounting" },
        { icon: "user", label: "Customer Management" },
      ],
    },
    {
      title: "Advanced Modules",
      items: [
        { icon: "factory", label: "Manufacturing & BOM" },
        { icon: "shopping-bag", label: "eCommerce Integration" },
        { icon: "building", label: "Multi-Location Management" },
        { icon: "pie-chart", label: "Advanced Reporting" },
        { icon: "plug", label: "API & Integrations" },
      ],
    },
  ],
  pricing: "Plans vary by business type and location. Free trial available.",
};

export const WHY_SEPARATE = {
  title: "Why Separate Products?",
  paragraphs: [
    "Home services businesses and retail businesses have fundamentally different needs. A plumber doesn't need a POS system. A retail store doesn't need automated review requests. Building one bloated product that tries to do everything would mean doing nothing well.",
    "Instead, we build focused products, each one the best in its category. Your Owners Universe account connects them all, so if your business spans both industries, you manage everything from one login.",
  ],
};

export const COMING_SOON = {
  title: "More Products on the Way",
  body: "We're building the next product in the Owners Universe ecosystem. It will be purpose-built for another service industry, same philosophy, same quality, same one-account access.",
  contactLead: "Want to be notified when it launches? Contact us at",
  email: "accounts@ownersuniverse.com",
};

export const PRODUCT_DOORS: ProductDoorData[] = [
  {
    key: "pulse",
    href: "#owners-pulse",
    line: "Marketing Automation for Home Services",
    chips: ["Plumbing", "HVAC", "Electrical", "Roofing", "Cleaning"],
    toneRgb: "249 92 91",
    toneVar: "var(--coral)",
  },
  {
    key: "inventory",
    href: "#owners-inventory",
    line: "POS & Operations Management for Retail",
    chips: ["Retail", "Restaurants", "Pharmacies", "Fashion", "Wholesale", "Manufacturing"],
    toneRgb: "121 92 245",
    toneVar: "var(--purple)",
  },
];
