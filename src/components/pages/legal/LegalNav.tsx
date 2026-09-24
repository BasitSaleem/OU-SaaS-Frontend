"use client";

import clsx from "clsx";
import { useSectionScrollSpy } from "@/hooks/useSectionScrollSpy";
import type { LegalSection } from "@/constant/legal/privacyData";

interface LegalNavProps {
  sections: LegalSection[];
  sectionIds: string[];
}

const LegalNav: React.FC<LegalNavProps> = ({ sections, sectionIds }) => {
  const { activeId, scrollToSection } = useSectionScrollSpy(sectionIds);

  return (
    <nav className="sticky top-[calc(var(--nav-h)+24px)] flex flex-col gap-0.5 max-[900px]:static max-[900px]:mb-2 max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:gap-x-[18px] max-[900px]:gap-y-1.5 max-[900px]:border-b max-[900px]:border-g200 max-[900px]:pb-6">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section.id);
          }}
          className={clsx(
            "border-l-2 py-2 pl-4 text-[13.5px] transition-[color,border-color] duration-200 ease-[var(--ease)] max-[900px]:border-l-0 max-[900px]:py-1 max-[900px]:pl-0",
            activeId === section.id
              ? "border-purple font-medium text-purple"
              : "border-g200 text-g500 hover:text-charcoal"
          )}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};

export default LegalNav;
