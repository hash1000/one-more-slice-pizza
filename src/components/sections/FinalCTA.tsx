import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { Button } from "../ui/Button";
import { containerClasses } from "../../lib/layout";

interface FinalCTAProps {
  id?: string;
  title?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  download?: boolean;
}

export function FinalCTA({
  id = "cta",
  title = "Every slice leaves you wanting one more.",
  body = "Built for everyday cravings, generous value, and the kind of pizza people come back for.",
  buttonLabel = "Start Building the Brand",
  buttonHref = "#hero",
  download = false,
}: FinalCTAProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange via-orange-dark to-charcoal" />
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-cheese/25 blur-[100px] sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 -z-10 h-80 w-80 rounded-full bg-charcoal/40 blur-[100px] sm:h-[28rem] sm:w-[28rem]" />

      <div className={containerClasses}>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl font-black leading-tight tracking-tight text-cream text-balance sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80"
          >
            {body}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-10"
          >
            <Button href={buttonHref} download={download} variant="light" size="lg">
              {buttonLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
