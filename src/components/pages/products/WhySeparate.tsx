import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";
import { WHY_SEPARATE } from "@/constant/productsPageData";

const WhySeparate: React.FC = () => (
  <section
    id="why"
    aria-labelledby="whysep-title"
    className="mt-[clamp(110px,13vw,170px)] rounded-[var(--r-xl)] bg-ink py-[clamp(80px,10vw,128px)] text-paper"
  >
    <Reveal
      className={`${CONTAINER} grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(32px,6vw,96px)] max-[900px]:grid-cols-1`}
    >
      <h2
        id="whysep-title"
        className="text-[clamp(36px,4.8vw,64px)] leading-[1.02] font-semibold tracking-[-0.045em]"
        style={{ textWrap: "balance" }}
      >
        {WHY_SEPARATE.title}
      </h2>
      <div className="flex flex-col gap-[18px]">
        {WHY_SEPARATE.paragraphs.map((text, i) => (
          <p
            key={text}
            className={`text-[clamp(17px,1.35vw,20px)] leading-[1.6] ${i === 0 ? "text-paper" : "text-[#a3a3a0]"}`}
            style={{ textWrap: "pretty" }}
          >
            {text}
          </p>
        ))}
      </div>
    </Reveal>
  </section>
);

export default WhySeparate;
