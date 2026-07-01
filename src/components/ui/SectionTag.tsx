import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "../../utils/motion";

interface SectionTagProps {
  children: ReactNode;
  className?: string;
}

export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className={`block font-display text-xs font-bold uppercase tracking-[0.25em] ${className}`}
    >
      {children}
    </motion.span>
  );
}
