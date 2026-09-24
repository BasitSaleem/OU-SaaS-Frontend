import PageMesh from "@/components/PageMesh";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactInfoForm from "@/components/pages/contact/ContactInfoForm";
import SupportChannels from "@/components/pages/contact/SupportChannels";
import ContactSteps from "@/components/pages/contact/ContactSteps";
import BusinessInfoStrip from "@/components/pages/contact/BusinessInfoStrip";
import ContactInvestors from "@/components/pages/contact/ContactInvestors";

const Page = () => (
  <>
    <PageMesh />
    <ContactHero />
    <ContactInfoForm />
    <SupportChannels />
    <ContactSteps />
    <BusinessInfoStrip />
    <ContactInvestors />
  </>
);

export default Page;
