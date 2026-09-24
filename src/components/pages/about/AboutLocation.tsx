"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CardHeading from "@/components/pages/typography/CardHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ABOUT_LOCATION_DESC,
  ABOUT_LOCATION_LINES,
  ABOUT_LOCATION_NAME,
  ABOUT_LOCATION_TITLE,
} from "@/constant/aboutData";

const AboutLocation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(sectionRef);

  return (
    <section className="border-t border-g200 py-[60px]">
      <Container>
        <div
          ref={sectionRef}
          style={reveal.style}
          className={`${reveal.className} max-w-[720px]`}
        >
          <MainHeading as="h2" className="mb-[18px] !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.02em]">
            {ABOUT_LOCATION_TITLE}
          </MainHeading>
          <Paragraph className="mb-3.5 !text-[15px] lg:!text-[15px] !leading-[1.7] !text-g600">
            {ABOUT_LOCATION_DESC}
          </Paragraph>
          <div className="mt-3 rounded-[16px] border border-g200 bg-white px-[30px] py-7">
            <CardHeading as="div" className="mb-2 !font-heading !text-[15px] !font-semibold !text-charcoal">
              {ABOUT_LOCATION_NAME}
            </CardHeading>
            {ABOUT_LOCATION_LINES.map((line) => (
              <Paragraph key={line} className="mb-0.5 !text-[15px] lg:!text-[15px] !leading-[1.7] !text-g600 last:mb-0">
                {line}
              </Paragraph>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutLocation;
