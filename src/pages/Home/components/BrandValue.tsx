import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface Differentiator {
  headline: string;
  body: string;
  stats: { value: string; label: string }[];
}

const differentiators: Differentiator[] = [
  {
    headline: "Bigger Slices. Fewer Cuts.",
    body:
      "Every 14-inch pizza is cut into 6 large slices — not the usual 8 small ones. Same pizza, bigger bite.",
    stats: [
      { value: "14\"", label: "pizza" },
      { value: "6", label: "big slices" },
      { value: "8", label: "the usual" },
    ],
  },
  {
    headline: "One Craving? Try Them All.",
    body:
      "Don't commit to one flavor. Mix and match slices from different pizzas and build your own combo — every slice can be a different pizza.",
    stats: [],
  },
];

const secondaryPoints = [
  { value: "Fresh Daily", label: "Dough and toppings, made same-day" },
];

export function BrandValue() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-orange/8 blur-[120px]" />

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
          className="mt-3 text-center font-display text-4xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-5xl"
        >
          Two reasons you'll <span className="text-orange">keep coming back.</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Differentiator 1: Bigger Slices */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-8 shadow-warm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-warm-lg sm:p-10"
          >
            <h3 className="font-display text-2xl font-black text-charcoal sm:text-3xl">
              {differentiators[0].headline}
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
              {differentiators[0].body}
            </p>
            <div className="mt-8 flex items-end gap-6 sm:gap-8">
              {differentiators[0].stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-5xl font-black text-orange sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-body text-xs font-semibold uppercase tracking-wide text-charcoal/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Differentiator 2: Mix & Match */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-charcoal p-8 shadow-warm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-warm-lg sm:p-10"
          >
            <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
              {differentiators[1].headline}
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-white/70 sm:text-lg">
              {differentiators[1].body}
            </p>
            <div className="mt-8 flex items-center gap-3" aria-hidden="true">
              {["bg-orange", "bg-cheese", "bg-orange/60", "bg-cheese/60"].map((color, i) => (
                <span
                  key={i}
                  className={`h-12 w-12 rounded-full border-4 border-charcoal ${color}`}
                  style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }}
                />
              ))}
            </div>
            <p className="mt-3 font-body text-xs font-semibold uppercase tracking-wide text-white/50">
              Every slice, a different pizza
            </p>
          </motion.div>
        </div>

        {/* Secondary points */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {secondaryPoints.map((point) => (
            <li key={point.value} className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-body text-sm text-charcoal/60">
                <span className="font-semibold text-charcoal">{point.value}</span> — {point.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
