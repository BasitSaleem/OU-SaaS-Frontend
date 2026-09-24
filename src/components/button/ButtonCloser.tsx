interface ButtonCloserProps {
  text: string;
  href: string;
  target?: "_blank";
}

const ButtonCloser: React.FC<ButtonCloserProps> = ({ text, href, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    data-cursor-hover
    className="magnet inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-5 text-base font-medium text-dark transition-[background,color] duration-250 ease-[var(--ease)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-coral [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
  >
    {text}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
);

export default ButtonCloser;
