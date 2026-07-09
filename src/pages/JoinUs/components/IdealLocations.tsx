import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { SectionTag } from "../../../components/ui/SectionTag";
import { idealLocations } from "../../../data/joinUs";

export function IdealLocations() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -bottom-1/3 right-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-orange/10 blur-[140px]" />
      <div className={containerClasses}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-orange-light">Ideal Partner Locations</SectionTag>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl"
          >
            {idealLocations.title}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 font-body text-lg leading-relaxed text-cream/70"
          >
            {idealLocations.body}
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {idealLocations.types.map((type) => (
            <motion.div
              key={type}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/5 px-4 py-3"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
              <span className="font-body text-sm font-medium leading-snug text-cream/85">{type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
