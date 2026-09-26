import DashboardIcon from "./DashboardIcons";
import { DASH_SEARCH, DASH_TOP } from "@/styles/dashboardClasses";

const DashboardTopBar: React.FC = () => (
  <div className={DASH_TOP}>
    <span className={DASH_SEARCH}>
      <DashboardIcon name="search" className="[height:calc(12*var(--u))] [width:calc(12*var(--u))]" /> Search
    </span>
    <DashboardIcon name="bell" className="[height:calc(15*var(--u))] [width:calc(15*var(--u))]" />
  </div>
);

export default DashboardTopBar;
