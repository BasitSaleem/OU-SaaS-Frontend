"use client";

import Image from "next/image";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import logoMark from "../../../../public/assets/logo-mark.webp";

const HeroReveal: React.FC = () => {
  const visible = useHeroReveal();
  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-purple animate-[revealOut_0.8s_var(--ease-io)_0.6s_forwards]">
      <Image
        src={logoMark}
        alt="Owners Universe"
        className="h-auto w-[min(220px,32vw)] animate-[splashIn_1s_var(--ease)_forwards,splashSpin_3s_linear_0.4s_infinite]"
        priority
      />
    </div>
  );
};

export default HeroReveal;
