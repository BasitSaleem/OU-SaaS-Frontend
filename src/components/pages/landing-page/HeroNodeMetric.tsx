import HeroNodeIcon from "./HeroNodeIcons";
import { NODE_LABEL, NODE_METRIC, NODE_VALUE, NODE_VALUE_DELTA } from "@/styles/heroStageClasses";

interface HeroNodeMetricProps {
  label: string;
  value: string;
  delta: string;
}

/** Label, big number and the green "trending up" delta pill used by the Pulse and Inventory nodes. */
const HeroNodeMetric: React.FC<HeroNodeMetricProps> = ({ label, value, delta }) => (
  <div className={NODE_METRIC}>
    <span className={NODE_LABEL}>{label}</span>
    <span className={NODE_VALUE}>
      {value}
      <em className={NODE_VALUE_DELTA}>
        <HeroNodeIcon name="trend" className="[height:calc(12*var(--u))] [width:calc(12*var(--u))]" />
        {delta}
      </em>
    </span>
  </div>
);

export default HeroNodeMetric;
