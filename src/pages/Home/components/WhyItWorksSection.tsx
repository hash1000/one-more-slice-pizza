import { motion } from "framer-motion";
import ProvenRecipes from "../../../assets/images/why-it-works/proven_recipe.svg";
import MinimalLabor from "../../../assets/images/why-it-works/minimal-labor.svg";
import FlexibleEquipment from "../../../assets/images/why-it-works/flexible-equipment.svg";
import HighMargins from "../../../assets/images/why-it-works/minimal-labor.svg";
import OngoingSupport from "../../../assets/images/why-it-works/ongoing-support.svg";
import { containerClasses } from "../../../utils/layout";
import { fadeUp, viewportOnce } from "../../../utils/motion";

const features = [
  {
    label: "Proven Recipes",
    icon: ProvenRecipes,
  },
  {
    label: "Minimal Labor",
    icon: MinimalLabor,
  },
  {
    label: "Flexible Equipment",
    icon: FlexibleEquipment,
  },
  {
    label: "High Margins",
    icon: HighMargins,
  },
  {
    label: "Ongoing Support",
    icon: OngoingSupport,
  }
];

export function WhyItWorksSection() {
  return (
    <div className="relative z-10 mt-10 sm:mt-12 lg:mt-16">
      <div className={containerClasses}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          Why One More Slice
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-center font-display text-xl md:text-4xl text-orange font-black leading-tight tracking-tight text-balance sm:text-5xl"
        >
          Quality Pizza. Simple Operation. Maximum Profit.
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-6 rounded-3xl bg-charcoal md:grid-cols-2 md:gap-y-10 lg:grid-cols-5 px-16 py-9 mt-10 sm:mt-12 lg:mt-16"
        >
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className={`flex flex-col items-center gap-2.5 px-10  ${
                i < features.length - 1
                  ? "border-r border-white lg:border-r"
                  : ""
              } border-r-0 md:border-r-0 lg:${i < features.length - 1 ? "border-r" : "border-r-0"}`}
            >
              <img
                src={feature.icon}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 object-contain sm:h-10 sm:w-10 text-orange"
              />
              <p className="font-display  text-xl md:text-2xl font-bold uppercase tracking-wide text-center text-white max-w-40">
                {feature.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
