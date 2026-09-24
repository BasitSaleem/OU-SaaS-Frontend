import LegalHero from "@/components/pages/legal/LegalHero";
import LegalLayout from "@/components/pages/legal/LegalLayout";
import LegalNav from "@/components/pages/legal/LegalNav";
import LegalContentSection from "@/components/pages/legal/LegalContentSection";
import { TERMS_SECTIONS, TERMS_SECTION_IDS, TERMS_CONTENT } from "@/constant/legal/termsData";

const Page = () => (
  <>
    <LegalHero title="Terms of Service" updatedDate="[Date]" />
    <LegalLayout nav={<LegalNav sections={TERMS_SECTIONS} sectionIds={TERMS_SECTION_IDS} />}>
      {TERMS_SECTIONS.map((section, i) => (
        <LegalContentSection
          key={section.id}
          id={section.id}
          number={i + 1}
          title={TERMS_CONTENT[section.id].title}
          blocks={TERMS_CONTENT[section.id].blocks}
        />
      ))}
    </LegalLayout>
  </>
);

export default Page;
