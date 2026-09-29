export const ABOUT_HERO_TITLE = "About Owners Universe";
export const ABOUT_HERO_SUB =
  "We build software for people who build businesses.";

export const ABOUT_STORY_TITLE = "Our Story";
export const ABOUT_STORY_PARAGRAPHS: string[] = [
  "Owners Universe started with a simple observation: business owners in service industries — plumbers, HVAC technicians, retail store owners, restaurant operators — don't have time to learn complicated software. They don't have IT departments. They don't have marketing teams. They have customers to serve and businesses to run.",
  "The software available to them was either too expensive, too generic, or too complicated. Enterprise tools built for companies with 500 employees were being sold to businesses with 5. Marketing agencies charged thousands per month but disappeared the moment the contract ended. Generic platforms tried to serve every industry and ended up serving none well.",
  "We took a different approach. We build products for specific industries — not generic software with a different logo. Each product understands the language, the workflow, the pain points, and the customers of the industry it serves. A plumber's marketing challenges are different from a retailer's inventory challenges. The tools should be different too.",
  "Today, Owners Universe is the parent platform behind two products: Owners Pulse for home services marketing automation, and Owners Inventory for retail operations management. Each product is built by a dedicated team, supported by its own specialists, and designed to be the best in its category.",
  "We're not done. More products are on the way — each one built with the same philosophy: purpose-built, industry-specific, and designed for business owners who'd rather focus on their craft than fight with software.",
];

export interface AboutValueItem {
  num: string;
  title: string;
  desc: string;
}

export const ABOUT_VALUES_TITLE = "What We Believe";
export const ABOUT_VALUES: AboutValueItem[] = [
  {
    num: "01",
    title: "Built for Owners, Not IT Departments",
    desc: "Every product should be usable by the person who owns the business — not just the person who manages the technology. If it needs a manual, it's not ready.",
  },
  {
    num: "02",
    title: "One Industry. One Product. Done Right.",
    desc: "We don't build swiss-army-knife software. Each product serves one industry deeply. A tool that tries to do everything does nothing well.",
  },
  {
    num: "03",
    title: "You Own Everything",
    desc: "Your data, your website, your phone number, your customer list — it's yours. If you ever leave, you take it with you. No lock-in tricks.",
  },
  {
    num: "04",
    title: "Month-to-Month. Always.",
    desc: "Every product, every plan, every service — month-to-month. No annual contracts. No cancellation fees. If our product doesn't earn your payment this month, we don't deserve it.",
  },
];

export interface AboutStatItem {
  count: number;
  suffix?: string;
  label: string;
  note?: string;
}

export const ABOUT_STATS_TITLE = "By the Numbers";
export const ABOUT_STATS: AboutStatItem[] = [
  { count: 80, suffix: "+", label: "Team Members" },
  { count: 2, label: "Products Live" },
  { count: 3, suffix: "+", label: "Years Building" },
  { count: 2, label: "Industries Served", note: "Home Services + Retail" },
];

export const ABOUT_LOCATION_TITLE = "Where We're Based";
export const ABOUT_LOCATION_DESC =
  "Owners Universe is headquartered with a team that operates across US time zones, ensuring support and service are always available during business hours.";
export const ABOUT_LOCATION_NAME = "Owners Universe";
export const ABOUT_LOCATION_ADDRESS_STRING =
  "Owners Universe, 4254 Normandy Ct, Fredericksburg, VA 22408, United States";
export const ABOUT_LOCATION_LINES: string[] = [
  "4254 Normandy Ct",
  "Fredericksburg, VA 22408",
  "United States",
];

export const ABOUT_CTA_TITLE = "Explore Our Products";
export const ABOUT_CTA_SUB =
  "See what we've built — and what we're building next.";
export const ABOUT_CTA_BUTTON_TEXT = "View Products";
export const ABOUT_CTA_BUTTON_HREF = "/#products";
