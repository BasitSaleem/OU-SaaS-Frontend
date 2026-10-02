interface BusCellNextProps {
  /** Row number; each row fills slightly after the one above it. */
  row: number;
}

/** "Next product" lane cell: a dashed rail that the coral line draws down as the diagram scrolls in (--k), then lights its node. */
const BusCellNext: React.FC<BusCellNextProps> = ({ row }) => (
  <div
    className="relative grid min-h-[92px] place-items-center border-t border-[#1c1c1c] before:absolute before:-top-px before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:[background-image:repeating-linear-gradient(to_bottom,#3a3a3a_0_4px,transparent_4px_8px)] before:content-[''] after:absolute after:-top-px after:bottom-0 after:left-1/2 after:w-px after:origin-top after:-translate-x-1/2 after:bg-coral after:[transform:scaleY(var(--t))] after:content-[''] max-[640px]:min-h-16"
    style={{ "--t": `clamp(0, calc(var(--k) * 5 - ${row} - 1), 1)` } as React.CSSProperties}
  >
    <i
      className="relative z-1 h-3 w-3 rounded-full border border-dashed border-[#555] bg-[#0e0e0e] not-italic after:absolute after:-inset-0.5 after:rounded-full after:bg-coral after:opacity-[var(--on)] after:[box-shadow:0_0_0_5px_rgba(249,92,91,0.16)] after:[transform:scale(calc(0.3_+_var(--on)_*_0.7))] after:content-['']"
      style={{ "--on": "clamp(0, calc((var(--t) - 0.45) * 8), 1)" } as React.CSSProperties}
    />
  </div>
);

export default BusCellNext;
