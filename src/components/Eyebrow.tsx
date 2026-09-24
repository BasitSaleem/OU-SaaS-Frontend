import { forwardRef } from "react";
import clsx from "clsx";

interface EyebrowProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

/** The small pill badge (coral dot + label) reused above section headings across the site. */
const Eyebrow = forwardRef<HTMLDivElement, EyebrowProps>(({ text, className, style }, ref) => (
  <div
    ref={ref}
    style={style}
    className={clsx(
      "inline-flex items-center gap-2 rounded-full border border-g200 bg-white px-[18px] py-2 text-[13px] font-medium text-charcoal",
      className
    )}
  >
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
    {text}
  </div>
));

Eyebrow.displayName = "Eyebrow";

export default Eyebrow;
