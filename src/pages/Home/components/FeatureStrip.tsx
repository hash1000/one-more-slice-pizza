import { motion } from "framer-motion";
import bigSizeIcon from "../../../assets/images/hero/feature-big-size.svg";
import tasteIcon from "../../../assets/images/hero/feature-taste.svg";
import freshIcon from "../../../assets/images/hero/feature-fresh.svg";
import heartIcon from "../../../assets/images/hero/feature-heart.svg";
import { containerClasses } from "../../../utils/layout";
import { fadeUp, viewportOnce } from "../../../utils/motion";

const features = [
  {
    label: "Big Size",
    description: "Generous slices in every order.",
    icon: bigSizeIcon,
  },
  {
    label: "Great Taste",
    description: "Bold flavors made with quality ingredients.",
    icon: tasteIcon,
  },
  {
    label: "Made Fresh",
    description: "Hot, fresh and made to order.",
    icon: freshIcon,
  },
  {
    label: "Made For You",
    description: "Your satisfaction is our priority.",
    icon: heartIcon,
  },
];

export function FeatureStrip() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-12 lg:-mt-16">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 rounded-3xl bg-charcoal md:grid-cols-2 md:gap-y-8 lg:grid-cols-4 px-16 py-9"
        >
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className={`flex flex-col gap-2.5 px-10 ${
                i < features.length - 1
                  ? "border-r border-white lg:border-r"
                  : ""
              } border-r-0 md:border-r-0 lg:${i < features.length - 1 ? "border-r" : "border-r-0"}`}
            >
              <img
                src={feature.icon}
                alt=""
                aria-hidden="true"
                className="h-14 w-14 shrink-0 object-contain sm:h-10 sm:w-10"
              />
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-orange">
                {feature.label}
              </p>
              <p className="text-xl leading-snug text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
