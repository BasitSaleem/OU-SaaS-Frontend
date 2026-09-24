import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";

interface LegalHeroProps {
  title: string;
  updatedDate: string;
}

/** Shared by every legal page (Privacy, Terms, ...). */
const LegalHero: React.FC<LegalHeroProps> = ({ title, updatedDate }) => (
  <section className="border-b border-g200 pt-[calc(var(--nav-h)+60px)] pb-[60px]">
    <Container>
      <div className="mb-3.5 text-[13px] text-g400">Last Updated: {updatedDate}</div>
      <MainHeading
        as="h1"
        className="!text-[36px] md:!text-[48px] lg:!text-[64px] !font-semibold !tracking-[-0.03em]"
      >
        {title}
      </MainHeading>
    </Container>
  </section>
);

export default LegalHero;
