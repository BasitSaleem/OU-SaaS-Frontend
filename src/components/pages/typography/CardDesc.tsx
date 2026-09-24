import { forwardRef } from "react";
import clsx from "clsx";

interface CardDescProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const CardDesc = forwardRef<HTMLParagraphElement, CardDescProps>(
  ({ children, className, as: Component = "p", ...props }, ref) => (
    <Component
      ref={ref}
      className={clsx(
        "font-normal font-sans text-g600 text-sm leading-[1.7]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

CardDesc.displayName = "CardDesc";

export default CardDesc;
