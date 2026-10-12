import { forwardRef } from "react";
import clsx from "clsx";

interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const MainHeading = forwardRef<HTMLHeadingElement, MainHeadingProps>(
  ({ children, className, style, as: Component = "h2", ...props }, ref) => (
    <Component
      ref={ref}
      style={style}
      className={clsx(
        // Section title: 36px mobile, 37px tablet (md), 64px desktop (lg and up), in the site's heading style (Geist, semibold, ink).
        "font-display font-semibold text-ink tracking-[-0.04em] leading-[1.05] [text-wrap:balance]",
        "text-[36px] md:text-[37px] lg:text-[64px]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

MainHeading.displayName = "MainHeading";

export default MainHeading;
