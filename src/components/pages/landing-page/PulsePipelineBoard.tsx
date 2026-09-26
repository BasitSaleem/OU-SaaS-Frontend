import clsx from "clsx";
import { PULSE_DASHBOARD } from "@/constant/productsStoryData";

const PulsePipelineBoard: React.FC = () => (
  <div className="grid min-h-0 flex-1 grid-cols-4 gap-[calc(10*var(--u))]">
    {PULSE_DASHBOARD.pipeline.map((col, i) => {
      const isLast = i === PULSE_DASHBOARD.pipeline.length - 1;
      return (
        <div key={col.title} className="flex flex-col gap-[calc(6*var(--u))] rounded-[calc(10*var(--u))] bg-paper [padding:calc(8*var(--u))]">
          <span className="flex justify-between text-neutral [font-size:calc(10.5*var(--u))] [padding:calc(2*var(--u))_calc(4*var(--u))]">
            {col.title} <b className="font-medium text-ink">{col.count}</b>
          </span>
          {col.cards.map((card) => (
            <div
              key={card.title}
              className={clsx(
                "flex flex-col gap-[calc(2*var(--u))] rounded-[calc(8*var(--u))] border border-line bg-white [padding:calc(8*var(--u))]",
                isLast && "[box-shadow:inset_calc(2*var(--u))_0_0_var(--accent)]"
              )}
            >
              <strong className="font-medium [font-size:calc(11*var(--u))]">{card.title}</strong>
              <small className="text-neutral [font-size:calc(9.5*var(--u))]">{card.subtitle}</small>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

export default PulsePipelineBoard;
