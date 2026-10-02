import PageHeroField from "@/components/common-components/PageHeroField";
import Breadcrumbs from "@/components/common-components/Breadcrumbs";
import HoverWord from "@/components/common-components/HoverWord";
import { CONTAINER, HERO_H1_SIZE } from "@/styles/sectionClasses";
import { ABOUT_HERO_SUB } from "@/constant/aboutData";

const INTRO = "animate-[intro_1000ms_var(--ease-out)_both]";

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "About" },
];

const AboutHero: React.FC = () => (
  <PageHeroField id="about" labelledBy="ahero-title">
    <div className={`${CONTAINER} relative z-1 flex flex-col items-center text-center`}>
      <Breadcrumbs items={CRUMBS} className={`${INTRO} [animation-delay:60ms]`} />
      <h1
        id="ahero-title"
        className={`${INTRO} mt-5 max-w-[14em] ${HERO_H1_SIZE} font-semibold leading-[1.02] tracking-[-0.05em] text-ink [text-wrap:balance] [animation-delay:180ms]`}
      >
        About Owners <HoverWord>Universe</HoverWord>
      </h1>
      <p
        className={`${INTRO} mt-6 max-w-[22em] text-[clamp(22px,2.4vw,32px)] font-medium leading-[1.3] tracking-[-0.035em] text-[#4a4a47] [text-wrap:pretty] [animation-delay:300ms]`}
      >
        {ABOUT_HERO_SUB}
      </p>
    </div>
  </PageHeroField>
);

export default AboutHero;
