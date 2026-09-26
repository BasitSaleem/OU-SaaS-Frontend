"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";
import FooterBottomBar from "./FooterBottomBar";
import FooterMark from "./FooterMark";
import { useSpotlightPointer } from "@/hooks/useSpotlightPointer";
import { FOOTER_COLUMNS } from "@/constant/navigationData";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  useSpotlightPointer(footerRef, markRef);

  return (
    <footer
      ref={footerRef}
      className="relative z-[5] -mt-7 overflow-hidden rounded-t-[28px] bg-paper pt-[clamp(72px,9vw,120px)] font-display"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[5fr_7fr] md:gap-x-16 md:gap-y-0 lg:gap-x-24">
          <FooterBrand />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <FooterColumn key={column.title} column={column} />
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-16 md:mt-[clamp(56px,7vw,88px)]">
          <FooterBottomBar />
        </div>
      </Container>

      <FooterMark ref={markRef} />
    </footer>
  );
};

export default Footer;
