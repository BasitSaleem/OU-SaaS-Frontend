import Image from "next/image";
import HeroSparkline from "./HeroSparkline";
import HeroNodeMetric from "./HeroNodeMetric";
import HeroNodeRows from "./HeroNodeRows";
import { HERO_PULSE_NODE } from "@/constant/heroData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import { NODE_BASE, NODE_HEAD, NODE_MOBILE_CONNECTOR, NODE_ROLE, NODE_ROLE_DOT } from "@/styles/heroStageClasses";

const HeroStageNodePulse: React.FC = () => (
  <article
    className={`${NODE_BASE} ${NODE_MOBILE_CONNECTOR} top-[calc(60*var(--u))] left-[calc(20*var(--u))] flex h-[calc(284*var(--u))] w-[calc(340*var(--u))] flex-col gap-[calc(12*var(--u))]`}
    style={
      {
        "--tone-rgb": "249 92 91",
        "--tone-ink": "rgb(249 92 91)",
        transform: "translate3d(calc((1 - var(--b)) * -70 * var(--u)), 0, 0)",
        opacity: "calc(0.35 + var(--b) * 0.65)",
      } as React.CSSProperties
    }
  >
    <header className={NODE_HEAD}>
      <Image src={PRODUCT_LOGOS.pulse} alt="" className="h-[calc(26*var(--u))] w-auto" />
      <span className={NODE_ROLE}>
        <i className={NODE_ROLE_DOT} />
        {HERO_PULSE_NODE.role}
      </span>
    </header>
    <HeroNodeMetric label={HERO_PULSE_NODE.metricLabel} value={HERO_PULSE_NODE.metricValue} delta={HERO_PULSE_NODE.metricDelta} />
    <HeroSparkline linePoints={HERO_PULSE_NODE.sparkLine} />
    <HeroNodeRows rows={HERO_PULSE_NODE.rows} />
  </article>
);

export default HeroStageNodePulse;
