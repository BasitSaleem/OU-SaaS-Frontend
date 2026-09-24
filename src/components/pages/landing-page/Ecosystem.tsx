"use client";

import clsx from "clsx";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonEcoCta from "./ButtonEcoCta";
import StackCard from "./StackCard";
import { useEcosystemReveal } from "@/hooks/useEcosystemReveal";
import { useCardShuffle } from "@/hooks/useCardShuffle";
import { ECOSYSTEM_CARDS, ECOSYSTEM_INITIAL_SLOTS } from "@/constant/ecosystemData";

const CARD_IDS = ECOSYSTEM_CARDS.map((c) => c.id);
const RISEN_INDEX = { c1: 0, c2: 1, c3: 2 } as const;

const Ecosystem: React.FC = () => {
  const { sectionRef, inView, risen } = useEcosystemReveal<HTMLElement>();
  const { slots, shuffle } = useCardShuffle(CARD_IDS, ECOSYSTEM_INITIAL_SLOTS);

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative overflow-hidden bg-surface py-[60px]"
    >
      <Container className="grid grid-cols-1 items-center gap-[clamp(40px,6vw,80px)] max-[900px]:text-center lg:grid-cols-2">
        <div
          className={clsx(
            "transition-[opacity,transform] duration-[0.8s] ease-[var(--ease)]",
            inView ? "translate-y-0 opacity-100" : "translate-y-[22px] opacity-0"
          )}
        >
          <Eyebrow text="Why it works" className="mb-7" />
          <MainHeading className="mb-[22px]">Everything your business needs, in one ecosystem.</MainHeading>
          <Paragraph className="mb-9 max-w-[460px] max-[900px]:mx-auto">
            Every Owners product shares the same login, the same organization, and the same team. Add a new
            product without starting from zero — your setup carries over automatically.
          </Paragraph>
          <ButtonEcoCta />
        </div>

        <div className="relative">
          <div className="stack-wrap relative flex h-[clamp(360px,42vw,480px)] items-center justify-center [perspective:1400px] max-[900px]:mt-6 max-[900px]:h-[clamp(320px,70vw,420px)]">
            {ECOSYSTEM_CARDS.map((card) => (
              <StackCard
                key={card.id}
                card={card}
                position={slots[card.id]}
                risen={risen[RISEN_INDEX[card.id]]}
                onClick={shuffle}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ecosystem;
