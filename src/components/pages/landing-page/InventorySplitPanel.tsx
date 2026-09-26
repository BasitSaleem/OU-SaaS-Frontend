import clsx from "clsx";
import { INVENTORY_DASHBOARD } from "@/constant/productsStoryData";

const STATUS_CLASS: Record<string, string> = {
  ok: "bg-paper",
  low: "bg-[#feeeee] text-coral",
  reordered: "bg-purple/[0.1] text-[#5a3fd6]",
};
const STATUS_LABEL: Record<string, string> = { ok: "In stock", low: "Low", reordered: "Reordered" };

const InventorySplitPanel: React.FC = () => (
  <div className="grid min-h-0 flex-1 grid-cols-[calc(170*var(--u))_1fr] gap-[calc(12*var(--u))]">
    <div
      aria-hidden
      className="relative flex items-end gap-[calc(6*var(--u))] rounded-[calc(10*var(--u))] border border-line [padding:calc(12*var(--u))_calc(12*var(--u))_calc(30*var(--u))]"
    >
      {INVENTORY_DASHBOARD.weekbars.map((h, i) => (
        <span
          key={i}
          className={clsx("flex-1 rounded-t-[calc(3*var(--u))]", i === 5 ? "bg-[var(--accent)]" : "bg-purple/[0.18]")}
          style={{ height: `${h * 100}%` }}
        />
      ))}
      <small className="absolute bottom-[calc(9*var(--u))] left-[calc(12*var(--u))] text-neutral [font-size:calc(10*var(--u))]">
        {INVENTORY_DASHBOARD.weekbarsCaption}
      </small>
    </div>
    <table className="w-full overflow-hidden rounded-[calc(10*var(--u))] text-[calc(10.5*var(--u))] [border-collapse:collapse] [border-style:hidden] [box-shadow:0_0_0_1px_var(--line)]">
      <thead>
        <tr>
          {["SKU", "Item", "Location", "Qty", "Status"].map((h) => (
            <th key={h} className="border-b border-line bg-[#fbfbfa] text-left font-medium text-neutral [padding:calc(8*var(--u))_calc(10*var(--u))]">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {INVENTORY_DASHBOARD.stock.map((row, i) => {
          const isLast = i === INVENTORY_DASHBOARD.stock.length - 1;
          return (
            <tr key={row.sku}>
              <td className={clsx("font-mono whitespace-nowrap text-neutral [font-size:calc(9.5*var(--u))] [padding:calc(9*var(--u))_calc(10*var(--u))]", !isLast && "border-b border-line")}>
                {row.sku}
              </td>
              <td className={clsx("whitespace-nowrap [padding:calc(9*var(--u))_calc(10*var(--u))]", !isLast && "border-b border-line")}>{row.item}</td>
              <td className={clsx("whitespace-nowrap [padding:calc(9*var(--u))_calc(10*var(--u))]", !isLast && "border-b border-line")}>{row.location}</td>
              <td className={clsx("whitespace-nowrap [padding:calc(9*var(--u))_calc(10*var(--u))]", !isLast && "border-b border-line")}>{row.qty}</td>
              <td className={clsx("whitespace-nowrap [padding:calc(9*var(--u))_calc(10*var(--u))]", !isLast && "border-b border-line")}>
                <span className={clsx("inline-block rounded-full [font-size:calc(9.5*var(--u))] [padding:calc(2*var(--u))_calc(7*var(--u))]", STATUS_CLASS[row.status])}>
                  {STATUS_LABEL[row.status]}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default InventorySplitPanel;
