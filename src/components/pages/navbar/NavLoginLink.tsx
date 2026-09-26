import { LOGIN_URL } from "@/constant/navigationData";

const NavLoginLink: React.FC = () => (
  <a
    href={LOGIN_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex h-10 items-center gap-0 rounded-full bg-ink px-[18px] text-sm font-medium text-paper transition-[gap,padding,box-shadow,transform] duration-[350ms] ease-[var(--ease)] hover:gap-1.5 hover:px-4 hover:shadow-[0_8px_20px_-10px_rgba(11,11,11,0.6)] active:scale-[0.97]"
  >
    <span>Login</span>
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="w-0 -translate-x-1 translate-y-1 opacity-0 transition-[width,opacity,transform] duration-[350ms] ease-[var(--ease)] group-hover:w-[15px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  </a>
);

export default NavLoginLink;
