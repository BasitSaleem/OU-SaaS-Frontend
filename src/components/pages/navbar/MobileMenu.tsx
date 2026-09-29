import clsx from "clsx";
import MobileMenuProductItem from "./MobileMenuProductItem";
import MobileMenuLink from "./MobileMenuLink";
import { NAV_LINKS, PRODUCT_NAV_ITEMS } from "@/constant/navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const CHILD =
  "translate-y-2 opacity-0 transition-[opacity,transform] duration-500 ease-[var(--ease-out)] group-data-[open=true]/sheet:translate-y-0 group-data-[open=true]/sheet:opacity-100";

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onLinkClick }) => (
  <div
    id="mobile-menu"
    data-open={isOpen}
    inert={!isOpen}
    className={clsx(
      "group/sheet pointer-events-auto mx-auto mt-2 flex max-w-[1040px] origin-[50%_0] flex-col gap-1.5 rounded-3xl border border-black/[0.07] bg-white/[0.97] p-2.5 backdrop-blur-[20px] transition-[opacity,transform,visibility] duration-[450ms] ease-[var(--ease-out)] [box-shadow:0_30px_60px_-24px_rgba(11,11,11,0.3)] min-[761px]:hidden",
      isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.98] opacity-0"
    )}
  >
    <p className={clsx(CHILD, "px-2.5 pt-2 pb-0.5 text-[13px] font-medium text-[#5f5f5a]")}>Products</p>
    {PRODUCT_NAV_ITEMS.map((product, i) => (
      <MobileMenuProductItem
        key={product.key}
        product={product}
        onClick={onLinkClick}
        className={clsx(CHILD, i === 0 ? "delay-50" : "delay-100")}
      />
    ))}

    <div className={clsx(CHILD, "mt-1 flex flex-col border-t border-line pt-1 delay-150")}>
      <MobileMenuLink href="/products" onClick={onLinkClick}>
        Products
      </MobileMenuLink>
      {NAV_LINKS.map((link) => (
        <MobileMenuLink key={link.href} href={link.href} onClick={onLinkClick}>
          {link.label}
        </MobileMenuLink>
      ))}
    </div>
  </div>
);

export default MobileMenu;
