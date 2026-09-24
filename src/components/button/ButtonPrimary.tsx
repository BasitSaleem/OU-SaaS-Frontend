import Link from "next/link";
import clsx from "clsx";

interface ButtonPrimaryProps {
  text: string;
  href: string;
  target?: "_blank";
  magnetic?: boolean;
  className?: string;
}

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[15px] w-[15px] transition-transform duration-200 ease-[var(--ease)] group-hover:translate-x-[3px]"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, href, target, magnetic, className }) => (
  <Link
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    data-cursor-hover={magnetic || undefined}
    className={clsx(
      "group relative inline-flex items-center gap-[7px] overflow-hidden rounded-full bg-purple px-7 py-[13px] text-sm font-medium text-white transition-[background,box-shadow,transform] duration-150 ease-[var(--ease-h)] active:scale-[0.97]",
      "before:absolute before:inset-y-0 before:-left-full before:w-[200%] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent)] before:transition-[left] before:duration-500 before:ease-[var(--ease)]",
      "[@media(hover:hover)_and_(pointer:fine)]:hover:bg-purple-d [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_6px_24px_var(--purple-glow)] [@media(hover:hover)_and_(pointer:fine)]:hover:before:left-full",
      magnetic && "magnet",
      className
    )}
  >
    {text}
    <ArrowIcon />
  </Link>
);

export default ButtonPrimary;
