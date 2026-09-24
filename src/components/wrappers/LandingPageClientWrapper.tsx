"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/pages/footer/Footer";

const LandingPageClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <div key={pathname}>{children}</div>
      <Footer />
    </>
  );
};

export default LandingPageClientWrapper;
