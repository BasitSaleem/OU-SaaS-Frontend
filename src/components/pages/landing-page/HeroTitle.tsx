"use client";

import { useHoverWordSpotlight } from "@/hooks/useHoverWordSpotlight";

const HeroTitle: React.FC = () => {
  const hoverwordRef = useHoverWordSpotlight<HTMLSpanElement>();

  return (
    <h1
      id="hero-title"
      className="mt-5 flex flex-col text-[clamp(44px,7.1vw,104px)] leading-[0.96] font-semibold tracking-[-0.058em]"
    >
      <span className="animate-[intro_1100ms_var(--ease-out)_both] [animation-delay:160ms]">
        Business{" "}
        <span
          ref={hoverwordRef}
          className="hoverword [--mx:50%] [--my:50%] px-[0.12em] -mx-[0.12em] pt-[0.04em] pb-[0.1em] -my-[0.04em] -mb-[0.1em] text-transparent [-webkit-background-clip:text] [background-clip:text] [background-image:radial-gradient(circle_var(--spot)_at_var(--mx)_var(--my),#f95c5b_0%,#c85a9c_30%,#7a5cf5_62%,rgba(122,92,245,0)_100%),linear-gradient(var(--ink),var(--ink))] [transition:--spot_600ms_var(--ease-out)] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]"
        >
          Software
        </span>
      </span>
      <span className="animate-[intro_1100ms_var(--ease-out)_both] text-neutral-2 [animation-delay:240ms]">
        for Service Industries
      </span>
    </h1>
  );
};

export default HeroTitle;
