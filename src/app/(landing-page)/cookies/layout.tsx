import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Owners Universe",
  description:
    "Owners Universe Cookie Policy — learn how we use cookies and similar technologies across our websites and products.",
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
