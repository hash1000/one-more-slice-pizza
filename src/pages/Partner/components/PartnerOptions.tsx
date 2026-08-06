import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
// image
import Franchise from "../../../assets/images/partner/franchise.jpg";
import License from "../../../assets/images/partner/license.jpg";

interface OptionCard {
  id: string;
  label: string;
  labelAccent: string;
  image: string;
  body: string[];
  cta: string;
  dark: boolean;
}

const options: OptionCard[] = [
  {
    id: "franchise-opportunity",
    label: "Own a",
    labelAccent: "One More Slice Franchise",
    image: Franchise,
    body: [
      "Build a dedicated One More Slice location and bring the complete brand experience to your market",
      "The franchise opportunity is designed for entrepreneurs and multi-unit operators looking for a contemporary pizza concept with multiple dayparts, flexible real estate possibilities and a menu with broad consumer appeal",
    ],
    cta: "Franchise Information",
    dark: false,
  },
  {
    id: "licensing-opportunity",
    label: "License",
    labelAccent: "One More Slice",
    image: License,
    body: [
      "Already have customers walking through your doors?\nGive them another reason to spend.\nThe One More Slice licensing program allows qualified operators to bring the brand into an existing location without building a traditional standalone pizza restaurant.\nIt is an especially strong fit for convenience stores, travel centers and existing foodservice operations looking to expand their prepared-food offering and capture additional sales.",
    ],
    cta: "Licensing Information",
    dark: true,
  },
];

export function PartnerOptions() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl"
        >
          One Concept, <span className="text-orange">Two Ways to Grow</span>
        </motion.h2>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              id={option.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="flex scroll-mt-32 flex-col gap-6 rounded-2xl border border-charcoal/15 bg-white p-6 shadow-soft sm:p-8"
            >
              <h3 className="font-display text-lg font-black uppercase leading-snug text-charcoal sm:text-xl">
                {option.label} <span className="text-orange">{option.labelAccent}</span>
              </h3>

              <div className="overflow-hidden rounded-xl">
                <img
                  src={option.image}
                  alt={`${option.label} ${option.labelAccent}`}
                  className="h-56 w-full object-cover sm:h-64"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-4 font-body text-sm leading-relaxed text-charcoal/70">
                {option.body.map((paragraph, pIndex) => (
                  <p key={pIndex} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <a
                href="#partner-form"
                className={`mt-auto inline-flex w-fit items-center justify-center rounded-2xl px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 ${
                  option.dark
                    ? "bg-charcoal text-cream"
                    : "bg-orange text-cream"
                }`}
              >
                {option.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
