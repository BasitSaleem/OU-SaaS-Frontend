"use client";

import { useHoverWordSpotlight } from "@/hooks/useHoverWordSpotlight";

/** Headline word that is ink at rest, with a coral→purple spotlight that follows the cursor inside the letters. */
const HoverWord: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useHoverWordSpotlight<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className="text-transparent [--mx:50%] [--my:50%] [-webkit-background-clip:text] [-webkit-box-decoration-break:clone] [background-clip:text] [background-image:radial-gradient(circle_var(--spot)_at_var(--mx)_var(--my),#f95c5b_0%,#c85a9c_30%,#7a5cf5_62%,rgba(122,92,245,0)_100%),linear-gradient(var(--ink),var(--ink))] [box-decoration-break:clone] [margin:-0.04em_-0.12em_-0.1em] [padding:0.04em_0.12em_0.1em] [transition:--spot_600ms_var(--ease-out)]"
    >
      {children}
    </span>
  );
};

export default HoverWord;
