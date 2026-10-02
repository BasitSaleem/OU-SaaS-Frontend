import BusLabel from "./BusLabel";
import BusCellNode from "./BusCellNode";
import BusCellNext from "./BusCellNext";
import type { BusFeatureRow as BusFeatureRowData } from "@/constant/whyData";

const BusFeatureRow: React.FC<{ row: BusFeatureRowData; index: number }> = ({ row, index }) => (
  <>
    <BusLabel icon={row.icon} title={row.title} />
    <BusCellNode />
    <BusCellNode />
    <BusCellNext row={index} />
  </>
);

export default BusFeatureRow;
