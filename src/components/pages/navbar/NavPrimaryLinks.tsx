"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import ProductsNavItem from "./ProductsNavItem";
import { useGlidingPill } from "@/hooks/useGlidingPill";
import { NAV_LINKS } from "@/constant/navigationData";

const LINK_CLASS =
  "relative z-[1] inline-flex h-11 items-center rounded-full px-[18px] text-base font-medium tracking-[-0.01em] text-ink transition-colors duration-[180ms]";

const CURRENT_DOT =
  "after:absolute after:bottom-[3px] after:left-1/2 after:h-[5px] after:w-[5px] after:animate-[dot-morph_6s_cubic-bezier(0.65,0,0.35,1)_infinite] after:rounded-full after:bg-coral after:content-[''] after:[transform:translate(-50%,0)]";

const NavPrimaryLinks: React.FC = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const hovering = useRef(false);
  const { pillStyle, pillOn, moveTo, clear } = useGlidingPill(containerRef);
  const productsCurrent = pathname.startsWith("/products");

  const handleProductsOpenChange = (open: boolean) => {
    setProductsOpen(open);
    if (!open && !hovering.current) clear();
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center gap-0.5 max-[760px]:hidden"
      onMouseEnter={() => {
        hovering.current = true;
      }}
      onMouseLeave={() => {
        hovering.current = false;
        if (!productsOpen) clear();
      }}
    >
      <span
        aria-hidden
        className={clsx(
          "pointer-events-none absolute top-1/2 left-0 h-11 rounded-full border border-white/70 bg-white/50 [box-shadow:0_4px_14px_-6px_rgba(11,11,11,0.18)] [transition:transform_620ms_cubic-bezier(0.34,1.56,0.64,1),width_480ms_cubic-bezier(0.34,1.4,0.64,1),opacity_250ms_ease]",
          pillOn ? "opacity-100" : "opacity-0"
        )}
        style={pillStyle}
      />

      <ProductsNavItem
        linkClassName={clsx(LINK_CLASS, productsCurrent && CURRENT_DOT)}
        onPointerEnter={moveTo}
        onOpenChange={handleProductsOpenChange}
      />

      {NAV_LINKS.map((link) => {
        const current = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={current ? "page" : undefined}
            onMouseEnter={(e) => moveTo(e.currentTarget)}
            onFocus={(e) => moveTo(e.currentTarget)}
            className={clsx(LINK_CLASS, current && CURRENT_DOT)}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavPrimaryLinks;
