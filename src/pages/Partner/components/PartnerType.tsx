import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";

interface PartnerTypeCard {
  eyebrow?: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  variant: "dark" | "light";
}

const cards: PartnerTypeCard[] = [
  {
    title: "I Want to Open a One More Slice",
    body: "Explore franchise opportunities for standalone and dedicated One More Slice locations",
    cta: "Franchise Information",
    href: "#franchise-opportunity",
    variant: "dark",
  },
  {
    eyebrow: "I Want to Add",
    title: "One More Slice to My Business",
    body: "Explore licensing opportunities for convenience stores, travel centers, restaurants and other qualified foodservice locations",
    cta: "Franchise Information",
    href: "#licensing-opportunity",
    variant: "light",
  },
];

export function PartnerType() {
  return (
    <section className="bg-orange">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid lg:grid-cols-[minmax(0,1fr)_1.15fr_1.15fr]"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:py-20"
        >
          <h2 className="font-display text-3xl font-black uppercase leading-[1.1] text-cream sm:text-4xl">
            What Kind
            <br />
            of Partner
            <br />
            Are You?
          </h2>
        </motion.div>

        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex h-full flex-col justify-between gap-6 px-8 py-16 sm:px-12 lg:py-20 ${
              card.variant === "dark" ? "bg-charcoal" : "bg-orange"
            }`}
          >
            <div className="flex flex-col gap-6">
              <div>
                {card.eyebrow && (
                  <p className="font-display text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
                    {card.eyebrow}
                  </p>
                )}
                <h3 className="font-display text-2xl font-black uppercase leading-tight text-cream sm:text-3xl">
                  {card.title}
                </h3>
              </div>
              <p className="font-body text-base leading-relaxed text-cream/85">
                {card.body}
              </p>
            </div>
            <a
              href={card.href}
              className={`group inline-flex w-fit items-center gap-3 rounded-full px-6 py-4 font-display text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                card.variant === "dark"
                  ? "bg-orange text-charcoal hover:brightness-105"
                  : "bg-charcoal text-cream hover:brightness-125"
              }`}
            >
              {card.cta}
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5`}
              >
                <ChevronRight
                  className={`h-5 w-5 text-cream`}
                />
              </span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
