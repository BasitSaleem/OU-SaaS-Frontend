"use client";

import HeroField from "./HeroField";
import HeroCopy from "./HeroCopy";
import HeroStage from "./HeroStage";
import HeroScrollCue from "./HeroScrollCue";
import { usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";

const Hero: React.FC = () => {
  const sectionRef = usePinnedScrollProgress<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-title"
      className="relative h-[290vh] bg-paper max-[900px]:h-auto [--a:clamp(0,calc(var(--p)/0.4),1)] [--b:clamp(0,calc((var(--p)_-_0.28)/0.34),1)] [--c:clamp(0,calc((var(--p)_-_0.58)/0.28),1)] [--p:0]"
    >
      <HeroField>
        <HeroCopy />
        <HeroStage />
        <HeroScrollCue />
      </HeroField>
    </section>
  );
};

export default Hero;
