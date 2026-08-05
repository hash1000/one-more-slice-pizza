import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Handshake,
  Mail,
  Phone,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { fadeUp } from "../../../utils/motion";

interface NextStep {
  icon: LucideIcon;
  title: string;
  body: string;
}

const nextSteps: NextStep[] = [
  {
    icon: Mail,
    title: "We Receive Your Information",
    body: "Your responses help us understand your business and goals.",
  },
  {
    icon: UserCheck,
    title: "Our Team Reviews Your Details",
    body: "We'll match you with the right team member.",
  },
  {
    icon: Phone,
    title: "Personal Follow-Up",
    body: "We'll contact you within 1 business day to start the conversation.",
  },
  {
    icon: FileText,
    title: "Customized Information",
    body: "Receive the information that's most relevant to your opportunity.",
  },
  {
    icon: Handshake,
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
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h2 className="mt-6 font-display text-2xl font-black uppercase text-charcoal sm:text-3xl">
          Thank You!
        </h2>
        <p className="mt-3 font-body text-base font-semibold text-charcoal/80">
          We've received your information.
        </p>
        <p className="mx-auto mt-3 max-w-md font-body text-base leading-relaxed text-muted">
          One of our team members will review your information and be in touch within
          1 business day to discuss the best opportunity for your business.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 text-left sm:grid-cols-2 sm:gap-6 sm:text-center md:grid-cols-3 lg:grid-cols-5">
        {nextSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                {step.title}
              </p>
              <p className="font-body text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
