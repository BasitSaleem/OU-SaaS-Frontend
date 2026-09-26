"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import NavPrimaryLinks from "./NavPrimaryLinks";
import NavLoginLink from "./NavLoginLink";
import NavBurgerButton from "./NavBurgerButton";
import NavProgressBar from "./NavProgressBar";
import MobileMenu from "./MobileMenu";
import { useNavScrollState } from "@/hooks/useNavScrollState";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const { scrolled, hidden, progress } = useNavScrollState(mobileOpen);
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
        "fixed inset-x-0 top-0 z-50 px-[clamp(20px,5vw,80px)] pt-3 pb-3 font-display transition-transform duration-500 ease-[var(--ease)]",
        hidden && "-translate-y-[calc(100%+12px)]"
      )}
    >
      <div
        className={clsx(
          "relative mx-auto grid h-16 max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-full border border-transparent pr-2.5 pl-4 transition-[background-color,border-color,box-shadow,max-width,height] duration-500 ease-[var(--ease)]",
          "max-nav:flex max-nav:h-[58px] max-nav:justify-between max-nav:pl-3",
          barActive &&
            "max-w-[880px] h-[60px] border-black/[0.07] bg-[#fcfcfb]/[0.78] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(11,11,11,0.04),0_18px_40px_-22px_rgba(11,11,11,0.35)] backdrop-blur-2xl backdrop-saturate-[1.8]"
        )}
      >
        <Logo imgHeight={scrolled ? 40 : 44} className="justify-self-start" />

        <NavPrimaryLinks />

        <div className="flex items-center justify-self-end gap-1.5">
          <NavLoginLink />
          <NavBurgerButton open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
        </div>

        <NavProgressBar progress={progress} visible={scrolled} />
      </div>

      <MobileMenu isOpen={mobileOpen} onLinkClick={() => setMobileOpen(false)} />
    </header>
  );
};

export default Navbar;
