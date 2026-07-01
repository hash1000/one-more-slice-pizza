import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { Button } from "../../../components/ui/Button";
import { brochureSection, brochureHref } from "../../../data/joinUs";

export function BrochureCTA() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange via-orange-dark to-charcoal px-6 py-14 text-center shadow-warm-lg sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 -z-0 h-64 w-64 rounded-full bg-cheese/20 blur-[100px]" />
          <h2 className="font-display text-3xl font-black leading-tight tracking-tight text-cream text-balance sm:text-4xl lg:text-5xl">
            {brochureSection.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-cream/80 sm:text-lg">
            {brochureSection.body}
          </p>
          <div className="mt-9">
            <Button href={brochureHref} download variant="light" size="lg">
              Download Franchise Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
