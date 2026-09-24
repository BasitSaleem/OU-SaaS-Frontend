import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Owners Universe",
  description:
    "Get in touch with Owners Universe. For account questions, email accounts@ownersuniverse.com. For product-specific support, visit the Owners Pulse or Owners Inventory support pages.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
