import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/pages/navbar/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SchemaHead from "@/components/common-components/SchemaHead";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Owners Universe — Business Software for Service Industries",
  description:
    "The platform behind Owners Pulse and Owners Inventory. Marketing automation for home services. POS and operations for retail. One account, all products.",
  verification: {
    google: "ORTD_406SfKBSSjokTrt1Ad3DNh6V6CHh8Y9ewQbwEg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <SchemaHead />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
