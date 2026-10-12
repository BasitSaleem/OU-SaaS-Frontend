import Image from "next/image";
import logo from "../../../../public/assets/logos/owners-universe.svg";

const BusFoundationBar: React.FC = () => (
  <div
    className="relative mt-8 flex min-h-[72px] flex-wrap items-center gap-4 rounded-2xl border border-[#262626] bg-[linear-gradient(180deg,#191919,#121212)] px-4 py-3 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.05)] [grid-column:2/-1] max-[640px]:mt-6 max-[640px]:min-h-14 max-[640px]:justify-center max-[640px]:p-2.5"
  >
    <span className="inline-flex rounded-[10px] bg-paper px-3 py-1.75">
      <Image src={logo} alt="Owners Universe" className="h-6.5 w-auto max-[640px]:!h-5" />
    </span>
    <span className="text-base font-medium tracking-[-0.02em] max-[640px]:hidden">One Account. All Products.</span>
  </div>
);

export default BusFoundationBar;
