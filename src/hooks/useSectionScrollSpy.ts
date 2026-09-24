"use client";

import { useCallback, useEffect, useState } from "react";

/** Highlights the sidebar link for whichever section has scrolled past the trigger line. */
export function useSectionScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const update = () => {
      const trigger = window.innerHeight * 0.3;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= trigger) current = section.id;
      });
      setActiveId(current);
    };

    let frame: number;
    const onScroll = () => {
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return { activeId, scrollToSection };
}
