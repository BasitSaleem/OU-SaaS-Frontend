"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactStepCard from "./ContactStepCard";
import {
  CONTACT_STEPS,
  CONTACT_STEPS_SUB,
  CONTACT_STEPS_TITLE,
} from "@/constant/contactStepsData";

const ContactSteps: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const head = useScrollReveal(headRef);

  return (
    <section className="border-t border-g200 py-[60px]">
      <Container>
        <div
          ref={headRef}
          style={head.style}
          className={`${head.className} mb-[clamp(32px,4vw,48px)] max-w-[600px]`}
        >
          <MainHeading
            as="h2"
            className="mb-2.5 !text-[32px] md:!text-[36px] lg:!text-[48px] !leading-[1.08] !font-bold !tracking-[-0.03em]"
          >
            {CONTACT_STEPS_TITLE}
          </MainHeading>
          <Paragraph className="!text-[15px] lg:!text-[15px] !leading-[1.6] !text-g500">
            {CONTACT_STEPS_SUB}
          </Paragraph>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(14px,2vw,20px)] max-[900px]:mx-auto max-[900px]:max-w-[440px] max-[900px]:grid-cols-1">
          {CONTACT_STEPS.map((step, i) => (
            <ContactStepCard
              key={step.step}
              step={step}
              delayMs={(i + 1) * 80}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactSteps;
