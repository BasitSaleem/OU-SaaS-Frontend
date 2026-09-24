import Hero from "@/components/pages/landing-page/Hero";
import Products from "@/components/pages/landing-page/Products";
import Marquee from "@/components/pages/landing-page/Marquee";
import Ecosystem from "@/components/pages/landing-page/Ecosystem";
import Proof from "@/components/pages/landing-page/Proof";
import Closer from "@/components/pages/landing-page/Closer";

const Page = () => (
  <main>
    <Hero />
    <Products />
    <Marquee />
    <Ecosystem />
    <Proof />
    <Closer />
    {/* Footer is already wired in the route group layout. */}
  </main>
);

export default Page;
