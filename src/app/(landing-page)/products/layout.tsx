import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Owners Universe — Purpose-Built Software for Service Industries",
  description:
    "Explore Owners Universe products: Owners Pulse for home services marketing automation, and Owners Inventory for retail POS and operations.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
