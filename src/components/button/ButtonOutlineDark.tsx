interface ButtonOutlineDarkProps {
  text: string;
  href: string;
  target?: "_blank";
}

const ButtonOutlineDark: React.FC<ButtonOutlineDarkProps> = ({ text, href, target }) => (
  <a
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    data-cursor-hover
    className="magnet inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/[0.14] px-[30px] py-[15px] text-[15px] font-medium text-white transition-[border-color,background] duration-250 [@media(hover:hover)_and_(pointer:fine)]:hover:border-purple [@media(hover:hover)_and_(pointer:fine)]:hover:bg-purple-10"
  >
    {text}
  </a>
);

export default ButtonOutlineDark;
