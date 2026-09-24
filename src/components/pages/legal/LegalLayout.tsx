import Container from "@/components/Container";

interface LegalLayoutProps {
  nav: React.ReactNode;
  children?: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ nav, children }) => (
  <Container className="grid grid-cols-[220px_1fr] items-start gap-[clamp(40px,6vw,96px)] py-14 pb-[120px] max-[900px]:grid-cols-1">
    {nav}
    <div className="max-w-[720px]">{children}</div>
  </Container>
);

export default LegalLayout;
