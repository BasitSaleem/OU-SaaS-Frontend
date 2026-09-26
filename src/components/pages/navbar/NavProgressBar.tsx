import clsx from "clsx";

interface NavProgressBarProps {
  progress: number;
  visible: boolean;
}

/** Coral hairline under the pill nav tracking how far the visitor has scrolled the page. */
const NavProgressBar: React.FC<NavProgressBarProps> = ({ progress, visible }) => (
  <span
    aria-hidden
    className={clsx(
      "pointer-events-none absolute right-7 bottom-[-1px] left-7 h-px origin-left rounded-full bg-coral opacity-0 transition-opacity duration-[400ms] max-nav:right-[22px] max-nav:left-[22px]",
      visible && "opacity-90"
    )}
    style={{ transform: `scaleX(${progress})` }}
  />
);

export default NavProgressBar;
