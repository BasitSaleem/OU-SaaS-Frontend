import Image from "next/image";
import { HERO_HUB_NODE } from "@/constant/heroData";
import { NODE_BASE } from "@/styles/heroStageClasses";
import logo from "../../../../public/assets/logos/owners-universe.svg";

const HeroStageNodeHub: React.FC = () => (
  <article
    className={`${NODE_BASE} left-[calc(470*var(--u))] top-[calc(160*var(--u))] flex h-[calc(170*var(--u))] w-[calc(260*var(--u))] flex-col justify-between border-black/10 [box-shadow:inset_0_1px_0_rgb(255_255_255/0.9),0_0_0_calc(6*var(--u))_rgb(255_255_255/0.55),0_0_0_calc(7*var(--u))_rgb(11_11_11/0.05),0_calc(30*var(--u))_calc(70*var(--u))_calc(-24*var(--u))_rgb(11_11_11/0.26)] max-[900px]:order-[-1] max-[900px]:gap-4`}
  >
    <Image src={logo} alt="" className="h-[calc(38*var(--u))] w-auto" />
    <div className="flex items-center gap-[calc(10*var(--u))]">
      <span className="relative grid h-[calc(34*var(--u))] w-[calc(34*var(--u))] shrink-0 place-items-center rounded-full bg-ink text-[calc(11*var(--u))] font-semibold tracking-[0.02em] text-paper">
        {HERO_HUB_NODE.avatarInitials}
        <i className="absolute rounded-full bg-[#12a37a] [box-shadow:0_0_0_calc(2*var(--u))_#fff] [bottom:calc(-1*var(--u))] [height:calc(10*var(--u))] [right:calc(-1*var(--u))] [width:calc(10*var(--u))]" />
      </span>
      <span>
        <strong className="block text-[calc(14*var(--u))] font-semibold">{HERO_HUB_NODE.orgName}</strong>
        <small className="block text-[calc(11.5*var(--u))] text-neutral">{HERO_HUB_NODE.orgSubtitle}</small>
      </span>
    </div>
    <div className="flex items-center justify-between border-t border-line pt-[calc(10*var(--u))] text-[calc(11.5*var(--u))] text-neutral">
      <span
        className="inline-flex items-center gap-[calc(6*var(--u))] rounded-full bg-[rgb(15_122_90/0.09)] font-semibold text-[#0f7a5a] [padding:calc(3*var(--u))_calc(9*var(--u))_calc(3*var(--u))_calc(8*var(--u))]"
        style={{ opacity: "calc(0.25 + var(--c) * 0.75)" }}
      >
        <i className="relative rounded-full bg-[#12a37a] after:absolute after:inset-0 after:animate-[spark-ping_2400ms_var(--ease-out)_1200ms_infinite] after:rounded-full after:bg-[#12a37a] after:content-[''] [height:calc(6*var(--u))] [width:calc(6*var(--u))]" />
        {HERO_HUB_NODE.statusLabel}
      </span>
      <span>{HERO_HUB_NODE.productsActive}</span>
    </div>
  </article>
);

export default HeroStageNodeHub;
