import HeroTitle from "./HeroTitle";
import HeroCtas from "./HeroCtas";
import { HERO_BODY, HERO_KICKER } from "@/constant/heroData";

const HeroCopy: React.FC = () => (
  <div
    className="relative z-2 flex flex-col items-center px-[var(--gutter)] pt-[clamp(112px,17vh,168px)] text-center [opacity:clamp(0,calc(1_-_var(--a)*1.35),1)] [transform:translate3d(0,calc(var(--a)*-90px),0)_scale(calc(1_-_var(--a)*0.05))] [will-change:transform,opacity] max-[900px]:pt-32 max-[900px]:opacity-100 max-[900px]:[transform:none]"
  >
    <p
      className="animate-[intro_1100ms_var(--ease-out)_both] text-[clamp(15px,1.2vw,17px)] leading-[1.3] font-medium tracking-[-0.01em] text-neutral [animation-delay:80ms] max-[900px]:max-w-full max-[900px]:text-sm"
    >
      {HERO_KICKER}
    </p>
    <HeroTitle />
    <p
      className="mt-7 max-w-[610px] animate-[intro_1100ms_var(--ease-out)_both] text-[clamp(17px,1.3vw,19px)] leading-[1.6] text-neutral [animation-delay:340ms]"
      style={{ textWrap: "pretty" }}
    >
      {HERO_BODY}
    </p>
    <HeroCtas />
  </div>
);

export default HeroCopy;
