"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ABOUT_VALUES, ABOUT_VALUES_TITLE } from "@/constant/aboutData";

const AboutValues: React.FC = () => {
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
          <MainHeading as="h2" className="mb-[clamp(32px,4vw,48px)] !text-[32px] md:!text-[36px] lg:!text-[48px] !font-semibold !tracking-[-0.02em]">
            {ABOUT_VALUES_TITLE}
          </MainHeading>
          <div className="flex flex-col gap-[clamp(28px,3vw,40px)]">
            {ABOUT_VALUES.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-[56px_1fr] items-start gap-5"
              >
                <div className="font-heading text-[28px] font-bold leading-[1.2] text-purple">
                  {item.num}
                </div>
                <div>
                  <CardHeading className="mb-1.5 !text-[1.0625rem] lg:!text-[1.0625rem] xl:!text-[1.0625rem] !font-semibold !tracking-[-0.01em]">
                    {item.title}
                  </CardHeading>
                  <CardDesc className="!text-[15px] !leading-[1.65]">
                    {item.desc}
                  </CardDesc>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutValues;
