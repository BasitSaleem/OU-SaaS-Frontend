const ICON_PATHS: Record<string, React.ReactNode> = {
  star: <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a.53.53 0 0 0 .399.29l5.166.756a.53.53 0 0 1 .294.904l-3.738 3.648a.53.53 0 0 0-.152.469l.882 5.143a.53.53 0 0 1-.77.559l-4.62-2.43a.53.53 0 0 0-.494 0l-4.62 2.43a.53.53 0 0 1-.77-.559l.882-5.143a.53.53 0 0 0-.152-.469L2.66 8.924a.53.53 0 0 1 .294-.904l5.166-.756a.53.53 0 0 0 .399-.29s0 0 0 0z" />,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  package: (
    <>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </>
  ),
  trend: (
    <>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </>
  ),
  alert: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  check: <polyline points="20 6 9 17 4 12" />,
  plus: (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </>
  ),
};

export type HeroNodeIconKey = keyof typeof ICON_PATHS;

const HeroNodeIcon: React.FC<{ name: HeroNodeIconKey; className?: string }> = ({ name, className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={name === "check" || name === "trend" ? 2.25 : 1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {ICON_PATHS[name]}
  </svg>
);

export default HeroNodeIcon;
