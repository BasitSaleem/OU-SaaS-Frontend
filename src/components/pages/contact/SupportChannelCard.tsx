"use client";

import { useState } from "react";
import Image from "next/image";
import type { SupportChannel } from "@/constant/contactChannelsData";

const CopyButton: React.FC<{ email: string }> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group/copy relative flex h-7 w-7 items-center justify-center rounded-lg text-[#9a9a97] transition-colors duration-180 hover:bg-[#f7f7f5] hover:text-[#0b0b0b]"
      aria-label={`Copy ${email}`}
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
  );
};

const SupportChannelCard: React.FC<{ channel: SupportChannel }> = ({ channel }) => {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });
  const isInk = channel.id === "account";
  const isPulse = channel.id === "pulse";

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  const toneRgb = isInk ? "11 11 11" : isPulse ? "249 92 91" : "121 92 245";

  return (
    <div
      onPointerMove={handlePointerMove}
      style={
        {
          "--dx": mousePos.x,
          "--dy": mousePos.y,
        } as React.CSSProperties
      }
      className="group relative flex flex-col gap-3 overflow-hidden rounded-[24px] border border-[#e4e4e0] bg-white p-7 shadow-[0_1px_2px_rgba(11,11,11,0.04),0_12px_32px_-22px_rgba(11,11,11,0.2)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgb(var(--tone-rgb)/0.22)] hover:shadow-[0_2px_4px_rgba(11,11,11,0.04),0_34px_60px_-32px_rgba(var(--tone-rgb)/0.45)]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-1 opacity-0 transition-opacity duration-400 ease-out group-hover:opacity-100"
        style={{
          background: `radial-gradient(340px circle at var(--dx) var(--dy), rgb(${toneRgb} / 0.08), transparent 70%)`,
        }}
      />

      <div className="mb-1.5 flex h-[44px] items-center">
        {channel.iconSrc ? (
          <Image src={channel.iconSrc} alt={channel.title} className="h-7 w-auto object-contain" />
        ) : (
          <div className="grid h-[44px] w-[44px] place-items-center rounded-[13px] bg-[#0b0b0b] text-[#f7f7f5] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        )}
      </div>

      <h2 className="text-[21px] font-semibold tracking-[-0.03em] text-[#0b0b0b]">
        {channel.title}
      </h2>
      <p className="text-[15px] leading-[1.6] text-[#6b6b6b]">
        {channel.desc}
      </p>

      <div className="mt-auto flex flex-col gap-2.5 border-t border-[#e4e4e0] pt-[18px]">
        {channel.rows.map((row) => (
          <div key={row.text} className="flex min-h-[28px] items-center gap-[9px] text-[15px] font-medium text-[#0b0b0b]">
            {row.icon === "mail" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#9a9a97]">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#9a9a97]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            )}
            {row.href ? (
              <a href={row.href} className="break-all [background:linear-gradient(currentColor,currentColor)_0_100%_/_0_1px_no-repeat] transition-[background-size] duration-400 hover:[background-size:100%_1px]">
                {row.text}
              </a>
            ) : (
              <span>{row.text}</span>
            )}
            {row.icon === "mail" && row.href && (
              <CopyButton email={row.text} />
            )}
          </div>
        ))}

        {channel.note && (
          <div className="flex items-center gap-[9px] text-[14px] font-normal text-[#6b6b6b]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#9a9a97]">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{channel.note}</span>
          </div>
        )}

        {channel.cta && (
          <a
            href={channel.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-1 inline-flex items-center gap-[5px] self-start text-[14.5px] font-semibold text-[#0b0b0b] [background:linear-gradient(currentColor,currentColor)_0_100%_/_0_1px_no-repeat] transition-[background-size] duration-400 hover:[background-size:100%_1px]"
          >
            <span>{channel.cta.text}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default SupportChannelCard;
