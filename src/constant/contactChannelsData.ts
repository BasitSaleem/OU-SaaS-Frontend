import type { StaticImageData } from "next/image";
import { PRODUCT_LOGOS } from "./productLogos";

export const SUPPORT_SECTION_TITLE = "Or go straight to the right team.";
export const SUPPORT_SECTION_SUB =
  "Each Owners product has its own dedicated support channel — skip the wait and reach the people who know it best.";

export interface SupportChannelRow {
  icon: "mail" | "phone";
  text: string;
  href?: string;
}

export interface SupportChannel {
  id: "account" | "pulse" | "inventory";
  title: string;
  desc: string;
  iconSrc?: StaticImageData;
  rows: SupportChannelRow[];
  note?: string;
  cta?: { text: string; href: string };
}

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: "account",
    title: "Account & Login",
    desc: "Account issues, login problems, organization management, or team invitations.",
    rows: [{ icon: "mail", text: "accounts@ownersuniverse.com", href: "mailto:accounts@ownersuniverse.com" }],
    note: "Response within 24 hours during business hours.",
  },
  {
    id: "pulse",
    title: "Owners Pulse",
    desc: "CRM, review automation, booking, marketing services, or billing.",
    iconSrc: PRODUCT_LOGOS.pulse,
    rows: [
      { icon: "mail", text: "support@ownerspulse.com", href: "mailto:support@ownerspulse.com" },
      { icon: "phone", text: "(540) 559-2908" },
    ],
    cta: { text: "Visit Owners Pulse", href: "https://ownerspulse.com/contact" },
  },
  {
    id: "inventory",
    title: "Owners Inventory",
    desc: "POS, inventory, HR, billing, or technical issues.",
    iconSrc: PRODUCT_LOGOS.inventory,
    rows: [{ icon: "mail", text: "support@ownersinventory.com", href: "mailto:support@ownersinventory.com" }],
    cta: { text: "Visit Owners Inventory", href: "https://ownersinventory.com/contact" },
  },
];
