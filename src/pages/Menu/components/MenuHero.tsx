import { motion } from "framer-motion";
import { containerClasses } from "../../../utils/layout";
import { fadeUp, viewportOnce } from "../../../utils/motion";

export function MenuHero() {
  return (
    <section className="bg-white pt-32 pb-2 sm:pt-36 sm:pb-3">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <h1 className="relative inline-block font-display text-6xl font-black leading-tight tracking-tight text-charcoal">
            Our Menu
            <svg
              className="absolute -bottom-3 left-0 w-full text-orange"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 9.5C40 3 100 1 198 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="mt-4 font-body text-base">
            <span className="text-charcoal text-2xl font-extrabold">Fresh, oven-hot.</span>{" "}
            <span className="text-orange text-2xl font-black">Made throughout the day.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
