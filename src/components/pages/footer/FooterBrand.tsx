import Logo from "@/components/pages/navbar/Logo";
import { FOOTER_TAGLINE } from "@/constant/navigationData";

const FooterBrand: React.FC = () => (
  <div className="flex flex-col items-start gap-[22px]">
    <Logo imgHeight={52} className="justify-start rounded-xl transition-opacity duration-150 hover:opacity-85" />
    <p className="max-w-[30em] text-base leading-[1.6] text-neutral">{FOOTER_TAGLINE}</p>
  </div>
);

export default FooterBrand;
