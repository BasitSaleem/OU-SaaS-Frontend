import LegalContentBlock from "./LegalContentBlock";
import type { ContentBlock } from "@/constant/legal/legalTypes";

interface LegalContentSectionProps {
  id: string;
  number: number;
  title: string;
  blocks: ContentBlock[];
  isFirst?: boolean;
}

const LegalContentSection: React.FC<LegalContentSectionProps> = ({ id, number, title, blocks, isFirst }) => (
  <section
    id={id}
    className={`scroll-mt-[110px] ${
      isFirst ? "mt-0 pt-0 border-t-0" : "mt-[clamp(48px,5vw,64px)] pt-[clamp(48px,5vw,64px)] border-t border-[#e4e4e0]"
    }`}
    aria-labelledby={`${id}-h`}
  >
    <h2
      id={`${id}-h`}
      className="mb-5 text-[clamp(22px,2vw,26px)] font-semibold leading-[1.25] tracking-[-0.025em] text-[#0b0b0b]"
    >
      <span className="mr-1 tabular-nums text-[#9a9a97]">{number}.</span> {title}
    </h2>
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => (
        <LegalContentBlock key={i} block={block} />
      ))}
    </div>
  </section>
);

export default LegalContentSection;
