"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AboutStatCard from "./AboutStatCard";
import { ABOUT_STATS, ABOUT_STATS_TITLE } from "@/constant/aboutData";

const AboutStats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(sectionRef);

  return (
    <section className="border-t border-g200 py-[60px]">
      <Container>
        <div
          ref={sectionRef}
          style={reveal.style}
          className={reveal.className}
        >
          <MainHeading as="h2" className="mb-[clamp(28px,3vw,40px)] !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.02em]">
            {ABOUT_STATS_TITLE}
          </MainHeading>
          <div className="grid grid-cols-4 gap-[clamp(16px,2vw,28px)] max-md:grid-cols-2">
            {ABOUT_STATS.map((stat) => (
              <AboutStatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStats;
