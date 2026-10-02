import clsx from "clsx";
import HeroNodeIcon, { type HeroNodeIconKey } from "./HeroNodeIcons";
import { NODE_ROWS, NODE_ROW_ICON_BOX, NODE_ROW_ICON_BOX_WARN, NODE_ROW_ITEM } from "@/styles/heroStageClasses";

interface HeroNodeRow {
  text: string;
  icon: HeroNodeIconKey;
  warn?: boolean;
}

/** Footer list of a stage node: a tinted icon tile + one line of text per row. */
const HeroNodeRows: React.FC<{ rows: HeroNodeRow[] }> = ({ rows }) => (
  <ul className={NODE_ROWS}>
    {rows.map((row) => (
      <li key={row.text} className={NODE_ROW_ITEM}>
        <span className={clsx(NODE_ROW_ICON_BOX, row.warn && NODE_ROW_ICON_BOX_WARN)}>
          <HeroNodeIcon name={row.icon} className="[height:calc(13*var(--u))] [width:calc(13*var(--u))]" />
        </span>
        {row.text}
      </li>
    ))}
  </ul>
);

export default HeroNodeRows;
