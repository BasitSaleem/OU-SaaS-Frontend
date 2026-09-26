import FooterSocial from "./FooterSocial";
import FooterBackToTop from "./FooterBackToTop";
import { FOOTER_ADDRESS } from "@/constant/navigationData";

const FooterBottomBar: React.FC = () => (
  <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-line pt-[22px] pb-[22px]">
    <div className="flex flex-wrap gap-x-5 gap-y-1">
      <p className="text-[13px] text-neutral">&copy; 2026 Owners Universe. All rights reserved.</p>
      <address className="text-[13px] text-neutral not-italic">{FOOTER_ADDRESS}</address>
    </div>
    <div className="flex items-center gap-3.5">
      <FooterSocial />
      <FooterBackToTop />
    </div>
  </div>
);

export default FooterBottomBar;
