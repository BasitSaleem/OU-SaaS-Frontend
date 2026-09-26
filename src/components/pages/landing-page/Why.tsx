import WhyHead from "./WhyHead";
import BusDiagram from "./BusDiagram";
import WhyFeatureStrip from "./WhyFeatureStrip";
import { CONTAINER } from "@/styles/sectionClasses";

const Why: React.FC = () => (
  <section
    id="why"
    aria-labelledby="why-title"
    className="relative z-2 -mt-14 rounded-t-[var(--r-xl)] bg-ink py-[clamp(96px,14vw,180px)] text-paper"
  >
    <WhyHead />
    <div className={CONTAINER}>
      <BusDiagram />
    </div>
    <WhyFeatureStrip />
  </section>
);

export default Why;
