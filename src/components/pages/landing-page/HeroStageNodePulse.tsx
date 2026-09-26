import Image from "next/image";
import HeroSparkline from "./HeroSparkline";
import HeroNodeIcon from "./HeroNodeIcons";
import { HERO_PULSE_NODE } from "@/constant/heroData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import { NODE_BASE, NODE_HEAD, NODE_LABEL, NODE_METRIC, NODE_MOBILE_CONNECTOR, NODE_ROLE, NODE_ROWS, NODE_ROW_ICON, NODE_ROW_ITEM, NODE_VALUE, NODE_VALUE_DELTA } from "@/styles/heroStageClasses";

const HeroStageNodePulse: React.FC = () => (
  <article
    className={`${NODE_BASE} ${NODE_MOBILE_CONNECTOR} top-[calc(60*var(--u))] left-[calc(20*var(--u))] flex h-[calc(272*var(--u))] w-[calc(340*var(--u))] flex-col gap-[calc(12*var(--u))]`}
    style={{ transform: "translate3d(calc((1 - var(--b)) * -70 * var(--u)), 0, 0)", opacity: "calc(0.35 + var(--b) * 0.65)" }}
  >
    <header className={NODE_HEAD}>
      <Image src={PRODUCT_LOGOS.pulse} alt="" className="h-[calc(26*var(--u))] w-auto" />
      <span className={NODE_ROLE}>{HERO_PULSE_NODE.role}</span>
    </header>
    <div className={NODE_METRIC}>
      <span className={NODE_LABEL}>{HERO_PULSE_NODE.metricLabel}</span>
      <span className={NODE_VALUE}>
        {HERO_PULSE_NODE.metricValue} <em className={NODE_VALUE_DELTA}>{HERO_PULSE_NODE.metricDelta}</em>
      </span>
    </div>
    <HeroSparkline areaPoints={HERO_PULSE_NODE.sparkArea} linePoints={HERO_PULSE_NODE.sparkLine} />
    <ul className={NODE_ROWS}>
      {HERO_PULSE_NODE.rows.map((row) => (
        <li key={row.text} className={NODE_ROW_ITEM}>
          <HeroNodeIcon name={row.icon} className={NODE_ROW_ICON} />
          {row.text}
        </li>
      ))}
    </ul>
  </article>
);

export default HeroStageNodePulse;
