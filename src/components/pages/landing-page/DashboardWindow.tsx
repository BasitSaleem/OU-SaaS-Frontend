interface DashboardWindowProps {
  children: React.ReactNode;
}

const DashboardWindow: React.FC<DashboardWindowProps> = ({ children }) => (
  <div className="relative overflow-hidden rounded-[var(--r-lg)] border border-black/[0.08] bg-white [box-shadow:var(--shadow-3)]">
    <div className="flex h-9 items-center gap-1.5 border-b border-line bg-[#fbfbfa] px-3.5">
      <i className="h-[9px] w-[9px] rounded-full bg-[#e2e2de]" />
      <i className="h-[9px] w-[9px] rounded-full bg-[#e2e2de]" />
      <i className="h-[9px] w-[9px] rounded-full bg-[#e2e2de]" />
      <span className="mx-auto pr-10 font-mono text-[11px] text-neutral-2">app.ownersuniverse.com</span>
    </div>
    <div className="relative [aspect-ratio:760/480] [container-type:inline-size]">{children}</div>
  </div>
);

export default DashboardWindow;
