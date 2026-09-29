import BusLabel from "./BusLabel";
import BusCellNode from "./BusCellNode";
import BusCellNext from "./BusCellNext";
import type { BusFeatureRow as BusFeatureRowData } from "@/constant/whyData";

const BusFeatureRow: React.FC<{ row: BusFeatureRowData }> = ({ row }) => (
  <>
    <BusLabel icon={row.icon} title={row.title} />
    <BusCellNode />
    <BusCellNode />
    <BusCellNext />
  </>
);

export default BusFeatureRow;
