import Logo from "@/components/pages/navbar/Logo";
import Paragraph from "@/components/pages/typography/Paragraph";
import { FOOTER_TAGLINE } from "@/constant/navigationData";

const FooterBrand: React.FC = () => (
  <div className="max-w-[290px] text-left">
    <Logo imgHeight={28} className="mb-4 justify-start" />
    <Paragraph className="!text-[14px] lg:!text-[14px] !leading-[1.65] !text-g500">{FOOTER_TAGLINE}</Paragraph>
  </div>
);

export default FooterBrand;
