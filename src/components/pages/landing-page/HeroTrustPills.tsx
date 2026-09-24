import GlyphIcon from "@/components/icons/GlyphIcon";
import { HERO_TRUST_ITEMS, type HeroTrustItem } from "@/constant/heroData";

const TrustIcon: React.FC<{ icon: HeroTrustItem["icon"] }> = ({ icon }) => {
  if (icon === "live") {
    return <span className="h-1.5 w-1.5 shrink-0 animate-[livePulse_2s_ease-in-out_infinite] rounded-full bg-[#22C55E]" />;
  }
  return <GlyphIcon name={icon} className="h-[13px] w-[13px] shrink-0 text-purple" />;
};

const HeroTrustPills: React.FC = () => (
  <div
    className="mt-7 flex flex-wrap items-center justify-center gap-2 opacity-0 animate-[hUp_0.4s_var(--ease)_forwards]"
    style={{ animationDelay: "2.4s" }}
  >
    {HERO_TRUST_ITEMS.map((item) => (
      <span
        key={item.label}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/50 px-3.5 py-1.5 text-[11px] text-g600 backdrop-blur-[10px] transition-[border-color,background] duration-200 sm:text-xs [@media(hover:hover)_and_(pointer:fine)]:hover:border-purple/15 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/70"
      >
        <TrustIcon icon={item.icon} />
        {item.label}
      </span>
    ))}
  </div>
);

export default HeroTrustPills;
