import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface WhyItem {
  label: string;
  icon: JSX.Element;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const whyItems: WhyItem[] = [
  {
    label: "Proven Recipes",
    icon: (
      <svg {...iconProps}>
        <path d="M8 3v6.5L4.5 15A2 2 0 0 0 6.2 18h11.6a2 2 0 0 0 1.7-3L16 9.5V3" />
        <path d="M8 3h8" />
      </svg>
    ),
  },
  {
    label: "Minimal Labor",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M12 9v3M9.5 16.5 12 12l2.5 4.5" />
      </svg>
    ),
  },
  {
    label: "Flexible Equipment",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
      </svg>
    ),
  },
  {
    label: "High Margins",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 15.5 15 9M9.3 9.3h.01M14.7 14.7h.01" />
      </svg>
    ),
  },
  {
    label: "Ongoing Support",
    icon: (
      <svg {...iconProps}>
        <path d="M4 12a8 8 0 0 1 16 0" />
        <path d="M4 12v4a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1Z" />
        <path d="M20 12v4a2 2 0 0 1-2 2h-1v-6h1a1 1 0 0 1 1 1Z" />
        <path d="M9 20h4a2 2 0 0 0 2-2" />
      </svg>
    ),
  },
];

export function WhyItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className={containerClasses}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-xs font-bold uppercase tracking-widest text-orange"
        >
          Why One More Slice
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-center font-display text-4xl font-black leading-tight tracking-tight text-white text-balance sm:text-5xl"
        >
          Quality Pizza. Simple Operation. <span className="text-orange">Maximum Profit.</span>
        </motion.h2>

        <div className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-10">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex w-32 flex-col items-center gap-3 text-center sm:w-36"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-orange">
                {item.icon}
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
