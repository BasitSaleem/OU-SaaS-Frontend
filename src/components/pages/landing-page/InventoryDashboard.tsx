import DashboardSidebar from "./DashboardSidebar";
import DashboardTopBar from "./DashboardTopBar";
import DashboardKpis from "./DashboardKpis";
import InventorySplitPanel from "./InventorySplitPanel";
import { INVENTORY_DASHBOARD } from "@/constant/productsStoryData";
import { DASH_BASE, DASH_MAIN, DASH_TITLE } from "@/styles/dashboardClasses";

const InventoryDashboard: React.FC = () => (
  <div className={DASH_BASE} style={{ "--accent": "var(--purple)" } as React.CSSProperties}>
    <DashboardSidebar productKey="inventory" navItems={INVENTORY_DASHBOARD.navItems} />
    <div className={DASH_MAIN}>
      <DashboardTopBar />
      <h4 className={DASH_TITLE}>{INVENTORY_DASHBOARD.title}</h4>
      <DashboardKpis kpis={INVENTORY_DASHBOARD.kpis} />
      <InventorySplitPanel />
    </div>
  </div>
);

export default InventoryDashboard;
