import DashboardSidebar from "./DashboardSidebar";
import DashboardTopBar from "./DashboardTopBar";
import DashboardKpis from "./DashboardKpis";
import PulsePipelineBoard from "./PulsePipelineBoard";
import { PULSE_DASHBOARD } from "@/constant/productsStoryData";
import { DASH_BASE, DASH_MAIN, DASH_TITLE } from "@/styles/dashboardClasses";

const PulseDashboard: React.FC = () => (
  <div className={DASH_BASE} style={{ "--accent": "var(--coral)" } as React.CSSProperties}>
    <DashboardSidebar productKey="pulse" navItems={PULSE_DASHBOARD.navItems} />
    <div className={DASH_MAIN}>
      <DashboardTopBar />
      <h4 className={DASH_TITLE}>{PULSE_DASHBOARD.title}</h4>
      <DashboardKpis kpis={PULSE_DASHBOARD.kpis} />
      <PulsePipelineBoard />
    </div>
  </div>
);

export default PulseDashboard;
