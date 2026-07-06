import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import slice1 from "../assets/images/about/slices/slice-1.png";
import slice2 from "../assets/images/about/slices/slice-2.png";
import slice3 from "../assets/images/about/slices/slice-3.png";
import slice4 from "../assets/images/about/slices/slice-4.png";
import slice5 from "../assets/images/about/slices/slice-5.png";
import slice6 from "../assets/images/about/slices/slice-6.png";

// Spec: src/assets/handoff/SPEC.md — bisector unit vectors per slice,
// spread ratio is 7.5% of container width, applied via CSS custom properties.
const SLICES = [
  { src: slice1, x: 0.5, y: -0.866 },
  { src: slice2, x: 1, y: 0 },
  { src: slice3, x: 0.5, y: 0.866 },
  { src: slice4, x: -0.5, y: 0.866 },
  { src: slice5, x: -1, y: 0 },
  { src: slice6, x: -0.5, y: -0.866 },
];

const SPREAD_RATIO = 0.075;
const TIMES = [0, 0.1, 0.42, 0.58, 0.9, 1];
const CYCLE_DURATION = 7;

const baseTransition = {
  duration: CYCLE_DURATION,
  times: TIMES,
  ease: [0.45, 0, 0.25, 1] as const,
  repeat: Infinity,
};

type PizzaSliceAnimationProps = {
  className?: string;
};

export function PizzaSliceAnimation({ className }: PizzaSliceAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });

  const shouldAnimate = !prefersReducedMotion && isInView;

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {SLICES.map((slice, index) => {
        const tx = `${slice.x * SPREAD_RATIO * 100}%`;
        const ty = `${slice.y * SPREAD_RATIO * 100}%`;

        return (
          <motion.img
            key={index}
            src={slice.src}
            alt={index === 0 ? "Pizza separating into slices" : ""}
            aria-hidden={index === 0 ? undefined : true}
            className="absolute inset-0 h-full w-full"
            loading="eager"
            decoding="async"
            animate={
              shouldAnimate
                ? { x: [0, 0, tx, tx, 0, 0], y: [0, 0, ty, ty, 0, 0] }
                : { x: 0, y: 0 }
            }
            transition={shouldAnimate ? baseTransition : { duration: 0 }}
          />
        );
      })}
    </div>
  );
}
