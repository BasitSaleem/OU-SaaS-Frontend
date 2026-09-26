import { forwardRef } from "react";

/** Giant background wordmark; --fx/--fy are written by useSpotlightPointer for the cursor-follow glow. */
const FooterMark = forwardRef<HTMLDivElement>((_props, ref) => (
  <div
    ref={ref}
    aria-hidden
    style={{ "--fx": "-999px", "--fy": "-999px" } as React.CSSProperties}
    className="pointer-events-none mt-2 -mb-[0.2em] flex justify-center select-none"
  >
    <span
      className="bg-clip-text text-[min(13.4vw,232px)] leading-[0.9] font-semibold tracking-[-0.065em] whitespace-nowrap text-transparent"
      style={{
        backgroundImage:
          "radial-gradient(280px circle at var(--fx) var(--fy), #c9c9c4, transparent 70%), linear-gradient(to bottom, #e3e3df 20%, #efefec 90%)",
      }}
    >
      Owners Universe
    </span>
  </div>
));

FooterMark.displayName = "FooterMark";

export default FooterMark;
