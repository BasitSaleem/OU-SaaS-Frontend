import clsx from "clsx";

interface ButtonPillProps {
  text: string;
  bgColor: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverGlow?: string;
  url?: string;
  onClick?: () => void;
  target?: "_blank";
  className?: string;
}

const parseColor = (color: string) => (color.startsWith("[") ? color.slice(1, -1) : color);

const ButtonPill: React.FC<ButtonPillProps> = ({
  text,
  bgColor,
  textColor = "white",
  hoverBgColor,
  hoverGlow,
  url,
  onClick,
  target,
  className,
}) => {
  const style = {
    "--btn-bg": parseColor(bgColor),
    "--btn-text": parseColor(textColor),
    "--btn-bg-hover": hoverBgColor ? parseColor(hoverBgColor) : parseColor(bgColor),
    "--btn-glow": hoverGlow ?? "transparent",
  } as React.CSSProperties;

  const classes = clsx(
    "shrink-0 whitespace-nowrap rounded-full bg-[var(--btn-bg)] px-[22px] py-2.5 text-[13px] font-semibold text-[var(--btn-text)] transition-[background,transform,box-shadow] duration-200 ease-[var(--ease)] active:scale-[0.96]",
    "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[var(--btn-bg-hover)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_4px_16px_var(--btn-glow)]",
    className
  );

  if (onClick) {
    return (
      <button type="button" style={style} className={classes} onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <a
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={style}
      className={classes}
    >
      {text}
    </a>
  );
};

export default ButtonPill;
