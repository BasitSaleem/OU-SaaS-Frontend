import WhyIcon from "./WhyIcons";

const BusTileNext: React.FC = () => (
  <div
    className="relative mb-8 flex h-16 items-center justify-start gap-2.5 rounded-[14px] border border-dashed border-[#3a3a3a] px-4 text-[#a3a3a0] after:absolute after:top-full after:left-1/2 after:h-8 after:w-px after:-translate-x-1/2 after:bg-[repeating-linear-gradient(to_bottom,#3a3a3a_0_4px,transparent_4px_8px)] after:content-[''] before:absolute before:-inset-px before:rounded-[inherit] before:border before:border-coral/[0.55] before:opacity-[var(--done)] before:[box-shadow:0_0_0_4px_rgba(249,92,91,0.08)] before:content-[''] max-[640px]:h-12 max-[640px]:justify-center max-[640px]:rounded-[10px] max-[640px]:px-1.5 max-[640px]:after:h-6"
    style={{ "--done": "clamp(0, calc(var(--k) * 5 - 4), 1)" } as React.CSSProperties}
  >
    <span className="grid h-6.5 w-6.5 shrink-0 place-items-center rounded-full border border-dashed border-[#4a4a4a]">
      <WhyIcon name="plus" className="h-3.5 w-3.5" />
    </span>
    <strong className="font-medium text-paper max-[640px]:hidden">Future products</strong>
    <em className="ml-auto rounded-full bg-coral px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-white uppercase not-italic [opacity:var(--done)] [transform:scale(calc(0.8_+_var(--done)*0.2))] max-[640px]:absolute max-[640px]:-top-2 max-[640px]:-right-1 max-[640px]:px-1.5 max-[640px]:py-0.75 max-[640px]:text-[8.5px]">
      Ready
    </em>
  </div>
);

export default BusTileNext;
