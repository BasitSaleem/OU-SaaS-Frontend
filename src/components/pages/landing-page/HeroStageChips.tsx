import { HERO_CHIPS } from "@/constant/heroData";

const CHIP_BASE =
  "absolute top-[calc(356*var(--u))] whitespace-nowrap rounded-full bg-ink font-medium text-paper [box-shadow:0_calc(10*var(--u))_calc(24*var(--u))_calc(-10*var(--u))_rgba(11,11,11,0.5)] [font-size:calc(11.5*var(--u))] [padding:calc(7*var(--u))_calc(12*var(--u))] max-[900px]:hidden";

const chipStyle: React.CSSProperties = {
  opacity: "clamp(0, calc(var(--c) * 2 - 0.4), 1)",
  transform: "translate3d(0, calc((1 - var(--c)) * 14 * var(--u)), 0)",
};

const HeroStageChips: React.FC = () => (
  <>
    <span className={`${CHIP_BASE} left-[calc(100*var(--u))]`} style={chipStyle}>
      {HERO_CHIPS.pulse}
    </span>
    <span className={`${CHIP_BASE} left-[calc(930*var(--u))]`} style={chipStyle}>
      {HERO_CHIPS.inventory}
    </span>
  </>
);

export default HeroStageChips;
