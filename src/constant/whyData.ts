export const WHY_LEAD =
  "Create a single Owners Universe account and access every product in our ecosystem. Your login, your organization, your team, all managed from one place. No separate accounts. No duplicate setups. Add a product when you need it.";

export interface BusFeatureRow {
  rowIndex: 0 | 1 | 2;
  icon: "sso" | "org" | "team";
  title: string;
}

export const BUS_FEATURE_ROWS: BusFeatureRow[] = [
  { rowIndex: 0, icon: "sso", title: "Single Sign-On" },
  { rowIndex: 1, icon: "org", title: "Unified Organization" },
  { rowIndex: 2, icon: "team", title: "Team Access" },
];

export interface WhyStripItem {
  icon: "sso" | "org" | "team";
  title: string;
  description: string;
}

export const WHY_STRIP_ITEMS: WhyStripItem[] = [
  {
    icon: "sso",
    title: "Single Sign-On",
    description: "One email, one password, one login. Access Owners Pulse, Owners Inventory, and future products from one account.",
  },
  {
    icon: "org",
    title: "Unified Organization",
    description: "Set up your business once. Your company name, address, and team carry across every product automatically.",
  },
  {
    icon: "team",
    title: "Team Access",
    description: "Invite team members once. Assign them to the products they need. Manage permissions from one dashboard.",
  },
];
