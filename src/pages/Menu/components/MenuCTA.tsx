import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";

export function MenuCTA() {
  return (
    <section className="bg-charcoal py-16 sm:py-20 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className={`${containerClasses} flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left`}
      >
        <div>
          <p className="font-display text-3xl font-black leading-tight tracking-tight text-cream sm:text-4xl">
            <span className="text-orange">One more</span> won&apos;t hurt.
          </p>
          <p className="mt-2 font-body text-base text-cream/70">Go ahead. Order now.</p>
        </div>
        <Link to="/#hero" className={buttonClasses("primary", "lg")}>
          See The Slices
        </Link>
      </motion.div>
    </section>
  );
}
