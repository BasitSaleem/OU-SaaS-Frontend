import type { GlyphName } from "@/components/icons/GlyphIcon";

export const PROOF_HEADING = "Built for business owners, not IT departments.";
export const PROOF_PARAGRAPH =
  "Every Owners Universe product is designed for people who run businesses — not people who run servers. No technical skills required. No consultants needed. Your team sets everything up for you.";

export interface ProofPerk {
  icon: GlyphName;
  title: string;
  description: string;
}

export const PROOF_PERKS: ProofPerk[] = [
  {
    icon: "shield",
    title: "White-glove onboarding",
    description:
      "Every product includes onboarding — our team configures everything for you. You focus on running your business.",
  },
  {
    icon: "check",
    title: "No contracts",
    description: "Month-to-month on every plan. No contracts. Cancel anytime. We earn your business every single month.",
  },
  {
    icon: "users",
    title: "Real team behind it",
    description: "Built and supported by an 80+ person team. Real people, real support, real accountability.",
  },
];
