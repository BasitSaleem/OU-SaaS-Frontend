import LegalContentBlock from "./LegalContentBlock";
import MainHeading from "@/components/pages/typography/MainHeading";
import type { ContentBlock } from "@/constant/legal/legalTypes";

interface LegalContentSectionProps {
  id: string;
  number: number;
  title: string;
  blocks: ContentBlock[];
}

const LegalContentSection: React.FC<LegalContentSectionProps> = ({ id, number, title, blocks }) => (
  <section id={id} className="mb-11 scroll-mt-[calc(var(--nav-h)+32px)]">
    <MainHeading className="mb-[18px] !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.015em]">
      {number}. {title}
    </MainHeading>
    {blocks.map((block, i) => (
      <LegalContentBlock key={i} block={block} />
    ))}
  </section>
);

export default LegalContentSection;
