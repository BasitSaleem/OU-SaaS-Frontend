import clsx from "clsx";

const LINE_SPAN = "inline-block transition-transform duration-[1200ms] ease-[var(--ease-out)]";

const FinalTitle: React.FC<{ isIn: boolean }> = ({ isIn }) => (
  <h2 id="final-title" className="flex flex-col text-[clamp(64px,13vw,208px)] leading-[0.9] font-semibold tracking-[-0.065em]">
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <span
        className={clsx(
          LINE_SPAN,
          "bg-[linear-gradient(90deg,var(--paper)_calc(var(--f)*115%_-_15%),#5c5c5a_calc(var(--f)*115%))] bg-clip-text pb-[0.1em] text-transparent",
          isIn ? "translate-y-0" : "translate-y-[105%]"
        )}
      >
        Ready when
      </span>
    </span>
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <span className={clsx(LINE_SPAN, "delay-[120ms]", isIn ? "translate-y-0" : "translate-y-[105%]")}>
        you are.
      </span>
    </span>
  </h2>
);

export default FinalTitle;
