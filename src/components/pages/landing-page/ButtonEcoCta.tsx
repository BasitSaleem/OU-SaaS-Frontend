import { REGISTER_URL } from "@/constant/navigationData";

const ButtonEcoCta: React.FC = () => (
  <a
    href={REGISTER_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-cursor-hover
    className="magnet inline-flex items-center gap-2.5 rounded-full bg-purple px-[30px] py-4 text-[15px] font-medium text-white transition-[gap,transform,box-shadow,background] duration-250 ease-[var(--ease)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:gap-3.5 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-purple-d [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_10px_28px_-8px_rgba(121,92,245,.45)]"
  >
    Create your account
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </a>
);

export default ButtonEcoCta;
