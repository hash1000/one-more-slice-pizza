import { motion } from "framer-motion";
import { HiOutlineBuildingStorefront, HiOutlineSquares2X2 } from "react-icons/hi2";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";

interface OptionCard {
  title: string;
  tag: string;
  body: string;
  idealFor: string[];
  icon: typeof HiOutlineBuildingStorefront;
}

const options: OptionCard[] = [
  {
    title: "Open a One More Slice Restaurant",
    tag: "Franchise",
    body: "Build your own pizza business with our complete system, training, and ongoing support.",
    idealFor: ["Entrepreneurs", "Multi-Unit Operators", "Restaurant Investors"],
    icon: HiOutlineBuildingStorefront,
  },
  {
    title: "Add One More Slice to Your Existing Business",
    tag: "Licensing",
    body: "Add a high-margin pizza program to your current locations with minimal investment and labor.",
    idealFor: [
      "Convenience Stores",
      "Travel Centers",
      "Hospitals",
      "Colleges & Universities",
      "And More",
    ],
    icon: HiOutlineSquares2X2,
  },
];

export function PartnerOptions() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
            <motion.div
              key={option.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-warm-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="mt-4 font-display text-xs font-bold uppercase tracking-widest text-orange">
                {option.tag}
              </span>
              <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-charcoal">
                {option.title}
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70">
                {option.body}
              </p>
              <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                Ideal for:
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {option.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body text-sm text-charcoal/70"
                  >
                    <span className="text-orange" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#partner-form"
            className={buttonClasses("primary", "lg")}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
