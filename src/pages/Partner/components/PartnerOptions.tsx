import { motion } from "framer-motion";
import { ClipboardList, Home, type LucideIcon } from "lucide-react";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface OptionCard {
  id: string;
  eyebrow: string;
  headingPrefix: string;
  headingAccent: string;
  headingSuffix: string;
  body: string;
  idealFor: string[];
  cta: string;
  icon: LucideIcon;
  dark: boolean;
}

const options: OptionCard[] = [
  {
    id: "franchise-opportunity",
    eyebrow: "Franchise Opportunity",
    headingPrefix: "Build the full",
    headingAccent: "One More Slice",
    headingSuffix: "experience.",
    body: "Open a branded restaurant using our complete operating system, menu, training and ongoing support.",
    idealFor: [
      "Entrepreneurs",
      "Restaurant investors",
      "Multi-unit operators",
      "Growth-minded owners",
    ],
    cta: "EXPLORE FRANCHISING",
    icon: Home,
    dark: true,
  },
  {
    id: "licensing-opportunity",
    eyebrow: "Licensing Opportunity",
    headingPrefix: "Add",
    headingAccent: "One More Slice",
    headingSuffix: "to Your Location.",
    body: "Bring One More Slice into an existing location with a flexible footprint, streamlined operations and multiple dayparts.",
    idealFor: [
      "Convenience stores",
      "Hospitals and campuses",
      "Travel centers",
      "Food courts and more",
    ],
    cta: "EXPLORE LICENSING",
    icon: ClipboardList,
    dark: false,
  },
];

export function PartnerOptions() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-display text-xs font-bold uppercase tracking-widest text-charcoal/50">
            Choose Your Opportunity
          </span>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl">
            One Brand. Two Ways to Grow.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Whether you want to build a dedicated restaurant or strengthen an
            existing foodservice operation, there is a One More Slice model
            designed to fit.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.id}
                id={option.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex gap-4 scroll-mt-32 flex-col rounded-2xl p-8 sm:p-10 ${
                  option.dark
                    ? "bg-charcoal text-cream"
                    : "border border-orange/30 bg-white text-charcoal shadow-soft"
                }`}
              >
                <Icon
                  className={`absolute top-8 right-8  h-8 w-8 md:h-12 md:w-12 ${
                    option.dark ? "text-orange" : "text-charcoal"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-display text-lg font-bold text-orange">
                  {option.eyebrow}
                </span>
                <h3 className="max-w-xs font-display text-xl font-black leading-snug uppercase sm:text-2xl">
                  {option.headingPrefix}{" "}
                  <span className="text-orange">{option.headingAccent}</span>{" "}
                  {option.headingSuffix}
                </h3>
                <p
                  className={`font-body text-base leading-relaxed ${
                    option.dark ? "text-cream/85" : "text-charcoal/70"
                  }`}
                >
                  {option.body}
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {option.idealFor.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 font-body text-sm ${
                        option.dark ? "text-cream/90" : "text-charcoal/80"
                      }`}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-orange"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#partner-form"
                  className="mt-auto inline-flex w-fit items-center justify-center rounded-2xl bg-orange px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-cream transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
                >
                  {option.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
