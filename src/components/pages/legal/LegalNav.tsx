"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { useSectionScrollSpy } from "@/hooks/useSectionScrollSpy";
import type { LegalSection } from "@/constant/legal/privacyData";

interface LegalNavProps {
  sections: LegalSection[];
  sectionIds: string[];
}

const LegalNav: React.FC<LegalNavProps> = ({ sections, sectionIds }) => {
  const { activeId, scrollToSection } = useSectionScrollSpy(sectionIds);
  const markRef = useRef<HTMLSpanElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!activeId || !listRef.current || !markRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`);
    if (activeEl) {
      markRef.current.style.transform = `translateY(${activeEl.offsetTop}px)`;
      markRef.current.style.height = `${activeEl.offsetHeight}px`;
    }
  }, [activeId]);

  return (
    <nav
      className="sticky top-[104px] max-h-[calc(100vh-128px)] overflow-y-auto max-[960px]:static max-[960px]:max-h-none max-[960px]:rounded-[20px] max-[960px]:border max-[960px]:border-[#e4e4e0] max-[960px]:bg-white max-[960px]:p-5"
      aria-label="On this page"
    >
      <p className="mb-3.5 text-[13px] font-medium text-[#0b0b0b]">On this page</p>
      <div className="relative pl-[18px] max-[960px]:pl-0">
        {/* Track line & Sliding red mark */}
        <span className="absolute top-0 bottom-0 left-0 w-px bg-[#e4e4e0] max-[960px]:hidden" aria-hidden />
        <span
          ref={markRef}
          className="absolute top-0 -left-[1px] w-[3px] rounded-[3px] bg-[#f95c5b] transition-[transform,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-[960px]:hidden"
          aria-hidden
        />

        <ol ref={listRef} className="m-0 flex flex-col list-none p-0 max-[960px]:grid max-[960px]:grid-cols-2 max-[960px]:gap-x-5 max-[640px]:grid-cols-1">
          {sections.map((section, index) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={clsx(
                    "flex gap-2 py-1.5 text-[14px] leading-[1.45] transition-all duration-180 hover:translate-x-0.75 hover:text-[#0b0b0b]",
                    isActive ? "font-medium text-[#0b0b0b]" : "text-[#6b6b6b]"
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className={clsx("min-w-[1.6em] tabular-nums transition-colors duration-180", isActive ? "text-[#f95c5b]" : "text-[#9a9a97]")}>
                    {index + 1}.
                  </span>
                  <span>{section.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default LegalNav;
