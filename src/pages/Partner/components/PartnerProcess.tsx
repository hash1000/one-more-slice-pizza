import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlineUserCircle,
  HiOutlinePhone,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa6";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface ProcessStep {
  icon: typeof HiOutlineEnvelope;
  title: string;
  body: string;
}

const steps: ProcessStep[] = [
  {
    icon: HiOutlineEnvelope,
    title: "We Receive Your Information",
    body: "Your responses help us understand your business and goals.",
  },
  {
    icon: HiOutlineUserCircle,
    title: "Our Team Reviews Your Details",
    body: "We match you with the right team member.",
  },
  {
    icon: HiOutlinePhone,
    title: "Personal Follow-Up",
    body: "We'll contact you within 1 business day to start the conversation.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Customized Information",
    body: "Receive the information that's most relevant to your opportunity.",
  },
  {
    icon: FaHandshake,
    title: "Let's Build Your Future Together",
    body: "We're here to help you grow with One More Slice.",
  },
];

export function PartnerProcess() {
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
        <div className="mx-auto mt-14 grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">
                  {step.body}
                </p>
                {index < steps.length - 1 && (
                  <span
                    className="pointer-events-none absolute right-[-1.5rem] top-8 hidden text-orange/40 lg:block"
                    aria-hidden="true"
                  >
                    &#8594;
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
