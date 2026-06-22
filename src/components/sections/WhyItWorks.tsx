import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { whyItWorksCards, whyItWorksIntro } from "../../constants/whyItWorks";
import { WhyUsCard } from "../ui/WhyUsCard";
import { SectionTag } from "../ui/SectionTag";
import { containerClasses } from "../../lib/layout";

export function WhyItWorks() {
  return (
    <section id="why" className="relative overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-orange/10 blur-[120px]" />

      <div className={containerClasses}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTag className="text-orange-dark">Why Us</SectionTag>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-charcoal sm:text-5xl"
          >
            Why One More{" "}
            <span className="relative inline-block whitespace-nowrap text-orange">
              Slice?
              <svg
                className="absolute -bottom-1 left-0 w-full text-cheese"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9.5C40 3 100 1 198 7"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 font-body text-lg leading-relaxed text-charcoal/70"
          >
            {whyItWorksIntro}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyItWorksCards.map((card, i) => (
            <WhyUsCard key={card.title} card={card} delay={(i % 4) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
