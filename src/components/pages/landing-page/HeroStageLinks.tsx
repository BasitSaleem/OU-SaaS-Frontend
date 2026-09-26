const PATH_BASE = "fill-none [vector-effect:non-scaling-stroke]";
const LINK_BASE = `${PATH_BASE} stroke-[#d3d3ce] [stroke-dasharray:3_5] [stroke-width:1]`;
const LINK_DRAW = `${PATH_BASE} stroke-ink [stroke-dasharray:1000] [stroke-width:1.5]`;
const LINK_PACKET = `${PATH_BASE} stroke-coral [stroke-dasharray:70_1100] [stroke-linecap:round] [stroke-width:3.5]`;

/** Static connection paths between the stage nodes; --b/--c drive the draw/packet animation via CSS. */
const HeroStageLinks: React.FC = () => (
  <svg className="absolute inset-0 h-full w-full overflow-visible max-[900px]:hidden" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden>
    <g>
      <path d="M 450 250 C 415 250, 415 196, 380 196" pathLength={1000} className={LINK_BASE} />
      <path d="M 450 250 C 415 250, 415 196, 380 196" pathLength={1000} className={LINK_DRAW} style={{ strokeDashoffset: "calc((1 - var(--b)) * 1000)" }} />
      <path d="M 450 250 C 415 250, 415 196, 380 196" pathLength={1000} className={LINK_PACKET} style={{ strokeDashoffset: "calc(70 - var(--c) * 1170)" }} />
    </g>
    <g>
      <path d="M 750 250 C 785 250, 785 196, 820 196" pathLength={1000} className={LINK_BASE} />
      <path d="M 750 250 C 785 250, 785 196, 820 196" pathLength={1000} className={LINK_DRAW} style={{ strokeDashoffset: "calc((1 - var(--b)) * 1000)" }} />
      <path d="M 750 250 C 785 250, 785 196, 820 196" pathLength={1000} className={LINK_PACKET} style={{ strokeDashoffset: "calc(70 - var(--c) * 1170)" }} />
    </g>
    <g>
      <path d="M 600 326 L 600 452" pathLength={1000} className={LINK_BASE} />
      <path
        d="M 600 326 L 600 452"
        pathLength={1000}
        className={`${PATH_BASE} stroke-ink [stroke-width:1.5]`}
        style={{ strokeDasharray: "6 6", strokeDashoffset: 0, opacity: "var(--c)" }}
      />
    </g>
  </svg>
);

export default HeroStageLinks;
