"use client";

import { useState } from "react";
import Reveal from "@/components/common-components/Reveal";
import { CONTAINER } from "@/styles/sectionClasses";

const BusinessInfoStrip: React.FC = () => {
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

  return (
    <section className="pb-[clamp(88px,11vw,140px)]" aria-labelledby="cbiz-title">
      <div className={CONTAINER}>
        <Reveal mode="rise">
          <h2 id="cbiz-title" className="mb-[clamp(28px,3.5vw,44px)] text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0b0b0b] [text-wrap:balance]">
            Business Information
          </h2>

          <div className="grid grid-cols-3 border-t border-[#e4e4e0] max-[760px]:grid-cols-1">
            {/* Address */}
            <div className="flex flex-col items-start gap-3.5 pr-7 pt-7 pb-2 max-[760px]:px-0 max-[760px]:py-6">
              <p className="inline-flex items-center gap-2 text-[14px] font-medium text-[#5f5f5a]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a9a97]">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Address
              </p>
              <address className="flex flex-col gap-0.5 text-[17px] leading-[1.5] not-italic text-[#0b0b0b]">
                <span className="font-semibold">Owners Universe</span>
                <span>4254 Normandy Ct</span>
                <span>Fredericksburg, VA 22408</span>
                <span>United States</span>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4254+Normandy+Ct,+Fredericksburg,+VA+22408,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-[5px] text-[14.5px] font-semibold text-[#0b0b0b] [background:linear-gradient(currentColor,currentColor)_0_100%_/_0_1px_no-repeat] transition-[background-size] duration-400 hover:[background-size:100%_1px]"
              >
                <span>Open in Google Maps</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            {/* General Inquiries */}
            <div className="flex flex-col items-start gap-3.5 border-l border-[#e4e4e0] px-7 pt-7 pb-2 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:px-0 max-[760px]:py-6">
              <p className="inline-flex items-center gap-2 text-[14px] font-medium text-[#5f5f5a]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a9a97]">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                General Inquiries
              </p>
              <div className="inline-flex items-center gap-[9px] text-[15px] font-medium text-[#0b0b0b]">
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
                  className="group/copy relative flex h-7 w-7 items-center justify-center rounded-lg text-[#9a9a97] transition-colors duration-180 hover:bg-[#f7f7f5] hover:text-[#0b0b0b]"
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
                  <span className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 translate-y-1 rounded-md bg-[#0b0b0b] px-2 py-1 text-[11.5px] font-medium text-white opacity-0 whitespace-nowrap transition-all duration-200 group-hover/copy:translate-y-0 group-hover/copy:opacity-100">
                    {copied ? "Copied" : "Copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-start gap-3.5 border-l border-[#e4e4e0] pl-7 pt-7 pb-2 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:px-0 max-[760px]:py-6">
              <p className="inline-flex items-center gap-2 text-[14px] font-medium text-[#5f5f5a]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#9a9a97]">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Business Hours
              </p>
              <dl className="flex w-full flex-col gap-2.5">
                <div className="flex justify-between gap-4 border-b border-dashed border-[#e4e4e0] pb-2.5 text-[15.5px]">
                  <dt className="font-medium text-[#0b0b0b]">Monday &ndash; Friday</dt>
                  <dd className="m-0 tabular-nums text-[#6b6b6b]">9:00 AM &ndash; 6:00 PM EST</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-dashed border-[#e4e4e0] pb-2.5 text-[15.5px]">
                  <dt className="font-medium text-[#0b0b0b]">Saturday &ndash; Sunday</dt>
                  <dd className="m-0 tabular-nums text-[#6b6b6b]">Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BusinessInfoStrip;
