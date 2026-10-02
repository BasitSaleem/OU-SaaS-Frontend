interface HeroBarsChartProps {
  heights: number[];
  labels: string[];
  /** Index of the highlighted (current-day) bar. */
  activeIndex: number;
}

const HeroBarsChart: React.FC<HeroBarsChartProps> = ({ heights, labels, activeIndex }) => (
  <div className="flex items-stretch gap-[calc(8*var(--u))] [height:calc(56*var(--u))]" aria-hidden>
    {heights.map((h, i) => {
      const active = i === activeIndex;
      return (
        <span key={i} className="flex flex-1 flex-col items-center justify-end gap-[calc(5*var(--u))]">
          <b
            className={`w-full origin-bottom rounded-[calc(6*var(--u))] ${
              active
                ? "[background-image:linear-gradient(180deg,#8f76ff,var(--inventory))] shadow-[0_calc(6*var(--u))_calc(14*var(--u))_calc(-6*var(--u))_rgb(121_92_245/0.7)]"
                : "bg-purple/[0.14]"
            }`}
            style={{ height: `calc(${h} * (100% - 16 * var(--u)))`, transform: `scaleY(clamp(0.08, calc(var(--b) * 1.4 - ${i} * 0.06), 1))` }}
          />
          <small className={`text-[calc(10*var(--u))] leading-none font-medium ${active ? "text-[#5b3fd9]" : "text-neutral-2"}`}>
            {labels[i]}
          </small>
        </span>
      );
    })}
  </div>
);

export default HeroBarsChart;
