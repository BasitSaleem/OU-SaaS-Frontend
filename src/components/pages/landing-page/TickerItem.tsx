import clsx from "clsx";

interface TickerItemProps {
  label: string;
  index: number;
  hidden?: boolean;
}

const TickerItem: React.FC<TickerItemProps> = ({ label, index, hidden }) => {
  const dark = index % 5 === 0 || index % 5 === 1;

  return (
    <li
      aria-hidden={hidden}
      className={clsx(
        "flex items-center gap-[clamp(28px,4vw,56px)] text-[clamp(44px,7.4vw,112px)] leading-none font-semibold tracking-[-0.055em] whitespace-nowrap",
        dark ? "text-ink" : "text-[#d9d9d4]"
      )}
    >
      {label}
      <span className="h-[clamp(10px,1vw,14px)] w-[clamp(10px,1vw,14px)] rounded-full border-2 border-[#cfcfca]" aria-hidden />
    </li>
  );
};

export default TickerItem;
