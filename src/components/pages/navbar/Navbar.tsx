"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import NavPrimaryLinks from "./NavPrimaryLinks";
import NavLoginLink from "./NavLoginLink";
import NavBurgerButton from "./NavBurgerButton";
import MobileMenu from "./MobileMenu";
import { useNavScrollState } from "@/hooks/useNavScrollState";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const { scrolled, hidden } = useNavScrollState(mobileOpen);
  const barActive = scrolled || mobileOpen;

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "pointer-events-none fixed inset-x-0 top-0 z-50 px-[var(--gutter)] pt-[calc(12px+env(safe-area-inset-top,0px))] pb-3 font-display transition-transform duration-[600ms] ease-[var(--ease-out)]",
        hidden && "-translate-y-[calc(100%+12px)]"
      )}
    >
      <div
        className={clsx(
          "pointer-events-auto relative mx-auto grid animate-[nav-in_1000ms_var(--ease-out)_150ms_both] grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full border pr-3 pl-5 transition-[background-color,border-color,box-shadow,backdrop-filter,max-width,height] duration-500 ease-[var(--ease-out)] max-[760px]:flex max-[760px]:justify-between max-[760px]:pl-3.5",
          barActive
            ? "h-[68px] max-w-[1040px] border-white/60 bg-white/[0.42] backdrop-blur-[22px] backdrop-saturate-[1.8] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.75),0_12px_40px_-10px_rgba(11,11,11,0.2)]"
            : "h-[76px] max-w-[var(--max)] border-transparent bg-transparent max-[760px]:h-16"
        )}
      >
        <Logo imgHeight={scrolled ? 44 : 48} className="justify-self-start rounded-[10px] transition-opacity duration-[180ms] hover:opacity-80 max-[760px]:[&_img]:!h-10" />

        <NavPrimaryLinks />

        <div className="flex items-center justify-self-end gap-1.5">
          <NavLoginLink />
          <NavBurgerButton open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onLinkClick={() => setMobileOpen(false)} />
    </header>
  );
};

export default Navbar;
