import { forwardRef } from "react";
import clsx from "clsx";

interface CardHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const CardHeading = forwardRef<HTMLHeadingElement, CardHeadingProps>(
  ({ children, className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref}
      className={clsx(
        "font-bold font-heading text-charcoal leading-[1.35]",
        "text-lg lg:text-xl xl:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

CardHeading.displayName = "CardHeading";

export default CardHeading;
