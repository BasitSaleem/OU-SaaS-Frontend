import LegalHero from "@/components/pages/legal/LegalHero";
import LegalLayout from "@/components/pages/legal/LegalLayout";
import LegalNav from "@/components/pages/legal/LegalNav";
import LegalContentSection from "@/components/pages/legal/LegalContentSection";
import { PRIVACY_SECTIONS, PRIVACY_SECTION_IDS, PRIVACY_CONTENT } from "@/constant/legal/privacyData";

const Page = () => (
  <>
    <LegalHero title="Privacy Policy" updatedDate="[Date]" />
    <LegalLayout nav={<LegalNav sections={PRIVACY_SECTIONS} sectionIds={PRIVACY_SECTION_IDS} />}>
      {PRIVACY_SECTIONS.map((section, i) => (
        <LegalContentSection
          key={section.id}
          id={section.id}
          number={i + 1}
          title={section.label}
          blocks={PRIVACY_CONTENT[section.id]}
        />
      ))}
    </LegalLayout>
  </>
);

export default Page;
