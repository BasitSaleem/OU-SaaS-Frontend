import Image from "next/image";
import logo from "../../../../public/assets/logos/owners-universe.svg";

const BusFoundationBar: React.FC = () => (
  <div
    className="relative mt-8 flex min-h-[72px] flex-wrap items-center gap-4 rounded-2xl border border-[#262626] bg-[linear-gradient(180deg,#191919,#121212)] px-4 py-3 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.05)] [grid-column:2/-1] max-[640px]:mt-6 max-[640px]:min-h-14 max-[640px]:justify-center max-[640px]:p-2.5"
  >
    {/* 3-Column Top Connector Lines perfectly aligned with the grid columns above */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-8 right-0 left-0 h-8 grid grid-cols-3 gap-x-[clamp(8px,1.4vw,20px)] max-[640px]:-top-6 max-[640px]:h-6 max-[640px]:gap-x-1.5"
    >
      <div className="relative h-full before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-[var(--rail)]" />
      <div className="relative h-full before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-[var(--rail)]" />
      <div className="relative h-full before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-coral" />
    </div>

    <span className="inline-flex rounded-[10px] bg-paper px-3 py-1.75">
      <Image src={logo} alt="Owners Universe" className="h-6.5 w-auto max-[640px]:!h-5" />
    </span>
    <span className="text-base font-medium tracking-[-0.02em] max-[640px]:hidden">One Account. All Products.</span>
  </div>
);

export default BusFoundationBar;
