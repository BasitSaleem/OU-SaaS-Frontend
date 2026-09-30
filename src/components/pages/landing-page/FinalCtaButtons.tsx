import clsx from "clsx";
import ButtonInkPill from "@/components/button/ButtonInkPill";

const FinalCtaButtons: React.FC<{ isIn: boolean }> = ({ isIn }) => (
  <div
    className={clsx(
      "flex flex-wrap items-center gap-3 transition-[opacity,transform] duration-[900ms] delay-300 ease-[var(--ease-out)]",
      isIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    )}
  >
    <ButtonInkPill href="https://app.ownersuniverse.com/register" target="_blank" variant="accent" size="lg" icon="arrow-up-right">
      Create your account
    </ButtonInkPill>
    <ButtonInkPill href="https://app.ownersuniverse.com" target="_blank" variant="light-ghost" size="lg">
      Log in to dashboard
    </ButtonInkPill>
    <p className="mt-2 inline-flex basis-full items-center gap-2.5 text-sm font-medium text-[#a3a3a0]">
      <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />
      One account. All products. No contracts.
    </p>
  </div>
);

export default FinalCtaButtons;
