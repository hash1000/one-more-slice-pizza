import { motion } from "framer-motion";
import { containerClasses } from "../../../utils/layout";
import { fadeUp, viewportOnce } from "../../../utils/motion";

export function MenuHero() {
  return (
    <section className="bg-cream pt-32 pb-2 sm:pt-36 sm:pb-3">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md text-center"
        >
          <h1 className="relative inline-block font-display text-4xl font-black leading-tight tracking-tight text-charcoal sm:text-6xl lg:text-8xl">
            Menu
            <svg
              className="absolute -bottom-4 left-0 w-full text-orange"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 9.5C40 3 100 1 198 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </h1>
          <p className="mt-4 font-body text-base text-muted">
            Fresh, oven-hot. Made throughout the day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
