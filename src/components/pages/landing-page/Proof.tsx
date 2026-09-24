"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import ButtonOutlineDark from "@/components/button/ButtonOutlineDark";
import ProofPerkCard from "./ProofPerkCard";
import { useAmbientParallax } from "@/hooks/useAmbientParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LOGIN_URL } from "@/constant/navigationData";
import { PROOF_HEADING, PROOF_PARAGRAPH, PROOF_PERKS } from "@/constant/proofData";
import logoMark from "../../../../public/assets/logo-mark.webp";

const Proof: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const blob1 = useAmbientParallax<HTMLDivElement>(0.4);
  const blob2 = useAmbientParallax<HTMLDivElement>(-0.3);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const heading = useScrollReveal(headingRef, 60);
  const paragraph = useScrollReveal(paragraphRef, 120);
  const ctaRow = useScrollReveal(ctaRowRef, 180);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionRef.current;
    const icon = iconRef.current;
    if (!section || !icon) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Trigger point: starts when section top is 100px above viewport bottom
        const triggerStart = windowH - 100;
        const totalDistance = windowH + rect.height * 0.4;
        const currentDistance = triggerStart - rect.top;
        const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));

        // Smoothly interpolate from -150px to +50px
        const y = -150 + progress * 200;
        icon.style.transform = `translateY(calc(-50% + ${y.toFixed(1)}px))`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-charcoal py-[60px]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={blob1}
          className="absolute top-[-15%] left-[-8%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(121,92,245,.14),transparent_70%)] blur-[60px]"
        />
        <div
          ref={blob2}
          className="absolute right-[-4%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(249,92,91,.1),transparent_70%)] blur-[60px]"
        />
      </div>

      <div
        ref={iconRef}
        className="pointer-events-none absolute top-1/2 right-[8%] z-[1] will-change-transform max-[900px]:right-[-10%]"
        style={{
          transform: "translateY(calc(-50% - 150px))",
        }}
      >
        <Image
          src={logoMark}
          alt=""
          aria-hidden
          className="w-[clamp(360px,38vw,560px)] animate-[proofSpin_30s_linear_infinite] opacity-10 max-[900px]:w-[280px] max-[900px]:opacity-[0.04]"
        />
      </div>

      <Container className="relative z-[2]">
        <MainHeading ref={headingRef} className={`${heading.className} mb-6 max-w-[760px] text-white`}>
          {PROOF_HEADING}
        </MainHeading>
        <Paragraph
          ref={paragraphRef}
          style={paragraph.style}
          className={`${paragraph.className} mb-16 max-w-[540px] text-g400`}
        >
          {PROOF_PARAGRAPH}
        </Paragraph>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] bg-white/[0.06] md:grid-cols-3">
          {PROOF_PERKS.map((perk, i) => (
            <ProofPerkCard key={perk.title} perk={perk} delayMs={i * 60} />
          ))}
        </div>

        <div
          ref={ctaRowRef}
          style={ctaRow.style}
          className={`${ctaRow.className} mt-14 flex flex-wrap items-center gap-[18px]`}
        >
          <ButtonPrimary text="View Products" href="#products" magnetic />
          <ButtonOutlineDark text="Login to Dashboard" href={LOGIN_URL} target="_blank" />
        </div>
      </Container>
    </section>
  );
};

export default Proof;
