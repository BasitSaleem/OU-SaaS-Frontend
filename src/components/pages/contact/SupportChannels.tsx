"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SupportChannelCard from "./SupportChannelCard";
import { SUPPORT_CHANNELS, SUPPORT_SECTION_SUB, SUPPORT_SECTION_TITLE } from "@/constant/contactChannelsData";

const SupportChannels: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const head = useScrollReveal(headRef);

  return (
    <section className="border-t border-g200 py-[60px]">
      <Container>
        <div ref={headRef} style={head.style} className={`${head.className} mb-[clamp(32px,4vw,48px)] max-w-[600px]`}>
          <MainHeading
            as="h2"
            className="mb-2.5 !text-[32px] md:!text-[36px] lg:!text-[48px] !leading-[1.08] !font-bold !tracking-[-0.03em]"
          >
            {SUPPORT_SECTION_TITLE}
          </MainHeading>
          <Paragraph className="!text-[15px] lg:!text-[15px] !leading-[1.6] !text-g500">{SUPPORT_SECTION_SUB}</Paragraph>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(14px,2vw,20px)] max-[900px]:mx-auto max-[900px]:max-w-[440px] max-[900px]:grid-cols-1">
          {SUPPORT_CHANNELS.map((channel, i) => (
            <SupportChannelCard key={channel.id} channel={channel} delayMs={(i + 1) * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SupportChannels;
