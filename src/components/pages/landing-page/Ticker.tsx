"use client";

import TickerItem from "./TickerItem";
import { useThroughScrollProgress } from "@/hooks/useThroughScrollProgress";
import { TICKER_ITEMS } from "@/constant/tickerData";

/** Scroll-linked marquee — travel is tied to scroll position, it never autoplays. */
const Ticker: React.FC = () => {
  const ref = useThroughScrollProgress<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id="ticker"
      role="presentation"
      className="overflow-hidden bg-paper py-[clamp(40px,7vw,96px)] pb-[clamp(96px,12vw,160px)] [--p:0]"
    >
      <ul
        aria-label="Owners Universe at a glance"
        className="flex w-max translate-x-[calc(var(--p)*-38%)] gap-[clamp(28px,4vw,56px)] will-change-transform"
      >
        {TICKER_ITEMS.map((label, i) => (
          <TickerItem key={label} label={label} index={i} />
        ))}
        {TICKER_ITEMS.map((label, i) => (
          <TickerItem key={`${label}-dup`} label={label} index={i + TICKER_ITEMS.length} hidden />
        ))}
      </ul>
    </div>
  );
};

export default Ticker;
