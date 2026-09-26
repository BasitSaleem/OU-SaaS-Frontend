const HeroScrollCue: React.FC = () => (
  <div
    aria-hidden
    className="absolute bottom-[22px] left-1/2 z-3 h-11 w-px overflow-hidden bg-black/[0.12] [opacity:clamp(0,calc(1_-_var(--p)*8),1)] max-[900px]:hidden"
  >
    <span className="absolute inset-0 animate-[cue_2.4s_var(--ease-in-out)_1.4s_3_both] bg-ink [transform-origin:top]" />
  </div>
);

export default HeroScrollCue;
