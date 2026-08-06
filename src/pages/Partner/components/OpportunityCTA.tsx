import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

export function OpportunityCTA() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Your Next Opportunity Could Start
            <br />
            With <span className="text-orange">One More Slice</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/70 sm:text-lg"
          >
            If you're looking for a food concept with broad consumer appeal,
            multiple dayparts and the flexibility to fit different operating
            environments, we'd like to hear from you.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 max-w-3xl border-t border-charcoal/15"
          />
        </motion.div>
      </div>
    </section>
  );
}
