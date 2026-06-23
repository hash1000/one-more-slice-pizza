import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";
import { containerClasses } from "../lib/layout";
import { Link } from "react-router-dom";
import { buttonClasses } from "../lib/buttonStyles";

interface Category {
  name: string;
  description: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Classic Pizzas", description: "Timeless combinations done right.", icon: "🍕" },
  { name: "Specialty Slices", description: "Signature flavors worth coming back for.", icon: "⭐" },
  { name: "Sides & Extras", description: "The perfect companions to your slice.", icon: "🫙" },
  { name: "Drinks", description: "Cold, refreshing, and ready to pair.", icon: "🥤" },
];

export function Menu() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className={containerClasses}>
        <div className="mx-auto max-w-4xl pt-12 text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-bold uppercase tracking-widest text-orange"
          >
            The Menu
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 font-display text-5xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-6xl lg:text-7xl"
          >
            Something good is{" "}
            <span className="text-orange">coming soon.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-charcoal/65"
          >
            We're putting the finishing touches on our full menu. Expect generous portions,
            fresh ingredients, and a lineup that gives you a reason to keep coming back.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8"
          >
            <Link to="/join-us" className={buttonClasses("primary", "lg")}>
              Get Early Access
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group flex items-center gap-5 rounded-2xl border border-charcoal/8 bg-cream-soft px-6 py-5 transition-shadow hover:shadow-soft"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-2xl" aria-hidden="true">
                {cat.icon}
              </span>
              <div className="text-left">
                <p className="font-display text-base font-bold text-charcoal">{cat.name}</p>
                <p className="mt-0.5 font-body text-sm text-charcoal/55">{cat.description}</p>
              </div>
              <span className="ml-auto text-charcoal/20 transition-colors group-hover:text-orange" aria-hidden="true">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center font-body text-sm text-charcoal/40"
        >
          Full menu launching with our Palos Heights location. Stay tuned.
        </motion.p>
      </div>
    </div>
  );
}
