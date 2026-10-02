import Link from "next/link";

const LINK_CLASS =
  "group/ext inline-flex items-center gap-0.5 font-medium text-[#0b0b0b] [background:linear-gradient(#f95c5b,#f95c5b)_0_100%_/_100%_1px_no-repeat] transition-all duration-200 hover:text-[#f95c5b]";

const LinkArrow: React.FC = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="transition-transform duration-[180ms] ease-[var(--ease-out)] group-hover/ext:translate-x-px group-hover/ext:-translate-y-px"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

interface LegalLinkProps {
  href: string;
  children: React.ReactNode;
}

/** Inline link for legal copy. Every link ends in an up-right arrow that nudges on hover; internal routes use
 * next/link, external URLs open in a new tab. */
const LegalLink: React.FC<LegalLinkProps> = ({ href, children }) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {children}
        <LinkArrow />
      </Link>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={LINK_CLASS}>
        {children}
        <LinkArrow />
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {children}
      <LinkArrow />
    </a>
  );
};

export default LegalLink;
