import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import pizzaPhoto from "../assets/images/hero/hero-pizza.jpeg";

// ---- Tunable constants -----------------------------------------------------

const SLICE_COUNT = 8;
const VIEW_SIZE = 600;
// The source photo (hero-pizza.jpeg, 1254x1254px) is a real pizza already
// cut into 8 wedges. Its true center sits at ~(627, 628)px and its first
// cut line is ~1deg past straight-up, mapped 1:1 into this 0-600 viewBox
// (both are ~600px square once accounting for JPEG margins), giving:
const CENTER = { x: 300, y: 300.5 };
const CLIP_RADIUS = 298; // slightly past the visible crust edge, so nothing gets cropped
const ANGLE_OFFSET_DEG = 1;
const WEDGE_OVERLAP_DEG = 0;
const SPREAD_RATIO = 0.035;
const CYCLE_DURATION = 8;

// ---- Geometry helpers -------------------------------------------------------

type SliceGeometry = {
  index: number;
  clipId: string;
  path: string;
  tx: number;
  ty: number;
};

function wedgePath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const startRad = (startDeg * Math.PI) / 180;
  const endRad = (endDeg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const x2 = cx + r * Math.cos(endRad);
  const y2 = cy + r * Math.sin(endRad);
  return `M ${cx} ${cy} L ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 0 1 ${x2.toFixed(3)} ${y2.toFixed(3)} Z`;
}

function buildSliceGeometry(sliceCount: number, center: typeof CENTER, radius: number, spreadRatio: number): SliceGeometry[] {
  const anglePerSlice = 360 / sliceCount;
  const spread = spreadRatio * (radius * 2);

  return Array.from({ length: sliceCount }, (_, index) => {
    const startAngle = -90 + ANGLE_OFFSET_DEG + index * anglePerSlice;
    const endAngle = startAngle + anglePerSlice;
    const bisectorAngle = startAngle + anglePerSlice / 2;
    const bisectorRad = (bisectorAngle * Math.PI) / 180;

    return {
      index,
      clipId: `pizza-slice-clip-${index}`,
      path: wedgePath(center.x, center.y, radius, startAngle - WEDGE_OVERLAP_DEG, endAngle + WEDGE_OVERLAP_DEG),
      tx: spread * Math.cos(bisectorRad),
      ty: spread * Math.sin(bisectorRad),
    };
  });
}

// ---- Animation config --------------------------------------------------------

const TIMES = [0, 0.3, 0.55, 0.85, 1];

const baseTransition = {
  duration: CYCLE_DURATION,
  times: TIMES,
  ease: "easeInOut" as const,
  repeat: Infinity,
};

// ---- Component ---------------------------------------------------------------

type PizzaSliceAnimationProps = {
  className?: string;
};

export function PizzaSliceAnimation({ className }: PizzaSliceAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });

  const slices = useMemo(
    () => buildSliceGeometry(SLICE_COUNT, CENTER, CLIP_RADIUS, SPREAD_RATIO),
    []
  );

  const shouldAnimate = !prefersReducedMotion && isInView;

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
        className="h-full w-full"
        role="img"
        aria-label="Pizza separating into slices"
      >
        <defs>
          <clipPath id="pizza-crust-clip">
            <circle cx={CENTER.x} cy={CENTER.y} r={CLIP_RADIUS} />
          </clipPath>
          {slices.map((slice) => (
            <clipPath key={slice.clipId} id={slice.clipId}>
              <path d={slice.path} />
            </clipPath>
          ))}
        </defs>

        {/* Base layer: the whole photo, clipped to the crust circle.
            Guarantees a seamless assembled pizza regardless of any
            hairline antialiasing gap the 8 clipped copies above it might
            otherwise reveal, without exposing the photo's square corners. */}
        <image
          href={pizzaPhoto}
          x={0}
          y={0}
          width={VIEW_SIZE}
          height={VIEW_SIZE}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#pizza-crust-clip)"
          {...{ loading: "eager", decoding: "async" }}
        />

        {slices.map((slice) => {
          const rotationDirection = slice.index % 2 === 0 ? 1 : -1;
          const rotationAmount = 0.5 * rotationDirection;

          return (
            <motion.g
              key={slice.index}
              aria-hidden="true"
              style={{
                transformBox: "view-box",
                transformOrigin: `${CENTER.x}px ${CENTER.y}px`,
              }}
              animate={
                shouldAnimate
                  ? {
                      x: [0, slice.tx, slice.tx, 0, 0],
                      y: [0, slice.ty, slice.ty, 0, 0],
                      rotate: [0, rotationAmount, rotationAmount, 0, 0],
                    }
                  : { x: 0, y: 0, rotate: 0 }
              }
              transition={shouldAnimate ? baseTransition : { duration: 0 }}
            >
              <g clipPath={`url(#${slice.clipId})`}>
                <image
                  href={pizzaPhoto}
                  x={0}
                  y={0}
                  width={VIEW_SIZE}
                  height={VIEW_SIZE}
                  preserveAspectRatio="xMidYMid slice"
                  loading="eager"
                  decoding="async"
                />
              </g>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
