import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface Stat {
  title: string;
  body: string;
}

const stats: Stat[] = [
  {
    title: "33% Bigger Slice",
    body: "Six oversized slices from every 14-inch pizza.",
  },
  {
    title: "15 Big Varieties",
    body: "Signature, breakfast and sweet slices.",
  },
  {
    title: "Multiple Dayparts",
    body: "A menu built to sell beyond lunch and dinner.",
  },
  {
    title: "Flexible Formats",
    body: "Standalone restaurants and licensed locations.",
  },
];

export function StatsBar() {
  return (
    <section className="bg-cream py-6 sm:py-8">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto grid  grid-cols-1 gap-x-6 gap-y-8 rounded-2xl bg-charcoal px-8 py-10 sm:px-12  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:py-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`relative px-0 lg:px-8 ${
                index > 0 ? "lg:border-l lg:border-cream/20" : ""
              }`}
            >
              <p className="font-display text-lg font-black text-orange sm:text-xl">
                {stat.title}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream/90">
                {stat.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
