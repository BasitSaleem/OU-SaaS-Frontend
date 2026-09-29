"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import ProductsMenu from "./ProductsMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useEscapeKey } from "@/hooks/useEscapeKey";

interface ProductsNavItemProps {
  linkClassName: string;
  onPointerEnter: (el: HTMLElement) => void;
  onOpenChange: (open: boolean) => void;
}

const ProductsNavItem: React.FC<ProductsNavItemProps> = ({ linkClassName, onPointerEnter, onOpenChange }) => {
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const setMenu = (value: boolean) => {
    setOpen(value);
    onOpenChange(value);
  };

  useClickOutside(itemRef, open, () => setMenu(false));
  useEscapeKey(open, () => setMenu(false));

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={() => {
        clearTimeout(closeTimer.current);
        setMenu(true);
      }}
      onMouseLeave={() => {
        closeTimer.current = setTimeout(() => setMenu(false), 140);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="products-menu"
        onMouseEnter={(e) => onPointerEnter(e.currentTarget)}
        onFocus={(e) => onPointerEnter(e.currentTarget)}
        onClick={() => setMenu(!open)}
        className={clsx("inline-flex items-center gap-[5px]", linkClassName)}
      >
        Products
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={clsx("text-neutral-2 transition-transform duration-300 ease-[var(--ease)]", open && "rotate-180 text-ink")}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ProductsMenu open={open} id="products-menu" />
    </div>
  );
};

export default ProductsNavItem;
