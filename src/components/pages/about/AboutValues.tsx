"use client";

import { useRevealOnce } from "@/hooks/useRevealOnce";
import { CONTAINER } from "@/styles/sectionClasses";
import { ABOUT_VALUES, ABOUT_VALUES_TITLE } from "@/constant/aboutData";

// Mirrors the Reveal component's STAGGER constants — targeting <li> children directly.
const STAGGER_BASE =
  "[&>*]:transition-[opacity,translate] [&>*]:duration-[900ms] [&>*]:ease-[cubic-bezier(0.16,1,0.3,1)] [&>*:nth-child(2)]:delay-[90ms] [&>*:nth-child(3)]:delay-[180ms] [&>*:nth-child(4)]:delay-[270ms] motion-reduce:[&>*]:translate-y-0! motion-reduce:[&>*]:opacity-100!";
const STAGGER_OUT = "[&>*]:translate-y-10 [&>*]:opacity-0";
const STAGGER_IN = "[&>*]:translate-y-0 [&>*]:opacity-100";

const AboutValues: React.FC = () => {
  const { ref, isIn } = useRevealOnce<HTMLOListElement>();

  return (
    <section
      aria-labelledby="avalues-title"
      className="pb-[clamp(96px,12vw,150px)]"
    >
      <div className={CONTAINER}>
        <h2
          id="avalues-title"
          className="mb-[clamp(32px,4vw,48px)] text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink [text-wrap:balance]"
        >
          {ABOUT_VALUES_TITLE}
        </h2>

        <ol
          ref={ref}
          className={`m-0 list-none border-t border-line p-0 ${STAGGER_BASE} ${isIn ? STAGGER_IN : STAGGER_OUT}`}
        >
          {ABOUT_VALUES.map((item) => (
            <li
              key={item.num}
              className="group relative isolate grid grid-cols-[clamp(96px,12vw,180px)_minmax(0,1fr)] items-baseline gap-[clamp(16px,3vw,40px)] border-b border-line px-3 py-[clamp(28px,3.5vw,44px)] max-[560px]:grid-cols-1 max-[560px]:gap-2.5"
            >
              {/* Hover white card — absolutely positioned behind the row */}
              <div
                aria-hidden
                className="absolute [inset:-1px_0] -z-10 scale-[0.98] rounded-[20px] bg-white opacity-0 transition-[opacity,scale] duration-[420ms] ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100"
              />

              {/* Ordinal number */}
              <span
                aria-hidden
                className="text-[clamp(48px,6vw,84px)] font-semibold leading-[0.9] tracking-[-0.06em] text-purple [font-variant-numeric:tabular-nums] transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2 max-[560px]:group-hover:translate-x-0"
              >
                {item.num}
              </span>

              {/* Copy: heading + description */}
              <div className="flex max-w-[40em] flex-col gap-3">
                <h3 className="self-start pb-1 text-[clamp(22px,2.2vw,30px)] font-semibold leading-[1.15] tracking-[-0.035em] text-ink [background-image:linear-gradient(var(--purple),var(--purple))] [background-position:0_100%] [background-repeat:no-repeat] [background-size:0_2px] [transition:background-size_600ms_var(--ease-out)] group-hover:[background-size:100%_2px]">
                  {item.title}
                </h3>
                <p className="text-[16.5px] leading-[1.6] text-neutral">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AboutValues;
