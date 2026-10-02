import ContactHero from "@/components/pages/contact/ContactHero";
import SupportChannels from "@/components/pages/contact/SupportChannels";
import ContactFormSection from "@/components/pages/contact/ContactFormSection";
import BusinessInfoStrip from "@/components/pages/contact/BusinessInfoStrip";
import ContactInvestors from "@/components/pages/contact/ContactInvestors";

const Page = () => (
  <main className="bg-paper min-h-screen">
    <ContactHero />
    <SupportChannels />
    <ContactFormSection />
    <BusinessInfoStrip />
    <ContactInvestors />
  </main>
);

export default Page;
