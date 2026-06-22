import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import type { WhyUsCardData } from "../../types";

interface WhyUsCardProps {
  card: WhyUsCardData;
  delay?: number;
}

export function WhyUsCard({ card, delay = 0 }: WhyUsCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className="group flex flex-col rounded-3xl border border-charcoal/5 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm"
    >
      <h3 className="font-display text-xl font-bold leading-snug text-charcoal">
        <span className="text-orange">{card.highlight}</span> {card.title}
      </h3>
      <span className="mt-3 block h-1 w-10 rounded-full bg-orange" />
      <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/65">{card.description}</p>

      <div className="mt-5 overflow-hidden rounded-2xl">
        <img
          src={card.image}
          alt={card.alt}
          className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-36"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
