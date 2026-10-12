import clsx from "clsx";

interface TickerItemProps {
  label: string;
  hidden?: boolean;
}

/** One word of the marquee, in ink (rgba(11, 11, 11, 1)) with a ring after it. */
const TickerItem: React.FC<TickerItemProps> = ({ label, hidden }) => (
  <li
    aria-hidden={hidden}
    className={clsx(
      "flex items-center gap-[clamp(28px,4vw,56px)] text-[clamp(44px,7.4vw,106px)] leading-none font-semibold tracking-[-0.055em] whitespace-nowrap text-ink"
    )}
  >
    {label}
    <span className="h-[clamp(10px,1vw,14px)] w-[clamp(10px,1vw,14px)] rounded-full border-2 border-[#cfcfca]" aria-hidden />
  </li>
);

export default TickerItem;
