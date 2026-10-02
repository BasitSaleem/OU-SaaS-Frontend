import JsonLd from "@/components/common-components/JsonLd";
import { SEO_SCHEMAS } from "@/constant/seoSchemas";
import Hero from "@/components/pages/landing-page/Hero";
import Products from "@/components/pages/landing-page/Products";
import Ticker from "@/components/pages/landing-page/Ticker";
import Why from "@/components/pages/landing-page/Why";
import Owners from "@/components/pages/landing-page/Owners";
import FinalCta from "@/components/pages/landing-page/FinalCta";

const Page = () => (
  <main className="font-display" id="main">
    <JsonLd data={SEO_SCHEMAS["2 - Homepage"]} />
    <Hero />
    <Products />
    <Ticker />
    <Why />
    <Owners />
    <FinalCta />
  </main>
);

export default Page;
