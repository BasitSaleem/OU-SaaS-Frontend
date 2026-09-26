import Image from "next/image";
import HeroNodeIcon from "./HeroNodeIcons";
import { HERO_HUB_NODE } from "@/constant/heroData";
import { NODE_BASE } from "@/styles/heroStageClasses";
import logo from "../../../../public/assets/logos/owners-universe.svg";

const HeroStageNodeHub: React.FC = () => (
  <article
    className={`${NODE_BASE} left-[calc(470*var(--u))] top-[calc(160*var(--u))] flex h-[calc(170*var(--u))] w-[calc(260*var(--u))] flex-col justify-between border-black/[0.12] [box-shadow:0_0_0_calc(6*var(--u))_rgba(11,11,11,0.03),0_calc(30*var(--u))_calc(70*var(--u))_calc(-24*var(--u))_rgba(11,11,11,0.28)] max-[900px]:order-[-1] max-[900px]:gap-4`}
  >
    <Image src={logo} alt="" className="h-[calc(38*var(--u))] w-auto" />
    <div className="flex items-center gap-[calc(10*var(--u))]">
      <span className="grid h-[calc(34*var(--u))] w-[calc(34*var(--u))] shrink-0 place-items-center rounded-full bg-ink text-[calc(11*var(--u))] font-semibold tracking-[0.02em] text-paper">
        {HERO_HUB_NODE.avatarInitials}
      </span>
      <span>
        <strong className="block text-[calc(14*var(--u))] font-semibold">{HERO_HUB_NODE.orgName}</strong>
        <small className="block text-[calc(11.5*var(--u))] text-neutral">{HERO_HUB_NODE.orgSubtitle}</small>
      </span>
    </div>
    <div className="flex items-center justify-between border-t border-line pt-[calc(10*var(--u))] text-[calc(11.5*var(--u))] text-neutral">
      <span
        className="inline-flex items-center gap-[calc(4*var(--u))] rounded-full bg-ink font-medium text-paper [padding:calc(3*var(--u))_calc(9*var(--u))_calc(3*var(--u))_calc(7*var(--u))]"
        style={{ opacity: "calc(0.25 + var(--c) * 0.75)" }}
      >
        <HeroNodeIcon name="check" className="[height:calc(12*var(--u))] [width:calc(12*var(--u))]" />
        {HERO_HUB_NODE.statusLabel}
      </span>
      <span>{HERO_HUB_NODE.productsActive}</span>
    </div>
  </article>
);

export default HeroStageNodeHub;
