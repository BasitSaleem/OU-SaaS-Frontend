import Container from "@/components/Container";
import ContactInfoPanel from "./ContactInfoPanel";
import ContactForm from "./ContactForm";

const ContactInfoForm: React.FC = () => (
  <section className="py-[60px]">
    <Container>
      <div className="grid grid-cols-[0.85fr_1.15fr] items-stretch gap-[clamp(28px,4vw,48px)] max-[900px]:grid-cols-1">
        <ContactInfoPanel />
        <ContactForm />
      </div>
    </Container>
  </section>
);

export default ContactInfoForm;
