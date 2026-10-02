import PageHeroField from "@/components/common-components/PageHeroField";
import Breadcrumbs from "@/components/common-components/Breadcrumbs";
import HoverWord from "@/components/common-components/HoverWord";
import { CONTAINER, HERO_H1_SIZE } from "@/styles/sectionClasses";
import { CONTACT_HERO_SUB } from "@/constant/contactData";

const INTRO = "animate-[intro_1000ms_var(--ease-out)_both]";

const CRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

const ContactHero: React.FC = () => (
  <PageHeroField id="contact" labelledBy="chero-title">
    <div className={`${CONTAINER} relative z-1 flex flex-col items-center text-center`}>
      <Breadcrumbs items={CRUMBS} className={`${INTRO} [animation-delay:60ms]`} />
      <h1
        id="chero-title"
        className={`${INTRO} mt-5 max-w-[14em] ${HERO_H1_SIZE} font-semibold leading-[1.02] tracking-[-0.05em] text-ink [text-wrap:balance] [animation-delay:180ms]`}
      >
        Contact <HoverWord>Us</HoverWord>
      </h1>
      <p
        className={`${INTRO} mt-6 max-w-[28em] text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.35] tracking-[-0.03em] text-[#4a4a47] [text-wrap:pretty] [animation-delay:300ms]`}
      >
        {CONTACT_HERO_SUB}
      </p>
    </div>
  </PageHeroField>
);

export default ContactHero;
