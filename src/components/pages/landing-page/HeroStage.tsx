import HeroStageLinks from "./HeroStageLinks";
import HeroStageNodePulse from "./HeroStageNodePulse";
import HeroStageNodeHub from "./HeroStageNodeHub";
import HeroStageNodeInventory from "./HeroStageNodeInventory";
import HeroStageNodeFuture from "./HeroStageNodeFuture";
import HeroStageChips from "./HeroStageChips";
import { HERO_STAGE_CAPTION } from "@/constant/heroData";

const HeroStage: React.FC = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-1 flex flex-col items-center justify-center pt-16 [transform:translate3d(0,calc((1_-_var(--a))*54svh),0)] [will-change:transform] max-[900px]:static max-[900px]:inset-auto max-[900px]:px-[var(--gutter)] max-[900px]:pt-14 max-[900px]:pb-0 max-[900px]:[transform:none]"
  >
    <p className="mb-[clamp(20px,4vh,40px)] inline-flex items-center gap-3 text-[clamp(22px,2.4vw,34px)] font-semibold tracking-[-0.04em] [opacity:var(--c)] [transform:translate3d(0,calc((1_-_var(--c))*16px),0)] max-[900px]:text-[22px]">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-coral" /> {HERO_STAGE_CAPTION}
    </p>
    <div className="relative [aspect-ratio:1200/620] w-[min(1200px,92vw,calc((100svh-230px)*1.935))] animate-[stage-in_1400ms_var(--ease-out)_380ms_both] [--u:calc(100cqw/1200)] [container-type:inline-size] [transform-style:preserve-3d] [transform-origin:50%_0%] [transform:rotateX(calc((1_-_var(--a))*26deg))_scale(calc(0.86_+_var(--a)*0.14))] max-[900px]:flex max-[900px]:w-full max-[900px]:max-w-[440px] max-[900px]:flex-col max-[900px]:gap-7 max-[900px]:[--u:1px] max-[900px]:[aspect-ratio:auto] max-[900px]:[transform:none]">
      <HeroStageLinks />
      <HeroStageNodePulse />
      <HeroStageNodeHub />
      <HeroStageNodeInventory />
      <HeroStageNodeFuture />
      <HeroStageChips />
    </div>
  </div>
);

export default HeroStage;
