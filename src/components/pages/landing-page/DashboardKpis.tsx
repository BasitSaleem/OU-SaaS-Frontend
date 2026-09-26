import { DASH_KPI, DASH_KPI_DELTA, DASH_KPI_LABEL, DASH_KPI_VALUE, DASH_KPIS } from "@/styles/dashboardClasses";

interface DashboardKpisProps {
  kpis: { label: string; value: string; delta?: string }[];
}

const DashboardKpis: React.FC<DashboardKpisProps> = ({ kpis }) => (
  <div className={DASH_KPIS}>
    {kpis.map((kpi, i) => (
      <div key={kpi.label} className={DASH_KPI}>
        <span className={DASH_KPI_LABEL}>{kpi.label}</span>
        <strong className={DASH_KPI_VALUE}>{kpi.value}</strong>
        {kpi.delta && <em className={i === 0 ? "not-italic text-[#0f7a5a] [font-size:calc(10*var(--u))]" : DASH_KPI_DELTA}>{kpi.delta}</em>}
      </div>
    ))}
  </div>
);

export default DashboardKpis;
