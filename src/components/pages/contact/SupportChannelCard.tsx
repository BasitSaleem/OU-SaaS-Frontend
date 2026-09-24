"use client";

import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import ContactInfoIcon from "./ContactInfoIcon";
import CardHeading from "@/components/pages/typography/CardHeading";
import CardDesc from "@/components/pages/typography/CardDesc";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { SupportChannel } from "@/constant/contactChannelsData";

const CTA_ARROW = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[13px] w-[13px]">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const ICON_BG_CLASS: Record<SupportChannel["id"], string> = {
  account: "bg-purple-10 text-purple",
  pulse: "bg-coral-10 text-coral",
  inventory: "bg-[rgba(121,92,245,.06)] text-purple",
};

const SupportChannelCard: React.FC<{ channel: SupportChannel; delayMs: number }> = ({ channel, delayMs }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reveal = useScrollReveal(cardRef, delayMs);
  const isAccount = channel.id === "account";
  const isBrand = channel.id !== "account";

  return (
    <div
      ref={cardRef}
      style={reveal.style}
      className={clsx(
        reveal.className,
        "group flex flex-col rounded-[22px] border border-g200 bg-white p-[clamp(26px,3vw,32px)] transition-[border-color,transform,box-shadow] duration-[0.35s] ease-[var(--ease)]",
        "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[5px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-transparent [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_20px_48px_rgba(20,10,40,.09)]",
        isAccount &&
          "max-[900px]:flex-col max-[900px]:gap-0 col-span-full flex-row items-start gap-[clamp(24px,3vw,32px)] p-[clamp(26px,3vw,32px)_clamp(30px,4vw,40px)]"
      )}
    >
      <div
        className={clsx(
          "flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] transition-transform duration-300 ease-[var(--ease)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:rotate-[-4deg] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.08]",
          isAccount ? "mb-0" : "mb-5",
          ICON_BG_CLASS[channel.id]
        )}
      >
        {channel.iconSrc ? (
          <Image src={channel.iconSrc} alt="" className="h-[34px] w-[34px] object-contain" />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        )}
      </div>

      <div className={clsx("flex flex-1 flex-col", isAccount && "min-w-0")}>
        <CardHeading className="mb-2 !text-[1.125rem] lg:!text-[1.125rem] xl:!text-[1.125rem] !font-medium !tracking-[-0.015em]">
          {channel.title}
        </CardHeading>
        <CardDesc className={clsx("!text-[13.5px] !leading-[1.6]", isAccount ? "mb-0 max-w-[560px]" : "mb-5")}>
          {channel.desc}
        </CardDesc>

        <div className={clsx("flex flex-col", isAccount ? "mt-4 mb-0" : "mb-auto")}>
          {channel.rows.map((row, i) => (
            <div
              key={row.text}
              className={clsx(
                "flex items-center gap-2.5",
                isAccount ? "py-0" : "border-t border-g100 py-2.5",
                !isAccount && i === 0 && "border-t-0 pt-0"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-g100 text-g500">
                <ContactInfoIcon name={row.icon} className="h-3 w-3" />
              </div>
              {row.href ? (
                <a href={row.href} className="font-heading text-[13.5px] tracking-[-0.005em] text-purple transition-colors duration-200 hover:text-purple-d">
                  {row.text}
                </a>
              ) : (
                <span className="font-heading text-[13.5px] tracking-[-0.005em] text-charcoal">{row.text}</span>
              )}
            </div>
          ))}
        </div>

        {channel.note && <p className="mt-3 text-xs leading-[1.5] text-g400">{channel.note}</p>}

        {channel.cta && (
          <div className="mt-5 border-t border-g100 pt-[18px]">
            <a
              href={channel.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "inline-flex items-center gap-[7px] rounded-full px-[18px] py-2.5 font-heading text-[13px] font-semibold text-white transition-[gap,background] duration-200 ease-[var(--ease)] hover:gap-2.5",
                isBrand ? "bg-purple hover:bg-purple-d" : "bg-charcoal"
              )}
            >
              {channel.cta.text}
              {CTA_ARROW}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportChannelCard;
