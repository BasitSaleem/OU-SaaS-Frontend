import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Owners Universe — Business Software for Service Industries",
  description:
    "Owners Universe builds dedicated, industry-specific business software for service companies. Learn about our story, products, and mission.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
