import Link from "next/link";
import clsx from "clsx";
import { NAV_LINKS } from "@/constant/navigationData";

interface NavLinksProps {
  linkClassName: string;
  onLinkClick?: () => void;
  containerClassName?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ linkClassName, onLinkClick, containerClassName }) => (
  <div className={clsx(containerClassName)}>
    {NAV_LINKS.map((link) => (
      <Link key={link.href} href={link.href} className={linkClassName} onClick={onLinkClick}>
        {link.label}
      </Link>
    ))}
  </div>
);

export default NavLinks;
