import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { Button } from "../../../components/ui/Button";
import { SectionTag } from "../../../components/ui/SectionTag";
import { joinUsHero, brochureHref } from "../../../data/joinUs";

export function JoinUsHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-32 pb-24 text-cream sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-orange/15 blur-[140px]" />
      <div className={containerClasses}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionTag className="text-orange-light">Partner With Us</SectionTag>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {joinUsHero.title}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-cream/70"
          >
            {joinUsHero.body}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={brochureHref} download variant="primary" size="lg" className="w-full sm:w-auto">
              Download Franchise Brochure
            </Button>
            <Button href="#why-it-matters" variant="light" size="lg" className="w-full sm:w-auto">
              Learn Why We Matter
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
