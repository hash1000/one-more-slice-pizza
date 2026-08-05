import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface SupportStep {
  number: string;
  label: string;
  title: string;
  body: string;
  accent: "dark" | "light";
}

const steps: SupportStep[] = [
  {
    number: "1",
    label: "Discover",
    title: "Opportunity Review",
    body: "We learn about your goals, market, experience and existing locations.",
    accent: "dark",
  },
  {
    number: "2",
    label: "Align",
    title: "Format + Site Fit",
    body: "We help determine whether franchising or licensing best matches the opportunity.",
    accent: "light",
  },
  {
    number: "3",
    label: "Launch",
    title: "Training + Launch",
    body: "Your team receives the operating guidance and launch support needed to get started.",
    accent: "dark",
  },
  {
    number: "4",
    label: "Grow",
    title: "Ongoing Support",
    body: "Operational resources and brand marketing support help keep the program moving forward.",
    accent: "light",
  },
];

export function PartnerSupport() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-display text-xs font-bold uppercase tracking-widest text-charcoal/50">
            Partner Support
          </span>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl">
            From first conversation to opening day.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
            We help you evaluate the opportunity, select the right format and
            prepare your team to launch One More Slice.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-6xl rounded-2xl bg-orange p-6 sm:p-10"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="overflow-hidden rounded-lg bg-cream/90"
              >
                <span
                  className={`block h-1.5 w-full ${
                    step.accent === "dark" ? "bg-charcoal" : "bg-orange-light"
                  }`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange font-display text-xl font-black text-cream">
                    {step.number}
                  </span>
                  <p className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-charcoal/60">
                    {step.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-black text-orange">
                    {step.title}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
