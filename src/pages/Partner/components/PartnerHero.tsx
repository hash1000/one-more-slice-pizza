import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import heroDisplayCase from "../../../assets/images/partner/hero-display-case.png";
import heroRestaurant from "../../../assets/images/partner/hero-restaurant.png";

export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 text-cream sm:pt-36 sm:pb-20 lg:pt-40">
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-orange/15 blur-[80px] sm:h-96 sm:w-96 sm:blur-[110px] lg:h-[36rem] lg:w-[36rem] lg:blur-[140px]" />
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
            <p className="mt-6 font-body text-base leading-relaxed text-cream/80 sm:text-lg">
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
                className="inline-flex items-center justify-center rounded-2xl border border-cream/25 bg-transparent px-8 py-3.5 font-body text-base font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-cream/50 hover:bg-cream/5"
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
            className="relative aspect-video lg:aspect-auto lg:h-140"
          >
            <img
              src={heroRestaurant}
              alt="One More Slice restaurant counter with pizza display case and menu boards"
              className="absolute inset-0 h-[70%] w-full rounded-2xl border-2 border-orange object-cover shadow-warm-lg"
            />
            <img
              src={heroDisplayCase}
              alt="One More Slice pizza display case inside a convenience store"
              className="absolute bottom-0 left-0 h-[55%] w-[55%] rounded-2xl border-2 border-orange object-cover shadow-warm-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
