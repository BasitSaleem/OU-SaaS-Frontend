import Image from "next/image";
import logo from "../../../../public/assets/logos/owners-universe.svg";

const BusFoundationBar: React.FC = () => (
  <div
    className="relative mt-8 flex min-h-[72px] flex-wrap items-center gap-4 rounded-2xl border border-[#262626] bg-[linear-gradient(180deg,#191919,#121212)] px-4 py-3 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.05)] [grid-column:2/-1] before:absolute before:right-0 before:bottom-full before:left-0 before:h-8 before:[--col:calc((100%_-_2*clamp(8px,1.4vw,20px))/3)] before:[background-image:linear-gradient(var(--rail),var(--rail)),linear-gradient(var(--rail),var(--rail)),linear-gradient(var(--red),var(--red)),repeating-linear-gradient(to_bottom,#3a3a3a_0_4px,transparent_4px_8px)] before:[background-position:calc(var(--col)/2)_0,50%_0,calc(100%_-_var(--col)/2)_0,calc(100%_-_var(--col)/2)_0] before:[background-repeat:no-repeat] before:[background-size:1px_100%,1px_100%,1px_calc(var(--done)*100%),1px_100%] before:content-[''] max-[640px]:mt-6 max-[640px]:min-h-14 max-[640px]:justify-center max-[640px]:p-2.5 max-[640px]:before:h-6 max-[640px]:before:[--col:calc((100%-12px)/3)]"
    style={{ "--done": "clamp(0, calc(var(--k) * 5 - 4), 1)" } as React.CSSProperties}
  >
    <span className="inline-flex rounded-[10px] bg-paper px-3 py-1.75">
      <Image src={logo} alt="Owners Universe" className="h-6.5 w-auto max-[640px]:!h-5" />
    </span>
    <span className="text-base font-medium tracking-[-0.02em] max-[640px]:hidden">One Account. All Products.</span>
  </div>
);

export default BusFoundationBar;
