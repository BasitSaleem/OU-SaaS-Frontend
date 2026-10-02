import Image from "next/image";
import HeroBarsChart from "./HeroBarsChart";
import HeroNodeMetric from "./HeroNodeMetric";
import HeroNodeRows from "./HeroNodeRows";
import { HERO_INVENTORY_NODE } from "@/constant/heroData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import { NODE_BASE, NODE_HEAD, NODE_MOBILE_CONNECTOR, NODE_ROLE, NODE_ROLE_DOT } from "@/styles/heroStageClasses";

const HeroStageNodeInventory: React.FC = () => (
  <article
    className={`${NODE_BASE} ${NODE_MOBILE_CONNECTOR} top-[calc(60*var(--u))] left-[calc(840*var(--u))] flex h-[calc(284*var(--u))] w-[calc(340*var(--u))] flex-col gap-[calc(12*var(--u))]`}
    style={
      {
        "--tone-rgb": "121 92 245",
        "--tone-ink": "#5b3fd9",
        transform: "translate3d(calc((1 - var(--b)) * 70 * var(--u)), 0, 0)",
        opacity: "calc(0.35 + var(--b) * 0.65)",
      } as React.CSSProperties
    }
  >
    <header className={NODE_HEAD}>
      <Image src={PRODUCT_LOGOS.inventory} alt="" className="h-[calc(30*var(--u))] w-auto" />
      <span className={NODE_ROLE}>
        <i className={NODE_ROLE_DOT} />
        {HERO_INVENTORY_NODE.role}
      </span>
    </header>
    <HeroNodeMetric
      label={HERO_INVENTORY_NODE.metricLabel}
      value={HERO_INVENTORY_NODE.metricValue}
      delta={HERO_INVENTORY_NODE.metricDelta}
    />
    <HeroBarsChart
      heights={HERO_INVENTORY_NODE.bars}
      labels={HERO_INVENTORY_NODE.barLabels}
      activeIndex={HERO_INVENTORY_NODE.barActiveIndex}
    />
    <HeroNodeRows rows={HERO_INVENTORY_NODE.rows} />
  </article>
);

export default HeroStageNodeInventory;
