"use client";

import { useEffect, useRef } from "react";
import { CONTAINER } from "@/styles/sectionClasses";
import { ABOUT_STORY_PARAGRAPHS, ABOUT_STORY_TITLE } from "@/constant/aboutData";

const AboutStory: React.FC = () => {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const paragraphs = Array.from(body.querySelectorAll("p"));

    if (reduceMotion) {
      paragraphs.forEach((p) => p.classList.add("is-read"));
      return;
    }

    let raf = 0;
    const check = () => {
      raf = 0;
      const threshold = window.innerHeight * 0.62;
      paragraphs.forEach((p) => {
        if (p.getBoundingClientRect().top < threshold) {
          p.classList.add("is-read");
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-labelledby="astory-title"
      className="pt-[clamp(40px,6vw,80px)] pb-[clamp(96px,12vw,150px)]"
    >
      <div
        className={`${CONTAINER} grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] items-start gap-[clamp(32px,6vw,96px)] max-[900px]:grid-cols-1`}
      >
        {/* Sticky heading — un-stickied below 900 px */}
        <div className="sticky top-[120px] max-[900px]:static">
          <h2
            id="astory-title"
            className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink [text-wrap:balance]"
          >
            {ABOUT_STORY_TITLE}
          </h2>
        </div>

        {/* Paragraphs — lightup when their top crosses 62% vh */}
        <div ref={bodyRef} className="flex flex-col gap-7">
          {ABOUT_STORY_PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              className="text-[clamp(19px,1.7vw,24px)] font-medium leading-[1.55] tracking-[-0.02em] text-[#aeaea9] [text-wrap:pretty] transition-colors duration-[900ms] ease-[var(--ease-out)] [&.is-read]:text-ink"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
