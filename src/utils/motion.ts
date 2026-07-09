import type { Variants, Transition } from "framer-motion";

export const easeOut = "easeOut" as const;
export const easeInOut = "easeInOut" as const;

export const enterTransition: Transition = { duration: 0.5, ease: easeOut };
export const hoverTransition: Transition = { duration: 0.2, ease: easeInOut };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export const viewportOnce = { once: true, amount: 0.5 } as const;
