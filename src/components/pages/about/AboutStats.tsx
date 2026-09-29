"use client";

import { useRevealOnce } from "@/hooks/useRevealOnce";
import { CONTAINER } from "@/styles/sectionClasses";
import { ABOUT_STATS, ABOUT_STATS_TITLE } from "@/constant/aboutData";
import AboutStatCard from "./AboutStatCard";

// Stagger constants — mirrors Reveal component, applied directly to <ul> to avoid
// a <div> wrapper that would break ul>li semantics.
const STAGGER_BASE =
  "[&>*]:transition-[opacity,translate] [&>*]:duration-[900ms] [&>*]:ease-[cubic-bezier(0.16,1,0.3,1)] [&>*:nth-child(2)]:delay-[90ms] [&>*:nth-child(3)]:delay-[180ms] [&>*:nth-child(4)]:delay-[270ms] motion-reduce:[&>*]:translate-y-0! motion-reduce:[&>*]:opacity-100!";
const STAGGER_OUT = "[&>*]:translate-y-10 [&>*]:opacity-0";
const STAGGER_IN = "[&>*]:translate-y-0 [&>*]:opacity-100";

const AboutStats: React.FC = () => {
  const { ref, isIn } = useRevealOnce<HTMLUListElement>();

  return (
    <section
      aria-labelledby="anumbers-title"
      className="rounded-[var(--r-xl)] bg-ink py-[clamp(80px,10vw,128px)] text-paper"
    >
      <div className={CONTAINER}>
        <h2
          id="anumbers-title"
          className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-paper [text-wrap:balance]"
        >
          {ABOUT_STATS_TITLE}
        </h2>

        <ul
          ref={ref}
          className={`m-0 mt-[clamp(40px,5vw,64px)] grid list-none grid-cols-4 p-0 max-[900px]:grid-cols-2 max-[900px]:gap-y-9 ${STAGGER_BASE} ${isIn ? STAGGER_IN : STAGGER_OUT}`}
        >
          {ABOUT_STATS.map((stat, i) => (
            <AboutStatCard key={stat.label} stat={stat} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutStats;
