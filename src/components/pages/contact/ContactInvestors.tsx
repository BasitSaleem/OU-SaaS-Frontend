"use client";

import { useState } from "react";
import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";

const ContactInvestors: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("accounts@ownersuniverse.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback
    }
  };

  const handleTopicPick = (topicName: string) => {
    window.dispatchEvent(
      new CustomEvent("pickContactTopic", { detail: { topic: topicName } })
    );

    const contactFormSection = document.getElementById("contact-form");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const messageInput = document.getElementById("cf-message");
        if (messageInput) messageInput.focus({ preventScroll: true });
      }, 500);
    }
  };

  return (
    <section className="pb-[clamp(120px,13vw,170px)]" aria-labelledby="cpart-title">
      <div className={CONTAINER}>
        <Reveal mode="rise">
          <div className="grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center gap-[clamp(28px,5vw,72px)] rounded-[28px] bg-[#0b0b0b] p-[clamp(32px,5vw,60px)] text-[#f7f7f5] max-[1000px]:grid-cols-1">
            {/* Left Column */}
            <div>
              <h2 id="cpart-title" className="text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#f7f7f5] [text-wrap:balance]">
                Investors &amp; Partnerships
              </h2>
              <p className="mt-4 text-[clamp(18px,1.8vw,24px)] leading-[1.45] tracking-[-0.02em] text-[#a3a3a0]">
                Interested in partnership opportunities or investment discussions? Reach out to our team directly.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start gap-3.5">
              {/* Email Line */}
              <div className="inline-flex items-center gap-[9px] text-[17px] font-medium text-[#f7f7f5]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#9a9a97]">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:accounts@ownersuniverse.com" className="break-all [background:linear-gradient(currentColor,currentColor)_0_100%_/_0_1px_no-repeat] transition-[background-size] duration-400 hover:[background-size:100%_1px]">
                  accounts@ownersuniverse.com
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="group/copy relative flex h-7 w-7 items-center justify-center rounded-lg text-[#9a9a97] transition-colors duration-180 hover:bg-[#1f1f1f] hover:text-[#f7f7f5]"
                  aria-label="Copy accounts@ownersuniverse.com"
                >
                  {copied ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                  <span className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 translate-y-1 rounded-md bg-[#1a1a1a] px-2 py-1 text-[11.5px] font-medium text-white opacity-0 whitespace-nowrap transition-all duration-200 group-hover/copy:translate-y-0 group-hover/copy:opacity-100">
                    {copied ? "Copied" : "Copy"}
                  </span>
                </button>
              </div>

              {/* Subject Suggestion */}
              <p className="mt-2 text-[14px] font-medium text-[#8a8a87]">Subject line suggestion</p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleTopicPick("Partnership Inquiry")}
                  className="group inline-flex h-10 items-center gap-1.5 rounded-full border border-[#333] px-4 text-[14px] font-medium text-[#f7f7f5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7f7f5] hover:bg-white/6"
                >
                  <span>&quot;Partnership Inquiry&quot;</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8a8a87] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f7f7f5]">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleTopicPick("Investment Inquiry")}
                  className="group inline-flex h-10 items-center gap-1.5 rounded-full border border-[#333] px-4 text-[14px] font-medium text-[#f7f7f5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f7f7f5] hover:bg-white/6"
                >
                  <span>&quot;Investment Inquiry&quot;</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-[#8a8a87] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f7f7f5]">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactInvestors;
