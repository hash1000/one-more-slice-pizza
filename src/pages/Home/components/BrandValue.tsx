import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import morePizza from "../../../assets/images/why-it-works/more-pizza.jpg";
import moreValue from "../../../assets/images/why-it-works/more-value.jpg";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "Real Ingredients", label: "No shortcuts, no mystery" },
  { value: "Generous Portions", label: "Every order, every time" },
  { value: "Everyday Value", label: "Pizza you can actually afford to love" },
];

export function BrandValue() {
  return (
    <section id="why" className="relative overflow-hidden bg-cream-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-orange/8 blur-[120px]" />

      <div className={containerClasses}>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-bold uppercase tracking-widest text-orange"
            >
              Why One More Slice
            </motion.p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-display text-4xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-5xl"
            >
              Quality you can taste.{" "}
              <span className="text-orange">Value you'll remember.</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-body text-lg leading-relaxed text-charcoal/70"
            >
              One More Slice is built on a simple idea: great pizza shouldn't come with compromises.
              Fresh dough, real toppings, portions that actually fill you up — at a price that makes
              coming back easy.
            </motion.p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-col gap-5"
            >
              {stats.map((stat) => (
                <li key={stat.value} className="flex items-start gap-4">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange">
                    <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-charcoal">{stat.value}</p>
                    <p className="mt-0.5 font-body text-sm text-charcoal/60">{stat.label}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={morePizza} alt="Generous pizza slices" className="h-64 w-full rounded-2xl object-cover shadow-warm" />
              <img src={moreValue} alt="Fresh quality ingredients" className="mt-10 h-64 w-full rounded-2xl object-cover shadow-warm" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-orange/15 -z-10" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-cheese/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
