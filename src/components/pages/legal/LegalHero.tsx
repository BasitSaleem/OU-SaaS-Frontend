import PageHeroField from "@/components/common-components/PageHeroField";
import Breadcrumbs from "@/components/common-components/Breadcrumbs";
import HoverWord from "@/components/common-components/HoverWord";
import { CONTAINER, HERO_H1_SIZE } from "@/styles/sectionClasses";

const INTRO = "animate-[intro_1000ms_var(--ease-out)_both]";

interface LegalHeroProps {
  title: string;
  updatedDate: string;
}

const LegalHero: React.FC<LegalHeroProps> = ({ title, updatedDate }) => {
  const parts = title.split(" ");
  const mainWord = parts[0] || title;
  const highlightWord = parts.slice(1).join(" ") || "";

  const crumbs = [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <PageHeroField id="legal-hero" labelledBy="lhero-title">
      <div className={`${CONTAINER} relative z-1 flex flex-col items-center text-center`}>
        <Breadcrumbs items={crumbs} className={`${INTRO} [animation-delay:60ms]`} />
        <h1
          id="lhero-title"
          className={`${INTRO} mt-5 max-w-[14em] ${HERO_H1_SIZE} font-semibold leading-[1.02] tracking-[-0.05em] text-ink [text-wrap:balance] [animation-delay:180ms]`}
        >
          {mainWord} {highlightWord && <HoverWord>{highlightWord}</HoverWord>}
        </h1>
        <p
          className={`${INTRO} mt-6 text-[15px] font-normal text-[#6b6b6b] [animation-delay:300ms]`}
        >
          <span className="font-medium text-[#0b0b0b]">Last Updated:</span> {updatedDate}
        </p>
      </div>
    </PageHeroField>
  );
};

export default LegalHero;
