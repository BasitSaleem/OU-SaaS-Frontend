import { forwardRef } from "react";
import clsx from "clsx";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, style, as: Component = "p", ...props }, ref) => (
    <Component
      ref={ref}
      style={style}
      className={clsx(
        "font-normal font-sans text-g600 text-base lg:text-lg leading-[1.7]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
