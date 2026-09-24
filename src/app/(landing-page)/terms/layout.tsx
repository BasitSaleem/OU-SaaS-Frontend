import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Owners Universe",
  description:
    "Owners Universe Terms of Service. Terms governing the use of Owners Pulse, Owners Inventory, and the Owners Universe platform.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
