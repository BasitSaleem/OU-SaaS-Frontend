import Reveal from "@/components/common-components/Reveal";
import CopyTextButton from "@/components/common-components/CopyTextButton";
import { CONTAINER } from "@/styles/sectionClasses";
import { COMING_SOON } from "@/constant/productsPageData";

const ComingSoon: React.FC = () => (
  <section
    aria-labelledby="soon-title"
    className="pt-[clamp(88px,11vw,140px)] pb-[clamp(120px,13vw,170px)]"
  >
    <div className={CONTAINER}>
      <Reveal className="group mx-auto grid max-w-[900px] grid-cols-[auto_1fr] items-start gap-[clamp(20px,3vw,36px)] rounded-[var(--r-xl)] border border-dashed border-[#c9c9c4] bg-white/55 p-[clamp(28px,4vw,44px)] max-[720px]:grid-cols-1">
        <span
          aria-hidden
          className="grid size-16 place-items-center rounded-full border border-dashed border-[#b9b9b4] text-neutral [transition:transform_700ms_var(--ease-out),border-color_180ms,color_180ms] group-hover:rotate-90 group-hover:border-ink group-hover:text-ink"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
        <div className="flex flex-col gap-3.5">
          <h2
            id="soon-title"
            className="text-[clamp(26px,2.6vw,36px)] leading-[1.1] font-semibold tracking-[-0.04em]"
            style={{ textWrap: "balance" }}
          >
            {COMING_SOON.title}
          </h2>
          <p className="max-w-[40em] text-base text-neutral">{COMING_SOON.body}</p>
          <p className="flex flex-wrap items-center gap-1.5 text-base text-neutral">
            {COMING_SOON.contactLead}
            <span>
              <a
                id="soon-email"
                href={`mailto:${COMING_SOON.email}`}
                className="font-medium text-ink select-all [background-image:linear-gradient(currentColor,currentColor)] [background-position:0_100%] [background-repeat:no-repeat] [background-size:100%_1px]"
              >
                {COMING_SOON.email}
              </a>
              .
            </span>
            <CopyTextButton text={COMING_SOON.email} label="Copy email address" fallbackSelectId="soon-email" />
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ComingSoon;
