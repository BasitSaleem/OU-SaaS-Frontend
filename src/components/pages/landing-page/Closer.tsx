"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import ButtonCloser from "@/components/button/ButtonCloser";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LOGIN_URL, REGISTER_URL } from "@/constant/navigationData";
import { CLOSER_TITLE_LINE_1, CLOSER_TITLE_LINE_2 } from "@/constant/closerData";

const CLOSER_BACKGROUND = [
  "radial-gradient(ellipse 70% 55% at 12% 100%, rgba(10,8,18,1) 0%, transparent 60%)",
  "radial-gradient(ellipse 60% 65% at 68% 8%, rgba(216,42,151,.85) 0%, transparent 58%)",
  "radial-gradient(ellipse 55% 60% at 30% 55%, rgba(159,74,222,.55) 0%, transparent 60%)",
  "radial-gradient(ellipse 65% 60% at 92% 88%, rgba(56,214,209,.7) 0%, transparent 55%)",
  "var(--dark)",
].join(", ");

const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Closer: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const title = useScrollReveal(titleRef, 60);
  const row = useScrollReveal(rowRef, 120);

  return (
    <section
      id="contact"
      style={{ background: CLOSER_BACKGROUND }}
      className="relative overflow-hidden py-[60px]"
    >
      <div aria-hidden style={{ backgroundImage: NOISE_SVG }} className="pointer-events-none absolute inset-0 opacity-35 mix-blend-overlay" />

      <Container className="relative z-[2] flex flex-col items-start gap-10">
        <MainHeading ref={titleRef} style={title.style} className={`${title.className} max-w-[15ch] text-white`}>
          {CLOSER_TITLE_LINE_1}
          <br />
          {CLOSER_TITLE_LINE_2}
        </MainHeading>
        <div ref={rowRef} style={row.style} className={`${row.className} flex flex-wrap items-center gap-6`}>
          <ButtonCloser text="Create your account" href={REGISTER_URL} target="_blank" />
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="border-b border-white/20 pb-0.5 text-[15px] text-white/50 transition-[color,border-color] duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:border-white [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
          >
            Log in to dashboard
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Closer;
