import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Owners Universe",
  description:
    "Owners Universe Privacy Policy. How we collect, use, and protect your personal information across Owners Pulse and Owners Inventory.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
