const HeroBarsChart: React.FC<{ heights: number[] }> = ({ heights }) => (
  <div className="flex items-end gap-[calc(8*var(--u))] [height:calc(56*var(--u))]" aria-hidden>
    {heights.map((h, i) => (
      <span
        key={i}
        className={`flex-1 origin-bottom rounded-t-[calc(4*var(--u))] ${i === 5 ? "bg-purple" : "bg-purple/[0.18]"}`}
        style={{ height: `${h * 100}%`, transform: `scaleY(clamp(0.08, calc(var(--b) * 1.4 - ${i} * 0.06), 1))` }}
      />
    ))}
  </div>
);

export default HeroBarsChart;
