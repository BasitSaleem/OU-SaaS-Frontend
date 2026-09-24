"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ABOUT_STORY_PARAGRAPHS, ABOUT_STORY_TITLE } from "@/constant/aboutData";

const AboutStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(sectionRef);

  return (
    <section className="py-[60px]">
      <Container>
        <div
          ref={sectionRef}
          style={reveal.style}
          className={`${reveal.className} max-w-[720px]`}
        >
          <MainHeading
            as="h2"
            className="mb-6 !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.02em]"
          >
            {ABOUT_STORY_TITLE}
          </MainHeading>
          {ABOUT_STORY_PARAGRAPHS.map((paragraph, i) => (
            <Paragraph
              key={i}
              className="mb-[18px] !text-[15px] lg:!text-[15px] !font-normal !leading-[1.75] !text-g600 last:mb-0"
            >
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
