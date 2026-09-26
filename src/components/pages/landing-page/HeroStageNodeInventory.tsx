import Image from "next/image";
import clsx from "clsx";
import HeroBarsChart from "./HeroBarsChart";
import HeroNodeIcon from "./HeroNodeIcons";
import { HERO_INVENTORY_NODE } from "@/constant/heroData";
import { PRODUCT_LOGOS } from "@/constant/productLogos";
import { NODE_BASE, NODE_HEAD, NODE_LABEL, NODE_METRIC, NODE_MOBILE_CONNECTOR, NODE_ROLE, NODE_ROWS, NODE_ROW_ICON, NODE_ROW_ITEM, NODE_VALUE, NODE_VALUE_DELTA } from "@/styles/heroStageClasses";

const HeroStageNodeInventory: React.FC = () => (
  <article
    className={`${NODE_BASE} ${NODE_MOBILE_CONNECTOR} top-[calc(60*var(--u))] left-[calc(840*var(--u))] flex h-[calc(272*var(--u))] w-[calc(340*var(--u))] flex-col gap-[calc(12*var(--u))]`}
    style={{ transform: "translate3d(calc((1 - var(--b)) * 70 * var(--u)), 0, 0)", opacity: "calc(0.35 + var(--b) * 0.65)" }}
  >
    <header className={NODE_HEAD}>
      <Image src={PRODUCT_LOGOS.inventory} alt="" className="h-[calc(30*var(--u))] w-auto" />
      <span className={NODE_ROLE}>{HERO_INVENTORY_NODE.role}</span>
    </header>
    <div className={NODE_METRIC}>
      <span className={NODE_LABEL}>{HERO_INVENTORY_NODE.metricLabel}</span>
      <span className={NODE_VALUE}>
        {HERO_INVENTORY_NODE.metricValue} <em className={NODE_VALUE_DELTA}>{HERO_INVENTORY_NODE.metricDelta}</em>
      </span>
    </div>
    <HeroBarsChart heights={HERO_INVENTORY_NODE.bars} />
    <ul className={NODE_ROWS}>
      {HERO_INVENTORY_NODE.rows.map((row) => (
        <li key={row.text} className={NODE_ROW_ITEM}>
          <HeroNodeIcon name={row.icon} className={clsx(NODE_ROW_ICON, row.warn && "!text-coral")} />
          {row.text}
        </li>
      ))}
    </ul>
  </article>
);

export default HeroStageNodeInventory;
