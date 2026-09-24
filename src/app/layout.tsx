import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Navbar from "@/components/pages/navbar/Navbar";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Owners Universe — Business Software for Service Industries",
  description:
    "The platform behind Owners Pulse and Owners Inventory. Marketing automation for home services. POS and operations for retail. One account, all products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
