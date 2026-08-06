import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import heroRestaurant from "../../../assets/images/partner/hero-restaurant.png";
import heroDisplayCase from "../../../assets/images/partner/hero-display-case.png";

const FLIP_INTERVAL_MS = 4000;

const images = [heroRestaurant, heroDisplayCase];

interface Stat {
  title: string;
  body: string;
}

const stats: Stat[] = [
  { title: "33% Bigger Slice", body: "Six oversized slices from every 14-inch pizza." },
  { title: "Big Varieties", body: "Signature, breakfast and sweet slices." },
  { title: "Multiple Dayparts", body: "A menu built to sell beyond lunch and dinner." },
  { title: "Flexible Formats", body: "Standalone restaurants and licensed locations." },
];

export function PartnerHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, FLIP_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-charcoal pt-28 text-cream sm:pt-32">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-orange/20 blur-[80px] sm:h-96 sm:w-96 sm:blur-[110px] lg:h-144 lg:w-xl lg:blur-[140px]" />

      <div className={`${containerClasses} flex flex-1 flex-col justify-center py-10 sm:py-12`}>
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-xl font-display text-4xl font-black uppercase leading-[1.05] text-cream sm:text-5xl lg:text-6xl"
            >
              The <span className="text-orange">One More Slice</span>{" "}
              opportunity is anything but ordinary.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-lg font-body text-sm leading-relaxed text-cream/80 sm:text-base"
            >
              We built the brand around a simple idea: create more reasons for
              customers to buy pizza and give operators more ways to sell it.
              That means bigger individual slices, more menu occasions,
              multiple dayparts and flexible formats that can work as a
              standalone restaurant or inside an existing business.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#franchise-opportunity"
                className="inline-flex items-center justify-center rounded-2xl bg-orange px-8 py-3.5 font-body text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
              >
                Explore Franchising
              </a>
              <a
                href="#licensing-opportunity"
                className="inline-flex items-center justify-center rounded-2xl border border-cream/30 bg-transparent px-8 py-3.5 font-body text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-cream/60 hover:bg-cream/5"
              >
                Explore Licensing
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-4/3 w-full overflow-hidden rounded-xl border-2 border-orange shadow-warm-lg lg:aspect-auto lg:h-[min(70vh,640px)]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="One More Slice restaurant interior with pizza display case and menu boards"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="border-t border-cream/10 bg-orange"
      >
        <div className={`${containerClasses} grid grid-cols-2 items-stretch gap-x-6 gap-y-8 py-8 sm:grid-cols-4 sm:gap-x-8 sm:py-10`}>
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className={`flex flex-col justify-center ${
                i < stats.length - 1 ? "sm:border-r sm:border-white sm:pr-6" : ""
              }`}
            >
              <p className="font-display text-lg font-black text-charcoal sm:text-xl">
                {stat.title}
              </p>
              <p className="mt-1 font-body text-xs leading-snug text-white sm:text-sm max-w-52">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
