const ICON_PATHS = {
  onboarding: (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.7 1.7" />
      <path d="m14 14 2.5 2.5a1 1 0 0 0 1.4 0l2.3-2.3a1 1 0 0 0 0-1.4L18 10.6" />
      <path d="m18 11 1.2-1.2a1 1 0 0 0 0-1.4L17 6.2a1 1 0 0 0-1.4 0L14 7.8" />
      <path d="m7 7 2.3-2.3a1 1 0 0 1 1.4 0L13 7a1 1 0 0 1 0 1.4L10 11.4" />
      <path d="m3 11 4.5 4.5a1 1 0 0 0 1.4 0L11 13.4" />
      <path d="m2 16 3 3a2 2 0 0 0 2.8 0l3-3" />
    </>
  ),
  flexible: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </>
  ),
  team: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

export type OwnersIconKey = keyof typeof ICON_PATHS;

const OwnersIcon: React.FC<{ name: OwnersIconKey }> = ({ name }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2 text-ink" aria-hidden>
    {ICON_PATHS[name]}
  </svg>
);

export default OwnersIcon;
