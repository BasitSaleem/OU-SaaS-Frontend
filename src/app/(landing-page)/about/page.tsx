import JsonLd from "@/components/common-components/JsonLd";
import { SEO_SCHEMAS } from "@/constant/seoSchemas";
import AboutHero from "@/components/pages/about/AboutHero";
import AboutStory from "@/components/pages/about/AboutStory";
import AboutValues from "@/components/pages/about/AboutValues";
import AboutStats from "@/components/pages/about/AboutStats";
import AboutLocation from "@/components/pages/about/AboutLocation";
import AboutCta from "@/components/pages/about/AboutCta";

const Page = () => (
  <>
    <JsonLd data={SEO_SCHEMAS["4 - About"]} />
    <AboutHero />
    <AboutStory />
    <AboutValues />
    <AboutStats />
    <AboutLocation />
    <AboutCta />
  </>
);

export default Page;
