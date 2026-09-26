import WhyIcon, { type WhyIconKey } from "./WhyIcons";

const BusLabel: React.FC<{ icon: WhyIconKey; title: string }> = ({ icon, title }) => (
  <div className="flex min-h-[92px] items-center gap-3.5 border-t border-[#1c1c1c] pr-3 max-[640px]:min-h-16 max-[640px]:gap-2 max-[640px]:pr-1">
    <span className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-[10px] border border-[#262626] bg-[#141414] text-[#d9d9d4] max-[640px]:hidden">
      <WhyIcon name={icon} className="h-4 w-4" />
    </span>
    <span>
      <strong className="block text-[15px] font-semibold tracking-[-0.01em] max-[640px]:text-[13px]">{title}</strong>
    </span>
  </div>
);

export default BusLabel;
