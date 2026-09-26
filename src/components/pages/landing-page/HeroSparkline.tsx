interface HeroSparklineProps {
  areaPoints: string;
  linePoints: string;
}

const HeroSparkline: React.FC<HeroSparklineProps> = ({ areaPoints, linePoints }) => (
  <svg className="w-full [height:calc(56*var(--u))]" viewBox="0 0 280 64" preserveAspectRatio="none" aria-hidden>
    <polyline points={areaPoints} className="fill-coral/[0.08] stroke-none" />
    <polyline
      points={linePoints}
      pathLength={1}
      className="fill-none stroke-coral [stroke-linejoin:round] [stroke-width:1.75] [vector-effect:non-scaling-stroke]"
      style={{ strokeDasharray: 1, strokeDashoffset: "calc(1 - var(--b))" }}
    />
  </svg>
);

export default HeroSparkline;
