import clsx from "clsx";

interface NavBurgerButtonProps {
  open: boolean;
  onClick: () => void;
}

const NavBurgerButton: React.FC<NavBurgerButtonProps> = ({ open, onClick }) => (
  <button
    type="button"
    aria-label="Menu"
    aria-expanded={open}
    aria-controls="mobile-menu"
    onClick={onClick}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-black/5 min-[761px]:hidden"
  >
    <span className="relative h-2.5 w-[18px]" aria-hidden>
      <i
        className={clsx(
          "absolute left-0 top-0 h-[1.5px] w-full rounded-sm bg-ink transition-[transform,top] duration-[450ms] ease-[var(--ease)]",
          open && "top-[4.25px] rotate-45"
        )}
      />
      <i
        className={clsx(
          "absolute left-0 top-[8.5px] h-[1.5px] w-full rounded-sm bg-ink transition-[transform,top] duration-[450ms] ease-[var(--ease)]",
          open && "top-[4.25px] -rotate-45"
        )}
      />
    </span>
  </button>
);

export default NavBurgerButton;
