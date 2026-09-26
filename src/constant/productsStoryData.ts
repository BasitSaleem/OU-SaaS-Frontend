import type { DashboardIconKey } from "@/components/pages/landing-page/DashboardIcons";
import type { ProductKey } from "./navigationData";

export const PRODUCTS_INTRO = {
  title: "Our Products",
  lead: "Each product is built for a specific industry, purpose-built, not generic.",
};

export interface ProductChapterData {
  index: 0 | 1;
  num: string;
  category: string;
  productKey: ProductKey;
  logoAlt: string;
  body: string;
  tags: string[];
  ctaLabel: string;
  ctaUrl: string;
  price?: string;
}

export const PRODUCT_CHAPTERS: ProductChapterData[] = [
  {
    index: 0,
    num: "01",
    category: "Marketing Automation for Home Services",
    productKey: "pulse",
    logoAlt: "Owners Pulse",
    body: "CRM, automated Google reviews, online booking, estimate follow-up, AI phone receptionist, and done-for-you marketing, built specifically for plumbers, HVAC, electricians, roofers, and cleaning companies.",
    tags: ["Automated Review Engine", "Smart Booking & CRM", "Done-for-You Marketing Services"],
    ctaLabel: "Visit Owners Pulse",
    ctaUrl: "https://ownerspulse.com",
    price: "Plans from $97/month",
  },
  {
    index: 1,
    num: "02",
    category: "POS & Operations Management for Retail",
    productKey: "inventory",
    logoAlt: "Owners Inventory",
    body: "Point of sale, inventory tracking, purchasing, HR, finance, manufacturing, and eCommerce, built for retail businesses, restaurants, pharmacies, fashion, and wholesale operations.",
    tags: ["Point of Sale (POS)", "Real-Time Inventory Tracking", "HR, Finance & Reporting", "Multi-Location Support"],
    ctaLabel: "Visit Owners Inventory",
    ctaUrl: "https://ownersinventory.com",
  },
];

interface DashboardNavItem {
  icon: DashboardIconKey;
  label: string;
  active?: boolean;
}

export const PULSE_DASHBOARD = {
  navItems: [
    { icon: "grid", label: "Dashboard" },
    { icon: "users", label: "Leads & CRM", active: true },
    { icon: "star", label: "Reviews" },
    { icon: "calendar", label: "Bookings" },
    { icon: "megaphone", label: "Campaigns" },
    { icon: "phone-waves", label: "AI Receptionist" },
  ] satisfies DashboardNavItem[],
  title: "Leads pipeline",
  kpis: [
    { label: "New leads", value: "128", delta: "+18%" },
    { label: "Jobs booked", value: "37", delta: "+11%" },
    { label: "Avg. rating", value: "4.9", delta: "212 reviews" },
    { label: "Calls answered", value: "46", delta: "100%" },
  ],
  pipeline: [
    {
      title: "New",
      count: 2,
      cards: [
        { title: "Water heater quote", subtitle: "Dallas, TX" },
        { title: "Panel upgrade", subtitle: "Plano, TX" },
      ],
    },
    {
      title: "Estimate sent",
      count: 2,
      cards: [
        { title: "AC tune-up ×3", subtitle: "Frisco, TX" },
        { title: "Roof inspection", subtitle: "Irving, TX" },
      ],
    },
    {
      title: "Follow-up",
      count: 1,
      cards: [{ title: "Drain line repair", subtitle: "Allen, TX" }],
    },
    {
      title: "Booked",
      count: 2,
      cards: [
        { title: "Furnace install", subtitle: "Thu · 9:00" },
        { title: "Deep clean", subtitle: "Fri · 1:30" },
      ],
    },
  ],
};

export const INVENTORY_DASHBOARD = {
  navItems: [
    { icon: "grid", label: "Overview" },
    { icon: "receipt", label: "Point of Sale" },
    { icon: "boxes", label: "Inventory", active: true },
    { icon: "truck", label: "Purchasing" },
    { icon: "bar-chart", label: "Reports" },
    { icon: "package", label: "eCommerce" },
  ] satisfies DashboardNavItem[],
  title: "Inventory · all locations",
  kpis: [
    { label: "Sales today", value: "$12,480", delta: "+9%" },
    { label: "Orders", value: "184", delta: "+6%" },
    { label: "Stock value", value: "$86.2k" },
    { label: "Low stock", value: "3", delta: "auto-reorder" },
  ],
  weekbars: [0.52, 0.64, 0.48, 0.71, 0.6, 0.86, 0.74],
  weekbarsCaption: "Sales · last 7 days",
  stock: [
    { sku: "SKU-2041", item: "Linen overshirt", location: "Downtown", qty: 64, status: "ok" as const },
    { sku: "SKU-1187", item: "Leather tote", location: "Uptown", qty: 12, status: "ok" as const },
    { sku: "SKU-3302", item: "Canvas sneaker", location: "Online", qty: 4, status: "low" as const },
    { sku: "SKU-0915", item: "Wool scarf", location: "Downtown", qty: 0, status: "reordered" as const },
  ],
};
