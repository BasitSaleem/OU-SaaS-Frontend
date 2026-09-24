import { MARQUEE_ITEMS } from "@/constant/marqueeData";

/** Rendered twice back-to-back so the track can loop seamlessly at translateX(-50%). */
const MarqueeItems: React.FC = () => (
  <>
    {MARQUEE_ITEMS.map((item, i) => (
      <span
        key={i}
        className="inline-flex items-center gap-7 px-7 font-heading text-[length:clamp(20px,2.4vw,34px)] font-normal tracking-[-0.01em] whitespace-nowrap text-white/85"
      >
        {item}
        <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-coral" />
      </span>
    ))}
  </>
);

const Marquee: React.FC = () => (
  <div aria-hidden className="overflow-hidden border-y border-white/[0.06] bg-charcoal py-[22px]">
    <div className="flex w-max animate-[marquee_26s_linear_infinite] motion-reduce:animate-none">
      <MarqueeItems />
      <MarqueeItems />
    </div>
  </div>
);

export default Marquee;
