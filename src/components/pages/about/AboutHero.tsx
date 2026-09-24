import Link from "next/link";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { ABOUT_HERO_SUB, ABOUT_HERO_TITLE } from "@/constant/aboutData";

const AboutHero: React.FC = () => (
  <section className="border-b border-g200 pt-[calc(var(--nav-h)+60px)] pb-[60px]">
    <Container>
      <div className="mb-5 text-[13px] text-g400">
        <Link href="/" className="text-g400 transition-colors duration-200 hover:text-purple">
          Home
        </Link>
        <span className="mx-1.5 text-g300">/</span>
        <span>About</span>
      </div>
      <MainHeading
        as="h1"
        className="mb-3.5 !text-[36px] md:!text-[48px] lg:!text-[64px] !font-semibold !tracking-[-0.03em]"
      >
        {ABOUT_HERO_TITLE}
      </MainHeading>
      <Paragraph className="max-w-[520px] !text-[length:clamp(17px,1.4vw,20px)] lg:!text-[length:clamp(17px,1.4vw,20px)] !leading-[1.5] !text-g500">
        {ABOUT_HERO_SUB}
      </Paragraph>
    </Container>
  </section>
);

export default AboutHero;
