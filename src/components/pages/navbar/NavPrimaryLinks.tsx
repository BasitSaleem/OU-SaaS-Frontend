"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ProductsNavItem from "./ProductsNavItem";
import { useGlidingPill } from "@/hooks/useGlidingPill";
import { NAV_LINKS } from "@/constant/navigationData";

const LINK_CLASS =
  "relative z-[1] inline-flex h-9 items-center rounded-full px-[15px] text-sm font-medium tracking-[-0.005em] text-[#3d3d3d] transition-colors duration-[180ms] hover:text-ink";

const NavPrimaryLinks: React.FC = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pillStyle, pillOn, moveTo, clear } = useGlidingPill(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative hidden items-center gap-0.5 nav:flex"
      onMouseLeave={() => !productsOpen && clear()}
    >
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute top-1/2 left-0 h-9 -translate-y-1/2 rounded-full bg-black/[0.055] opacity-0 transition-[transform,width,opacity] duration-[420ms] ease-[var(--ease)]",
          pillOn && "opacity-100"
        )}
        style={pillStyle}
      />

      <ProductsNavItem linkClassName={LINK_CLASS} onPointerEnter={moveTo} onOpenChange={setProductsOpen} />

      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onMouseEnter={(e) => moveTo(e.currentTarget)}
          onFocus={(e) => moveTo(e.currentTarget)}
          className={clsx(LINK_CLASS, pathname === link.href && "text-ink")}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavPrimaryLinks;
