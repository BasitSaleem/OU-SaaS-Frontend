import { CONTAINER } from "@/styles/sectionClasses";

interface LegalLayoutProps {
  nav: React.ReactNode;
  children?: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ nav, children }) => (
  <section className="pb-[clamp(96px,14vw,180px)] bg-paper">
    <div className={`${CONTAINER} grid grid-cols-[248px_minmax(0,720px)] justify-center gap-[clamp(48px,7vw,112px)] pt-[clamp(40px,5vw,64px)] border-t border-[#e4e4e0] max-[960px]:grid-cols-1 max-[960px]:gap-10`}>
      <aside className="relative">{nav}</aside>
      <article className="max-w-[720px] text-[16px] leading-[1.7] text-[#3a3a38]">{children}</article>
    </div>
  </section>
);

export default LegalLayout;
