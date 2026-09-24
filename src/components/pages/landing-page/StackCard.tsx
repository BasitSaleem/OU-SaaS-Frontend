import clsx from "clsx";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import type { EcosystemCard } from "@/constant/ecosystemData";
import { ECOSYSTEM_CARD_GRADIENT } from "@/constant/ecosystemData";
import type { StackPosition } from "@/hooks/useCardShuffle";

const CARD_ICON_PATHS: Record<EcosystemCard["id"], React.ReactNode> = {
  c1: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  c2: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  c3: (
    <>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-4 4" />
    </>
  ),
};

interface StackCardProps {
  card: EcosystemCard;
  position: StackPosition;
  risen: boolean;
  onClick: () => void;
}

const StackCard: React.FC<StackCardProps> = ({ card, position, risen, onClick }) => (
  <article
    onClick={onClick}
    className={clsx(
      "stack-card",
      `pos-${position}`,
      risen && "risen",
      "flex h-[clamp(300px,29vw,380px)] w-[clamp(210px,20vw,270px)] max-[900px]:h-auto max-[900px]:min-h-[230px] max-[900px]:w-[clamp(160px,42vw,210px)] cursor-pointer flex-col rounded-[28px] p-[clamp(24px,2.4vw,32px)] shadow-[0_30px_60px_-20px_rgba(20,10,40,.28)] max-[900px]:p-4",
      ECOSYSTEM_CARD_GRADIENT[card.id]
    )}
  >
    <div className="stack-icon-glow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {CARD_ICON_PATHS[card.id]}
      </svg>
    </div>
    <CardHeading className="mb-2.5 text-white max-[900px]:text-base">{card.title}</CardHeading>
    <CardDesc className="text-white/86 max-[900px]:text-xs">{card.description}</CardDesc>
  </article>
);

export default StackCard;
