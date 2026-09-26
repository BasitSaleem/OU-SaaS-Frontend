import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "ghost" | "light" | "accent" | "light-ghost";
type Size = "sm" | "base" | "lg";

interface ButtonInkPillProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank";
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "arrow-up-right" | "none";
  className?: string;
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-[#232323]",
  ghost: "border border-line bg-transparent text-ink hover:border-[#d4d4cf] hover:bg-white hover:shadow-[0_1px_2px_rgba(11,11,11,0.04),0_1px_1px_rgba(11,11,11,0.03)]",
  light: "bg-paper text-ink hover:bg-white hover:shadow-[0_8px_28px_-10px_rgba(0,0,0,0.6)]",
  accent: "bg-coral text-white hover:bg-[#e84a49] hover:shadow-[0_10px_30px_-10px_rgba(249,92,91,0.6)]",
  "light-ghost": "border border-[#3a3a3a] bg-transparent text-paper hover:border-[#6b6b6b]",
};

const SIZE_CLASS: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  base: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-[26px] text-base",
};

const ArrowIcon: React.FC<{ variant: "arrow" | "arrow-up-right" }> = ({ variant }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={clsx(
      "transition-transform duration-[180ms] ease-[var(--ease-out,cubic-bezier(0.22,1,0.36,1))]",
      variant === "arrow" && "group-hover:translate-x-[3px]",
      variant === "arrow-up-right" && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    )}
  >
    {variant === "arrow" ? (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ) : (
      <>
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </>
    )}
  </svg>
);

const ButtonInkPill: React.FC<ButtonInkPillProps> = ({
  children,
  href,
  target,
  variant = "primary",
  size = "base",
  icon = "none",
  className,
}) => {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[transform,background-color,border-color,box-shadow] duration-[180ms] ease-[var(--ease-out,cubic-bezier(0.22,1,0.36,1))] hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {icon !== "none" && <ArrowIcon variant={icon} />}
    </>
  );

  if (target === "_blank" || href.startsWith("http")) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
};

export default ButtonInkPill;
