import { motion } from "framer-motion";
import { PizzaSliceAnimation } from "../../../components/PizzaSliceAnimation";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] pt-20 sm:pt-24 lg:min-h-[85vh] lg:pt-0">
      <div
        className={`${containerClasses} grid grid-cols-1 items-center gap-12 py-12 sm:py-16 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16 lg:py-24`}
      >
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="relative inline-block font-display text-5xl font-black leading-tight tracking-tight text-charcoal sm:text-6xl">
            Our Story
            <svg
              className="absolute -bottom-3 left-0 w-full text-orange"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 9.5C40 3 100 1 198 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </h1>

          <h2 className="mt-8 font-display text-2xl font-black leading-snug tracking-tight text-charcoal sm:text-3xl">
            More Than Pizza. <span className="text-orange">One Great Slice at a Time.</span>
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed text-[#5C5049] sm:text-lg">
            At One More Slice, we believe great pizza shouldn't require a special occasion.
            Whether you're grabbing a quick lunch, feeding the family, satisfying a late-night
            craving, or picking up something sweet, we're here to serve fresh, delicious food
            that's ready when you are.
          </p>

          <p className="mt-5 font-body text-base leading-relaxed text-[#5C5049] sm:text-lg">
            Every slice starts with quality ingredients, real mozzarella cheese, flavorful
            sauces, and dough baked fresh throughout the day. It's pizza the way it should
            be... hot, flavorful, satisfying, and always worth coming back for.
          </p>
        </motion.div>

        {/* Right: pizza on a warm cream surface */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative order-1 flex h-80 w-full items-center justify-center sm:h-[26rem] lg:order-2 lg:h-full"
        >
          {/* Soft radial orange glow behind the pizza */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-56 w-56 rounded-full bg-orange/[0.07] blur-[70px] sm:h-80 sm:w-80 sm:blur-[100px] lg:h-[28rem] lg:w-[28rem] lg:blur-[120px]"
          />

          {/* Soft elliptical drop shadow under the pizza */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[8%] h-10 w-2/3 rounded-full bg-[#2B1B12]/20 blur-2xl sm:h-14 lg:bottom-[12%]"
          />

          <PizzaSliceAnimation className="relative aspect-square w-full max-w-md" />
        </motion.div>
      </div>
    </section>
  );
}
