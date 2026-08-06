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
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl"
          >
            Your Next Opportunity Could Start With One More Slice.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg"
          >
            If you're looking for a food concept with broad consumer appeal,
            multiple dayparts and the flexibility to fit different operating
            environments, we'd like to hear from you.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-display text-2xl font-black uppercase leading-tight text-orange sm:text-3xl"
          >
            Let's Build Something Profitable
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
