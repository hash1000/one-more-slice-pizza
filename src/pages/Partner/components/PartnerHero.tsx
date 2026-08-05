import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import heroDisplayCase from "../../../assets/images/partner/hero-display-case.png";
import heroRestaurant from "../../../assets/images/partner/hero-restaurant.png";

const FLIP_INTERVAL_MS = 3000;

const images = [heroDisplayCase, heroRestaurant];

export function PartnerHero() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, FLIP_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const topImage = flipped ? images[1] : images[0];
  const bottomImage = flipped ? images[0] : images[1];

  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 text-charcoal sm:pt-36 sm:pb-20 lg:pt-40">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-orange/15 blur-[80px] sm:h-96 sm:w-96 sm:blur-[110px] lg:h-144 lg:w-xl lg:blur-[140px]" />
      <div className={containerClasses}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Big Slices.
              <br />
              Even <span className="text-orange">Bigger Business.</span>
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Open a One More Slice restaurant or add our Pizza Program to your
              existing location.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#franchise-opportunity"
                className="inline-flex items-center justify-center rounded-2xl bg-orange px-8 py-3.5 font-body text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
              >
                Explore Franchising
              </a>
              <a
                href="#licensing-opportunity"
                className="inline-flex items-center justify-center rounded-2xl border border-charcoal/20 bg-transparent px-8 py-3.5 font-body text-base font-semibold text-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-charcoal/40 hover:bg-charcoal/5"
              >
                Explore Licensing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4 sm:relative sm:block sm:h-110 sm:gap-0 md:h-140 lg:h-80 xl:h-120 2xl:h-140"
          >
            <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-orange shadow-warm-lg sm:absolute sm:right-0 sm:top-0 sm:w-[80%]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`top-${flipped}`}
                  src={topImage}
                  alt="One More Slice pizza display case inside a convenience store"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="h-full w-full object-cover sm:absolute sm:inset-0"
                />
              </AnimatePresence>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 border-orange shadow-warm-lg sm:absolute sm:bottom-0 sm:left-0 sm:w-[60%]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`bottom-${flipped}`}
                  src={bottomImage}
                  alt="One More Slice restaurant interior with pizza display case and menu boards"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="h-full w-full object-cover sm:absolute sm:inset-0"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
