import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

interface PartnerTypeCard {
  title: string;
  body: string;
  cta: string;
  href: string;
}

const cards: PartnerTypeCard[] = [
  {
    title: "I Want to Open a One More Slice",
    body: "Explore franchise opportunities for standalone and dedicated One More Slice locations.",
    cta: "Franchise Information",
    href: "#franchise-opportunity",
  },
  {
    title: "I Want to Add One More Slice to My Business",
    body: "Explore licensing opportunities for convenience stores, travel centers, restaurants and other qualified foodservice locations.",
    cta: "Licensing Information",
    href: "#licensing-opportunity",
  },
];

export function PartnerType() {
  return (
    <section className="bg-orange py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center font-display text-3xl font-black uppercase leading-tight text-cream sm:text-4xl"
        >
          What Kind of Partner Are You?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col gap-4 rounded-2xl bg-charcoal/30 p-8 text-center backdrop-blur-sm"
            >
              <h3 className="font-display text-lg font-black uppercase leading-snug text-cream">
                {card.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-cream/85">
                {card.body}
              </p>
              <a
                href={card.href}
                className="mt-auto inline-flex items-center justify-center self-center rounded-2xl bg-charcoal px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-cream transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                {card.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
