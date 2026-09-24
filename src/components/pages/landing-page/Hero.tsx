import Paragraph from "@/components/pages/typography/Paragraph";
import HeroReveal from "./HeroReveal";
import HeroMeshBackground from "./HeroMeshBackground";
import HeroTubesCanvas from "./HeroTubesCanvas";
import HeroHeading from "./HeroHeading";
import HeroCtas from "./HeroCtas";
import { HERO_SUB } from "@/constant/heroData";

const Hero: React.FC = () => (
  <>
    <HeroReveal />

    <section
      id="heroSection"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F0ECF9] pt-(--nav-h) max-md:min-h-0 max-md:justify-center max-md:pb-5"
    >
      <HeroMeshBackground />

      <div
        aria-hidden
        className="absolute inset-0 z-[3] opacity-[0.02]"
        style={{
          backgroundSize: "128px",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <HeroTubesCanvas />

      <div className="absolute inset-x-0 bottom-0 z-[2] h-[55%] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,.4)_30%,rgba(255,255,255,.7)_100%)] backdrop-blur-[4px] max-md:hidden" />

      <div className="relative z-[4] mt-[clamp(40px,5vw,80px)] flex max-w-[1100px] flex-col items-center px-5 pb-[clamp(20px,2vw,36px)] text-center max-md:mt-0 max-md:pb-5">
        <HeroHeading />
        <Paragraph
          className="mb-7 max-w-[500px] text-g500 opacity-0 animate-[hUp_0.5s_var(--ease)_forwards] max-md:px-1"
          style={{ animationDelay: "2s" }}
        >
          {HERO_SUB}
        </Paragraph>
        <HeroCtas />
      </div>
    </section>
  </>
);

export default Hero;
