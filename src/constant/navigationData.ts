export interface NavLink {
  label: string;
  href: string;
}

/** Plain top-level links shown next to the "Products" dropdown trigger. */
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LOGIN_URL = "https://app.ownersuniverse.com";
export const REGISTER_URL = "https://app.ownersuniverse.com/register";

export type ProductKey = "pulse" | "inventory";

export interface ProductNavItem {
  key: ProductKey;
  name: string;
  href: string;
  category: string;
  tags: string[];
}

/** Cards shown inside the header's "Products" mega dropdown and the mobile sheet. */
export const PRODUCT_NAV_ITEMS: ProductNavItem[] = [
  {
    key: "pulse",
    name: "Owners Pulse",
    href: "/products#owners-pulse",
    category: "Marketing Automation for Home Services",
    tags: ["Automated Review Engine", "Smart Booking & CRM", "Done-for-You Marketing Services"],
  },
  {
    key: "inventory",
    name: "Owners Inventory",
    href: "/products#owners-inventory",
    category: "POS & Operations Management for Retail",
    tags: ["Point of Sale (POS)", "Real-Time Inventory Tracking", "HR, Finance & Reporting", "Multi-Location Support"],
  },
];

export interface FooterColumnData {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export const FOOTER_TAGLINE = "Business software for service industries.";

export const FOOTER_ADDRESS = "4254 Normandy Ct, Fredericksburg, VA 22408, United States";

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Products",
    links: [
      { label: "Owners Pulse", href: "https://ownerspulse.com", external: true },
      { label: "Owners Inventory", href: "https://ownersinventory.com", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
