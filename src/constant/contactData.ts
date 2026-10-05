export const CONTACT_HERO_TITLE = "Contact Us";
export const CONTACT_HERO_SUB =
  "Have a question about your account, our products, or working with us? We're here to help.";

export interface TopicOption {
  value: string;
  label: string;
}

export const CONTACT_TOPICS: TopicOption[] = [
  { value: "Account & Login", label: "Account & Login" },
  { value: "Owners Pulse", label: "Owners Pulse" },
  { value: "Owners Inventory", label: "Owners Inventory" },
  { value: "Partnership Inquiry", label: "Partnership Inquiry" },
  { value: "Investment Inquiry", label: "Investment Inquiry" },
];
