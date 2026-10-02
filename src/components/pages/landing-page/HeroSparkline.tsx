import { useId } from "react";

interface HeroSparklineProps {
  /** "x,y x,y …" in the 280×64 viewBox; drawn as one smooth curve through every point. */
  linePoints: string;
}

const W = 280;
const H = 64;

/** Catmull-Rom spline through the points, expressed as cubic Béziers so the line has no corners. */
function smoothPath(points: [number, number][]): string {
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

const HeroSparkline: React.FC<HeroSparklineProps> = ({ linePoints }) => {
  const gradientId = useId();
  const points = linePoints.split(" ").map((p) => p.split(",").map(Number) as [number, number]);
  const line = smoothPath(points);
  const area = `${line} L ${points[points.length - 1][0]} ${H} L ${points[0][0]} ${H} Z`;
  const last = points[points.length - 1];

  return (
    <div className="relative w-full [height:calc(56*var(--u))]">
      <svg className="block size-full overflow-visible" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f95c5b" stopOpacity="0.2" />
            <stop offset="1" stopColor="#f95c5b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gradientId})`} className="stroke-none" style={{ opacity: "var(--b)" }} />
        <path
          d={line}
          pathLength={1}
          className="fill-none stroke-coral [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2] [vector-effect:non-scaling-stroke]"
          style={{ strokeDasharray: 1, strokeDashoffset: "calc(1 - var(--b))" }}
        />
      </svg>
      <span
        aria-hidden
        className="absolute right-0 size-[calc(8*var(--u))] -translate-y-1/2 translate-x-1/2 rounded-full bg-coral shadow-[0_0_0_calc(3*var(--u))_#fff] after:absolute after:inset-0 after:rounded-full after:bg-coral after:animate-[spark-ping_2400ms_var(--ease-out)_infinite] after:content-['']"
        style={{ top: `${(last[1] / H) * 100}%`, opacity: "clamp(0, calc(var(--b) * 3 - 2), 1)" }}
      />
    </div>
  );
};

export default HeroSparkline;
