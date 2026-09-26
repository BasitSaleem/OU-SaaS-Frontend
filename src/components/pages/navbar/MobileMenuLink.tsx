import Link from "next/link";

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-2" aria-hidden>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

interface MobileMenuLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({ href, onClick, children }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center justify-between rounded-xl px-2.5 py-3.5 text-[17px] font-medium text-ink transition-colors duration-150 hover:bg-paper"
  >
    {children}
    <ChevronRightIcon />
  </Link>
);

export default MobileMenuLink;
