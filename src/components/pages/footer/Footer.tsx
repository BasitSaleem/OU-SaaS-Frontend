import Image from "next/image";
import Container from "@/components/Container";
import FooterBrand from "./FooterBrand";
import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";
import { FOOTER_COLUMNS } from "@/constant/navigationData";
import footerLogo from "../../../../public/assets/footer-logo.webp";

const Footer: React.FC = () => (
  <div className="bg-white p-0 sm:p-6">
    <footer className="relative overflow-hidden rounded-none bg-[#FAFAFA] sm:rounded-[16px]">
      {/* Ambient Glow Ellipses */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40px] left-1/2 flex -translate-x-1/2 items-center justify-center select-none"
      >
        <div className="h-[184px] w-[148px] rounded-full bg-[#F95C5BD4] blur-[100px]" />
        <div className="h-[184px] w-[148px] rounded-full bg-[#795CF5] blur-[100px]" />
      </div>

      {/* Giant Background Watermark Image */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 select-none"
      >
        <Image
          src={footerLogo}
          alt=""
          className="h-auto w-[min(920px,90vw)] max-w-none"
          priority
        />
      </div>

      <Container className="relative z-[1]">
        <div className="grid grid-cols-1 gap-10 pt-16 pb-20 sm:grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-12 lg:pb-28">
          <FooterBrand />
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-6 pb-8 text-xs text-g500 sm:flex-row sm:text-[13px]">
          <span>&copy; 2026 Owners Universe. All rights reserved.</span>
          <FooterSocial />
        </div>
      </Container>
    </footer>
  </div>
);

export default Footer;
