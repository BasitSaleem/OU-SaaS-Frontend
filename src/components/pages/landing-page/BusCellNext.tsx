const BusCellNext: React.FC<{ rowIndex: 0 | 1 | 2 }> = ({ rowIndex }) => (
  <div
    className="relative grid min-h-[92px] place-items-center border-t border-[#1c1c1c] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-[repeating-linear-gradient(to_bottom,#3a3a3a_0_4px,transparent_4px_8px)] before:content-[''] after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-px after:origin-top after:bg-coral after:[transform:translateX(-50%)_scaleY(var(--t))] after:content-[''] max-[640px]:min-h-16"
    style={{ "--r": rowIndex, "--t": "clamp(0, calc(var(--k) * 5 - var(--r) - 1), 1)" } as React.CSSProperties}
  >
    <i
      className="relative z-1 h-3 w-3 rounded-full border border-dashed border-[#555] bg-[#0e0e0e] not-italic after:absolute after:-inset-0.5 after:rounded-full after:bg-coral after:opacity-[var(--on)] after:[box-shadow:0_0_0_5px_rgba(249,92,91,0.16)] after:[transform:scale(calc(0.3_+_var(--on)*0.7))] after:content-['']"
      style={{ "--on": "clamp(0, calc((var(--t) - 0.45) * 8), 1)" } as React.CSSProperties}
    />
  </div>
);

export default BusCellNext;
