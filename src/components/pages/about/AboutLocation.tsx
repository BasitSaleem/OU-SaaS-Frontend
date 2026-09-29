import Reveal from "@/components/common-components/Reveal";
import CopyTextButton from "@/components/common-components/CopyTextButton";
import { CONTAINER } from "@/styles/sectionClasses";
import {
  ABOUT_LOCATION_ADDRESS_STRING,
  ABOUT_LOCATION_DESC,
  ABOUT_LOCATION_LINES,
  ABOUT_LOCATION_NAME,
  ABOUT_LOCATION_TITLE,
} from "@/constant/aboutData";

const PinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className="group-hover/addr:[animation:pin-hop_800ms_cubic-bezier(0.34,1.56,0.64,1)_1]"
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const AboutLocation: React.FC = () => (
  <section
    aria-labelledby="abased-title"
    className="py-[clamp(96px,12vw,150px)]"
  >
    <Reveal>
      <div
        className={`${CONTAINER} grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-center gap-[clamp(32px,6vw,96px)] max-[900px]:grid-cols-1`}
      >
        {/* Left: copy text */}
        <div className="flex flex-col gap-5">
          <h2
            id="abased-title"
            className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink [text-wrap:balance]"
          >
            {ABOUT_LOCATION_TITLE}
          </h2>
          <p className="text-[clamp(18px,1.8vw,24px)] leading-[1.45] tracking-[-0.02em] text-neutral [text-wrap:pretty]">
            {ABOUT_LOCATION_DESC}
          </p>
        </div>

        {/* Right: address card */}
        <div className="group/addr relative flex flex-col items-start gap-3.5 rounded-[var(--r-xl)] border border-line bg-white p-[clamp(28px,3vw,40px)] shadow-[0_1px_2px_rgba(11,11,11,0.04),0_16px_40px_-24px_rgba(11,11,11,0.2)] transition-[translate,box-shadow] duration-[420ms] ease-[var(--ease-out)] hover:-translate-y-[3px] hover:shadow-[0_2px_4px_rgba(11,11,11,0.04),0_30px_60px_-30px_rgba(121,92,245,0.4)]">
          {/* Pin icon badge */}
          <span
            aria-hidden
            className="grid size-12 place-items-center rounded-[14px] bg-[rgba(121,92,245,0.1)] text-[#5a3fd6]"
          >
            <PinIcon />
          </span>

          <p className="text-sm font-medium text-[#5f5f5a]">
            Registered Address
          </p>

          <address
            id="ou-address"
            className="flex flex-col gap-0.5 not-italic text-[18px] leading-[1.5] text-ink"
          >
            <span className="font-semibold">{ABOUT_LOCATION_NAME}</span>
            {ABOUT_LOCATION_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>

          <CopyTextButton
            text={ABOUT_LOCATION_ADDRESS_STRING}
            label="Copy address"
            fallbackSelectId="ou-address"
          />
        </div>
      </div>
    </Reveal>
  </section>
);

export default AboutLocation;
