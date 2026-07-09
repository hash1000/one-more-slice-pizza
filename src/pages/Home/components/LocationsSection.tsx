import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface LocationItem {
  label: string;
  icon: ReactElement;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const locations: LocationItem[] = [
  {
    label: "Drive-Thru",
    icon: (
      <svg {...iconProps}>
        <path d="M3 16h18M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16" />
        <circle cx="7.5" cy="18.5" r="1.5" />
        <circle cx="16.5" cy="18.5" r="1.5" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
  {
    label: "Inline",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="9" width="18" height="9" rx="1.5" />
        <path d="M7 9V6.5A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5V9" />
        <path d="M3 13.5h18" />
      </svg>
    ),
  },
  {
    label: "Convenience Stores",
    icon: (
      <svg {...iconProps}>
        <path d="M4 10 5.2 4h13.6L20 10" />
        <path d="M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
        <path d="M9 20v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
      </svg>
    ),
  },
  {
    label: "Travel Centers",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17h13a3 3 0 0 0 0-6h-2" />
        <path d="M12 6H8.5A2.5 2.5 0 0 0 6 8.5V11h6z" />
        <circle cx="7" cy="19" r="1.6" />
        <circle cx="15" cy="19" r="1.6" />
      </svg>
    ),
  },
  {
    label: "Hospitals",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
        <path d="M12 8v6M9 11h6" />
      </svg>
    ),
  },
  {
    label: "Universities",
    icon: (
      <svg {...iconProps}>
        <path d="M12 4 2 9l10 5 10-5-10-5Z" />
        <path d="M6 11.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
      </svg>
    ),
  },
  {
    label: "Airports",
    icon: (
      <svg {...iconProps}>
        <path d="M10.5 3.5 12 2l1.5 1.5v6l6 3.5v2l-6-1.5V18l2 1.5V21l-3.5-1-3.5 1v-1.5l2-1.5v-4.5l-6 1.5v-2l6-3.5z" />
      </svg>
    ),
  },
  {
    label: "& More",
    icon: (
      <svg {...iconProps}>
        <circle cx="6" cy="12" r="1.4" />
        <circle cx="12" cy="12" r="1.4" />
        <circle cx="18" cy="12" r="1.4" />
      </svg>
    ),
  },
];

export function LocationsSection() {
  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className={containerClasses}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-xs font-bold uppercase tracking-widest text-orange"
        >
          Where We Fit
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-center font-display text-4xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-5xl"
        >
          Perfect For <span className="text-orange">Every Location.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
        >
          {locations.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="location-card flex cursor-pointer flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-warm sm:p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                {item.icon}
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
