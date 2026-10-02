export const HERO_KICKER = "The platform behind Owners Pulse & Owners Inventory";

export const HERO_BODY =
  "We build tools that help business owners grow, from marketing automation for home services to inventory and operations management for retail. One account. All products.";

export const HERO_STAGE_CAPTION = "One account. All products.";

export const HERO_PULSE_NODE = {
  role: "Growth",
  metricLabel: "New leads · this week",
  metricValue: "128",
  metricDelta: "18%",
  sparkLine:
    "0.0,48.4 25.5,42.7 50.9,45.5 76.4,37.0 101.8,39.8 127.3,31.3 152.7,32.7 178.2,22.8 203.6,25.6 229.1,14.2 254.5,17.1 280.0,5.7",
  rows: [
    { text: "4.9 average · 212 Google reviews", icon: "star" as const },
    { text: "46 calls answered by AI receptionist", icon: "phone" as const },
  ],
};

export const HERO_INVENTORY_NODE = {
  role: "Operations",
  metricLabel: "Sales · today",
  metricValue: "$12,480",
  metricDelta: "9%",
  bars: [0.46, 0.62, 0.38, 0.74, 0.58, 0.88, 0.7],
  barLabels: ["M", "T", "W", "T", "F", "S", "S"],
  barActiveIndex: 5,
  rows: [
    { text: "1,284 SKUs tracked · 3 locations", icon: "package" as const },
    { text: "Low stock · reorder sent", icon: "alert" as const, warn: true },
  ],
};

export const HERO_HUB_NODE = {
  orgName: "Rivera & Co.",
  orgSubtitle: "1 organization · 8 teammates",
  avatarInitials: "RC",
  statusLabel: "Synced",
  productsActive: "2 products active",
};

export const HERO_FUTURE_NODE = {
  title: "Future products",
  subtitle: "Your setup carries over",
};

export const HERO_CHIPS = {
  pulse: "New lead → customer record",
  inventory: "Sale → CRM history",
};
