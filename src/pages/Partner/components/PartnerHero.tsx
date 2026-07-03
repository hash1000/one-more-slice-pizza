import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-32 pb-20 text-cream sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-orange/15 blur-[140px]" />
      <div className={containerClasses}>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-black uppercase leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Partner With <span className="text-orange">One More Slice</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-lg font-bold text-cream/90 sm:text-xl"
          >
            Two Powerful Ways to Grow Your Business.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl font-body text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Whether you want to open a new pizza restaurant or add our proven pizza
            program to your existing business, we have the perfect solution for you.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
