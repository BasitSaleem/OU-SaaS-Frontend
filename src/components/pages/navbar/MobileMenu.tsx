import clsx from "clsx";
import NavLinks from "./NavLinks";
import ButtonPill from "@/components/button/ButtonPill";
import { LOGIN_URL } from "@/constant/navigationData";

interface MobileMenuProps {
  isOpen: boolean;
  accentColor: string;
  onLinkClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, accentColor, onLinkClick }) => (
  <div
    className={clsx(
      "nav:hidden fixed top-20 right-4 left-4 z-[999] rounded-[20px] border border-black/[0.04] bg-white/95 pt-2 pb-3 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-[opacity,transform] duration-200 ease-[var(--ease)] -translate-y-2 pointer-events-none",
      isOpen && "opacity-100 translate-y-0 pointer-events-auto"
    )}
  >
    <NavLinks
      onLinkClick={onLinkClick}
      linkClassName="block px-7 py-3.5 text-[15px] font-semibold text-g600"
    />
    <div className="px-6 py-3.5">
      <ButtonPill
        text="Login"
        bgColor={accentColor}
        url={LOGIN_URL}
        target="_blank"
        className="block w-full text-center"
      />
    </div>
  </div>
);

export default MobileMenu;
