import Reveal from "@/components/common-components/Reveal";
import ButtonInkPill from "@/components/button/ButtonInkPill";
import { CONTAINER } from "@/styles/sectionClasses";
import {
  ABOUT_CTA_BUTTON_HREF,
  ABOUT_CTA_BUTTON_TEXT,
  ABOUT_CTA_SUB,
  ABOUT_CTA_TITLE,
} from "@/constant/aboutData";

const AboutCta: React.FC = () => (
  <section
    aria-labelledby="acta-title"
    className="pb-[clamp(120px,13vw,170px)]"
  >
    <div className={CONTAINER}>
      <Reveal>
        {/* Card: horizontal flex → column on mobile */}
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-[var(--r-xl)] border border-line bg-white p-[clamp(32px,5vw,64px)] [background-image:radial-gradient(420px_circle_at_100%_0%,rgba(121,92,245,0.08),transparent_70%),radial-gradient(360px_circle_at_0%_100%,rgba(249,92,91,0.07),transparent_70%)] max-[560px]:flex-col max-[560px]:items-start">
          <div className="flex flex-col gap-[14px]">
            <h2
              id="acta-title"
              className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink [text-wrap:balance]"
            >
              {ABOUT_CTA_TITLE}
            </h2>
            <p className="text-[clamp(18px,1.8vw,24px)] leading-[1.45] tracking-[-0.02em] text-neutral [text-wrap:pretty]">
              {ABOUT_CTA_SUB}
            </p>
          </div>

          <ButtonInkPill href={ABOUT_CTA_BUTTON_HREF} variant="primary" size="lg">
            {ABOUT_CTA_BUTTON_TEXT}
          </ButtonInkPill>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutCta;
