import { LOGIN_URL } from "@/constant/navigationData";

const NavLoginLink: React.FC = () => (
  <a
    href={LOGIN_URL}
    rel="noopener"
    className="group relative inline-flex h-12 items-center gap-0 overflow-hidden rounded-full bg-ink px-6 text-base font-semibold tracking-[-0.01em] text-paper transition-[gap,padding,box-shadow,transform] duration-[350ms] ease-[var(--ease-out)] before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[120%] before:rounded-[inherit] before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%)] before:content-[''] hover:gap-1.5 hover:pr-5 hover:pl-6 hover:shadow-[0_8px_20px_-10px_rgba(11,11,11,0.6)] hover:before:translate-x-[120%] hover:before:[transition:transform_800ms_var(--ease-out)] active:scale-[0.97]"
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
      className="w-0 -translate-x-1 translate-y-1 opacity-0 transition-[width,opacity,transform] duration-[350ms] ease-[var(--ease-out)] group-hover:w-[15px] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  </a>
);

export default NavLoginLink;
