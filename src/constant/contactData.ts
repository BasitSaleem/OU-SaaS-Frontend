import type { ContactIconName } from "@/components/pages/contact/ContactInfoIcon";

export const CONTACT_HERO_TITLE = "How can we help you today?";
export const CONTACT_HERO_SUB =
  "Have a question about your account, our products, or working with us? We're here to help.";

export interface ContactInfoItem {
  icon: ContactIconName;
  label: string;
  value: string;
  valueHref?: string;
  sub?: string;
  extraLink?: { text: string; href: string };
}

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    icon: "mail",
    label: "Email",
    value: "accounts@ownersuniverse.com",
    valueHref: "mailto:accounts@ownersuniverse.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "(540) 559-2908",
    sub: "Owners Pulse support line",
  },
  {
    icon: "pin",
    label: "Location",
    value: "4254 Normandy Ct",
    sub: "Fredericksburg, VA 22408",
    extraLink: {
      text: "View on Maps →",
      href: "https://www.google.com/maps/search/?api=1&query=4254+Normandy+Ct,+Fredericksburg,+VA+22408,+United+States",
    },
  },
  {
    icon: "clock",
    label: "Business Hours",
    value: "Mon - Fri, 9am - 6pm EST",
    sub: "Saturday - Sunday: Closed",
  },
];

export const CONTACT_TOPIC_OPTIONS = [
  "Account & Login",
  "Owners Pulse Support",
  "Owners Inventory Support",
  "Partnership Inquiry",
  "Investment Inquiry",
  "Something Else",
];
