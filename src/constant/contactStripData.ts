import type { ContactIconName } from "@/components/pages/contact/ContactInfoIcon";

export interface BusinessInfoItem {
  icon: ContactIconName;
  title: string;
  lines: string[];
  link?: {
    text: string;
    href: string;
  };
}

export const BUSINESS_INFO_ITEMS: BusinessInfoItem[] = [
  {
    icon: "pin",
    title: "Address",
    lines: ["4254 Normandy Ct", "Fredericksburg, VA 22408"],
  },
  {
    icon: "clock",
    title: "Business Hours",
    lines: ["Monday - Friday", "9:00 AM - 6:00 PM EST"],
  },
  {
    icon: "mail",
    title: "General Inquiries",
    lines: [],
    link: {
      text: "accounts@ownersuniverse.com",
      href: "mailto:accounts@ownersuniverse.com",
    },
  },
];
