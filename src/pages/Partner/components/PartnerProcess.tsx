import { Fragment, useId } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Handshake,
  Headset,
  Info,
  Mail,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  body: string;
  dark: boolean;
}

const steps: ProcessStep[] = [
  {
    icon: Mail,
    title: "We Receive Your Information",
    body: "Your responses help us understand your business and goals.",
    dark: true,
  },
  {
    icon: Headset,
    title: "Our Team Reviews Your Details",
    body: "We match you with the right team member.",
    dark: false,
  },
  {
    icon: Phone,
    title: "Personal Follow-Up",
    body: "We'll contact you within 1 business day to start the conversation.",
    dark: true,
  },
  {
    icon: Info,
    title: "Customized Information",
    body: "Receive the information that's most relevant to your opportunity.",
    dark: false,
  },
];

const finalStep: ProcessStep = {
  icon: Handshake,
  title: "Let's Build Your Future Together",
  body: "We're here to help you grow with One More Slice.",
  dark: true,
};

function StepCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  return (
    <div
      className={`flex h-full flex-col rounded-2xl p-6 ${
        step.dark ? "bg-charcoal text-cream" : "bg-orange text-charcoal"
      }`}
    >
      <Icon
        className={step.dark ? "text-cream" : "text-charcoal"}
        size={32}
        aria-hidden="true"
      />
      <h3
        className={`mt-4 font-display text-lg font-black leading-snug uppercase ${
          step.dark ? "text-orange" : "text-charcoal"
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`mt-2 font-body text-sm leading-relaxed ${
          step.dark ? "text-cream/90" : "text-charcoal/80"
        }`}
      >
        {step.body}
      </p>
    </div>
  );
}

export function PartnerProcess() {
  const arrowheadId = useId();

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-2xl font-black uppercase tracking-tight text-charcoal sm:text-3xl"
        >
          What Happens Next
        </motion.h2>

        <div className="mx-auto mt-14 max-w-6xl">
          {/* Desktop: 4-card row with arrows, then an L-connector into the wide 5th card */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3">
              {steps.map((step, index) => (
                <Fragment key={step.title}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                  >
                    <StepCard step={step} />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <ArrowRight
                      className="self-center text-charcoal/50"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </Fragment>
              ))}
            </div>

            {/* L-shaped connector: down from card 4, left, then down into card 5 */}
            <svg
              className="block h-22.5 w-full overflow-visible"
              viewBox="0 0 1120 90"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id={arrowheadId}
                  markerWidth="8"
                  markerHeight="6"
                  refX="4"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" className="fill-charcoal/40" />
                </marker>
              </defs>
              <path
                d="M 992 0 L 992 45 L 560 45 L 560 82"
                className="stroke-charcoal/25"
                strokeWidth="1.5"
                fill="none"
                markerEnd={`url(#${arrowheadId})`}
              />
            </svg>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mx-auto max-w-lg"
            >
              <StepCard step={finalStep} />
            </motion.div>
          </div>

          {/* Mobile / tablet: stacked cards with simple down arrows */}
          <div className="flex flex-col gap-4 lg:hidden">
            {[...steps, finalStep].map((step, index, all) => (
              <div key={step.title}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <StepCard step={step} />
                </motion.div>
                {index < all.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="text-charcoal/40" size={18} aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
