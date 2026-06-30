import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { personalityWords } from "../../constants/personality";
import { SectionTag } from "../ui/SectionTag";
import { containerClasses } from "../../lib/layout";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const content = [...personalityWords, ...personalityWords];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="flex shrink-0 items-center gap-8 pr-8"
      >
        {content.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-8 font-display text-5xl font-black uppercase tracking-tight text-cream/15 sm:text-7xl"
          >
            {word}
            <span className="h-2.5 w-2.5 rounded-full bg-orange/60" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Personality() {
  return (
    <section id="personality" className="relative overflow-hidden bg-charcoal py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute -bottom-1/2 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-orange/10 blur-[140px]" />

      <div className={containerClasses}>
        <div className="mx-auto max-w-5xl text-center">
          <SectionTag className="text-orange-light">The Personality</SectionTag>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Impossible to Resist.
          </motion.h2>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4 sm:mt-20 sm:gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
