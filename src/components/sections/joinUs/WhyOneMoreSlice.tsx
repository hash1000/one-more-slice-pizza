import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../lib/motion";
import { containerClasses } from "../../../lib/layout";
import { SectionTag } from "../../ui/SectionTag";
import { whyOneMoreSlice } from "../../../constants/joinUs";

export function WhyOneMoreSlice() {
  return (
    <section id="why-it-matters" className="relative bg-white py-24 sm:py-32">
      <div className={containerClasses}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-orange-dark">Why One More Slice Pizza?</SectionTag>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-charcoal sm:text-5xl"
          >
            {whyOneMoreSlice.title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 font-body text-lg leading-relaxed text-charcoal/70"
          >
            {whyOneMoreSlice.body}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 font-body text-base leading-relaxed text-charcoal/55"
          >
            {whyOneMoreSlice.intro}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-orange/15 bg-cream-soft px-6 py-5 font-display text-xl font-black leading-snug text-orange shadow-soft sm:text-2xl"
          >
            {whyOneMoreSlice.callout}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
