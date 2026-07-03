import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";

interface OptionCard {
  title: string;
  tag: string;
  body: string;
  idealFor: string[];
}

const options: OptionCard[] = [
  {
    title: "Open a One More Slice Restaurant",
    tag: "Franchise",
    body: "Build your own pizza business with our complete system, training, and ongoing support.",
    idealFor: ["Entrepreneurs", "Multi-Unit Operators", "Restaurant Investors"],
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
  },
];

export function PartnerOptions() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-charcoal/8 bg-white p-8 shadow-soft"
            >
              <span className="font-display text-xs font-bold uppercase tracking-widest text-orange">
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
          ))}
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
