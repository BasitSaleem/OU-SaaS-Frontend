import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";
import ContactStepCard from "./ContactStepCard";
import {
  CONTACT_STEPS,
  CONTACT_STEPS_SUB,
  CONTACT_STEPS_TITLE,
} from "@/constant/contactStepsData";

const ContactSteps: React.FC = () => (
  <section className="border-t border-g200 py-[clamp(60px,8vw,96px)]">
    <div className={CONTAINER}>
      <Reveal mode="rise" className="mb-[clamp(32px,4vw,48px)] max-w-[600px]">
        <h2 className="mb-2.5 text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
          {CONTACT_STEPS_TITLE}
        </h2>
        <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.6] text-g500">
          {CONTACT_STEPS_SUB}
        </p>
      </Reveal>

      <Reveal mode="stagger" className="grid grid-cols-3 gap-[clamp(14px,2vw,20px)] max-[900px]:mx-auto max-[900px]:max-w-[440px] max-[900px]:grid-cols-1">
        {CONTACT_STEPS.map((step, i) => (
          <ContactStepCard
            key={step.step}
            step={step}
            delayMs={(i + 1) * 80}
          />
        ))}
      </Reveal>
    </div>
  </section>
);

export default ContactSteps;
