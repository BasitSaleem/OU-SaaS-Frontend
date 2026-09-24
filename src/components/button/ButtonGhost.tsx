import clsx from "clsx";

interface ButtonGhostProps {
  text: string;
  href: string;
  target?: "_blank";
  className?: string;
}

const ButtonGhost: React.FC<ButtonGhostProps> = ({ text, href, target, className }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className={clsx(
      "inline-flex items-center gap-[7px] rounded-full border-[1.5px] border-black/[0.06] bg-white/50 px-7 py-[13px] text-sm font-medium text-charcoal backdrop-blur-[8px] transition-[border-color,color,background,transform] duration-200 active:scale-[0.97]",
      "[@media(hover:hover)_and_(pointer:fine)]:hover:border-purple [@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/85 [@media(hover:hover)_and_(pointer:fine)]:hover:text-purple",
      className
    )}
  >
    {text}
  </a>
);

export default ButtonGhost;
