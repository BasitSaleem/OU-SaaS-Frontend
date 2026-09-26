import HeroNodeIcon from "./HeroNodeIcons";
import { HERO_FUTURE_NODE } from "@/constant/heroData";
import { NODE_MOBILE_CONNECTOR } from "@/styles/heroStageClasses";

const HeroStageNodeFuture: React.FC = () => (
  <article
    className={`${NODE_MOBILE_CONNECTOR} absolute top-[calc(452*var(--u))] left-[calc(480*var(--u))] flex h-[calc(84*var(--u))] w-[calc(240*var(--u))] items-center gap-[calc(14*var(--u))] border border-dashed border-[#c9c9c4] bg-white/50 leading-[1.4] text-ink [border-radius:calc(18*var(--u))] [padding:calc(20*var(--u))] [font-size:calc(13*var(--u))] max-[900px]:!relative max-[900px]:!inset-auto max-[900px]:!h-auto max-[900px]:!w-full max-[900px]:!opacity-100 max-[900px]:![transform:none]`}
    style={{ opacity: "calc(0.25 + var(--c) * 0.75)", transform: "translate3d(0, calc((1 - var(--c)) * 16 * var(--u)), 0)" }}
  >
    <span className="grid h-[calc(36*var(--u))] w-[calc(36*var(--u))] shrink-0 place-items-center rounded-full border border-dashed border-[#b9b9b4] text-neutral">
      <HeroNodeIcon name="plus" className="[height:calc(16*var(--u))] [width:calc(16*var(--u))]" />
    </span>
    <span>
      <strong className="block text-[calc(14*var(--u))] font-semibold">{HERO_FUTURE_NODE.title}</strong>
      <small className="block text-[calc(12*var(--u))] text-neutral">{HERO_FUTURE_NODE.subtitle}</small>
    </span>
  </article>
);

export default HeroStageNodeFuture;
