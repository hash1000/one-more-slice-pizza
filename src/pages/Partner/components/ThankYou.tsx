import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/motion";

const nextSteps = [
  {
    icon: "✉️",
    title: "We Receive Your Information",
    body: "Your responses help us understand your business and goals.",
  },
  {
    icon: "👤",
    title: "Our Team Reviews Your Details",
    body: "We'll match you with the right team member.",
  },
  {
    icon: "📞",
    title: "Personal Follow-Up",
    body: "We'll contact you within 1 business day to start the conversation.",
  },
  {
    icon: "📄",
    title: "Customized Information",
    body: "Receive the information that's most relevant to your opportunity.",
  },
  {
    icon: "🤝",
    title: "Let's Build Your Future Together",
    body: "We're here to help you grow with One More Slice.",
  },
];

export function ThankYou() {
  return (
    <div className="rounded-2xl border border-charcoal/8 bg-white p-8 text-center shadow-soft sm:p-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange text-3xl text-orange">
          ✓
        </div>
        <h2 className="mt-6 font-display text-2xl font-black uppercase text-charcoal sm:text-3xl">
          Thank You!
        </h2>
        <p className="mt-3 font-body text-base font-semibold text-charcoal/80">
          We've received your information.
        </p>
        <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-charcoal/60">
          One of our team members will review your information and be in touch within
          1 business day to discuss the best opportunity for your business.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 text-left sm:grid-cols-5 sm:gap-4 sm:text-center">
        {nextSteps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center gap-3">
            <span className="text-3xl" aria-hidden="true">
              {step.icon}
            </span>
            <p className="font-display text-xs font-bold uppercase tracking-wide text-charcoal">
              {step.title}
            </p>
            <p className="font-body text-xs leading-relaxed text-charcoal/60">
              {step.body}
            </p>
            {index < nextSteps.length - 1 && (
              <span
                className="hidden text-orange sm:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
