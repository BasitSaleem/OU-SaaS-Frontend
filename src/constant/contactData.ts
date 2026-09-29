export const CONTACT_HERO_TITLE = "Contact Us";
export const CONTACT_HERO_SUB =
  "Have a question about your account, our products, or working with us? We're here to help.";

export interface TopicOption {
  value: string;
  label: string;
  recipient: string;
}

export const CONTACT_TOPICS: TopicOption[] = [
  { value: "Account & Login", label: "Account & Login", recipient: "accounts@ownersuniverse.com" },
  { value: "Owners Pulse", label: "Owners Pulse", recipient: "support@ownerspulse.com" },
  { value: "Owners Inventory", label: "Owners Inventory", recipient: "support@ownersinventory.com" },
  { value: "Partnership Inquiry", label: "Partnership Inquiry", recipient: "accounts@ownersuniverse.com" },
  { value: "Investment Inquiry", label: "Investment Inquiry", recipient: "accounts@ownersuniverse.com" },
];
