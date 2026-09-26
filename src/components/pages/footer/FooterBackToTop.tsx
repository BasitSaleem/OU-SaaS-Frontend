"use client";

const FooterBackToTop: React.FC = () => (
  <button
    type="button"
    aria-label="Back to top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper transition-[transform,box-shadow] duration-300 ease-[var(--ease)] hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-8px_rgba(11,11,11,0.6)]"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  </button>
);

export default FooterBackToTop;
