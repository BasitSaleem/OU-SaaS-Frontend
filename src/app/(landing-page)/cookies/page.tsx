import LegalHero from "@/components/pages/legal/LegalHero";
import LegalLayout from "@/components/pages/legal/LegalLayout";
import LegalNav from "@/components/pages/legal/LegalNav";
import LegalContentSection from "@/components/pages/legal/LegalContentSection";
import { COOKIES_SECTIONS, COOKIES_SECTION_IDS, COOKIES_CONTENT } from "@/constant/legal/cookiesData";

const Page = () => (
  <main className="min-h-screen bg-paper">
    <LegalHero title="Cookie Policy" updatedDate="September 2026" />
    <LegalLayout nav={<LegalNav sections={COOKIES_SECTIONS} sectionIds={COOKIES_SECTION_IDS} />}>
      {COOKIES_SECTIONS.map((section, i) => (
        <LegalContentSection
          key={section.id}
          id={section.id}
          number={i + 1}
          title={section.label}
          blocks={COOKIES_CONTENT[section.id]}
          isFirst={i === 0}
        />
      ))}
    </LegalLayout>
  </main>
);

export default Page;
