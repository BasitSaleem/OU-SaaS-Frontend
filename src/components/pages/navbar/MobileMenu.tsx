import clsx from "clsx";
import MobileMenuProductItem from "./MobileMenuProductItem";
import MobileMenuLink from "./MobileMenuLink";
import { NAV_LINKS, PRODUCT_NAV_ITEMS } from "@/constant/navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onLinkClick }) => (
  <div
    id="mobile-menu"
    data-open={isOpen}
    className={clsx(
      "mx-auto mt-2 flex max-w-[880px] origin-[50%_0] scale-[0.98] flex-col gap-1.5 rounded-3xl border border-black/[0.07] bg-white/[0.97] p-2.5 opacity-0 shadow-[0_30px_60px_-24px_rgba(11,11,11,0.3)] backdrop-blur-2xl transition-[opacity,transform] duration-[450ms] ease-[var(--ease)] -translate-y-2 invisible nav:hidden",
      isOpen && "visible translate-y-0 scale-100 opacity-100"
    )}
  >
    <p className="px-2.5 pt-2 pb-0.5 font-mono text-[11px] tracking-[0.08em] text-neutral uppercase">Products</p>
    {PRODUCT_NAV_ITEMS.map((product) => (
      <MobileMenuProductItem key={product.key} product={product} />
    ))}

    <div className="mt-1 flex flex-col border-t border-line pt-1">
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
