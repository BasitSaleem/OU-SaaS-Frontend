"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ButtonPill from "@/components/button/ButtonPill";
import { useNavScroll } from "@/hooks/useNavScroll";
import { LOGIN_URL } from "@/constant/navigationData";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = useNavScroll(isHome);
  const accentColor = isHome ? "[#F95C5B]" : "[#795CF5]";

  return (
    <>
      <nav
        className={clsx(
          "fixed top-4 left-1/2 z-[1000] flex h-14 w-4/5 max-w-[1100px] -translate-x-1/2 items-center justify-between rounded-full border py-0 pr-2 pl-7 transition-[background,box-shadow,border-color] duration-400 ease-[var(--ease)]",
          "max-nav:top-3 max-nav:h-[50px] max-nav:max-w-[calc(100%-32px)] max-nav:pr-2 max-nav:pl-5",
          isHome && !scrolled
            ? "border-white/30 bg-white/[0.37]"
            : "border-white/50 bg-white/[0.82] shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150"
        )}
      >
        <Logo />

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-x-[clamp(16px,2.5vw,32px)] nav:flex">
          <NavLinks
            linkClassName={clsx(
              "text-[13px] font-medium tracking-[0.01em] whitespace-nowrap text-charcoal transition-colors duration-200 ease-[var(--ease)]",
              isHome
                ? "[@media(hover:hover)_and_(pointer:fine)]:hover:text-charcoal"
                : "[@media(hover:hover)_and_(pointer:fine)]:hover:text-purple"
            )}
            containerClassName="flex items-center gap-x-[clamp(16px,2.5vw,32px)]"
          />
        </div>

        <ButtonPill
          text="Login"
          bgColor={accentColor}
          hoverBgColor={isHome ? "[#e8504f]" : "[#6B4FD9]"}
          hoverGlow={isHome ? "rgba(249,92,91,.25)" : "var(--purple-glow)"}
          url={LOGIN_URL}
          target="_blank"
          className="hidden nav:inline-block"
        />

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] nav:hidden"
        >
          <span
            className={clsx(
              "h-[1.5px] w-[18px] rounded-sm bg-charcoal transition-transform duration-300 ease-[var(--ease)]",
              menuOpen && "translate-x-[2.5px] translate-y-[2.5px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-[1.5px] w-[18px] rounded-sm bg-charcoal transition-transform duration-300 ease-[var(--ease)]",
              menuOpen && "translate-x-[2.5px] -translate-y-[2.5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        accentColor={accentColor}
        onLinkClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
