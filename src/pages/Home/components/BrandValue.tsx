import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import biggerSlicesImg from "../../../assets/images/brand-value/bigger-slices.jpg";
import mixMatchImg from "../../../assets/images/brand-value/mix-match.jpg";
import madeFreshSliceImg from "../../../assets/images/brand-value/made-fresh-slice.png";

interface Differentiator {
  headline: string;
  body: string;
  image: string;
  stats: { value: string; label: string }[];
}

const differentiators: Differentiator[] = [
  {
    headline: "Bigger Slices. Fewer Cuts.",
    body:
      "Every 14-inch pizza is cut into 6 large slices — not the usual 8 small ones. Same pizza, bigger bite.",
    image: biggerSlicesImg,
    stats: [
      { value: "14\"", label: "Pizza" },
      { value: "6", label: "Slices" },
      { value: "8", label: "The usual" },
    ],
  },
  {
    headline: "One Craving? Try Them All.",
    body:
      "Don't commit to one flavor. Mix and match slices from different pizzas and build your own combo — every slice can be a different pizza.",
    image: mixMatchImg,
    stats: [],
  },
];

const pizzaIconColors = ["#000000", "#FFFFFF", "#302C29", "#C32214", "#FFAE51"];

function PizzaIcon({ color }: { color: string }) {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" aria-hidden="true">
      <path
        d="M5.83333 9.40625C8.76458 6.31458 12.9063 4.375 17.5 4.375C22.0938 4.375 26.2354 6.31458 29.1667 9.40625L17.5 29.1667L5.83333 9.40625Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 13.125C14.7358 13.125 16.0417 11.8192 16.0417 10.2083C16.0417 8.5975 14.7358 7.29167 13.125 7.29167C11.5142 7.29167 10.2083 8.5975 10.2083 10.2083C10.2083 11.8192 11.5142 13.125 13.125 13.125Z"
        fill={color}
      />
      <path
        d="M17.5 21.875C19.1108 21.875 20.4167 20.5692 20.4167 18.9583C20.4167 17.3475 19.1108 16.0417 17.5 16.0417C15.8892 16.0417 14.5833 17.3475 14.5833 18.9583C14.5833 20.5692 15.8892 21.875 17.5 21.875Z"
        fill={color}
      />
    </svg>
  );
}

export function BrandValue() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32">
      <div className={containerClasses}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-base font-bold text-charcoal"
        >
          Why One More Slice
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-center font-display text-4xl font-black leading-tight tracking-tight text-charcoal text-balance sm:text-5xl"
        >
          Two reasons you'll <span className="text-orange">keep coming back.</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Differentiator 1: Bigger Slices */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="location-card cursor-pointer rounded-2xl bg-orange p-6 shadow-warm sm:p-8"
          >
            <img
              src={differentiators[0].image}
              alt=""
              aria-hidden="true"
              className="h-55 w-full rounded-2xl object-cover sm:h-63"
            />
            <h3 className="mt-6 font-display text-2xl font-black text-white sm:text-3xl">
              {differentiators[0].headline}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-white/90">
              {differentiators[0].body}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              {differentiators[0].stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-23.75 w-23.75 shrink-0 flex-col items-center justify-center rounded-full bg-charcoal"
                >
                  <p className="font-display text-2xl font-black text-orange">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Differentiator 2: Mix & Match */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="location-card cursor-pointer rounded-2xl bg-orange p-6 shadow-warm sm:p-8"
          >
            <img
              src={differentiators[1].image}
              alt=""
              aria-hidden="true"
              className="h-55 w-full rounded-2xl object-cover sm:h-63"
            />
            <h3 className="mt-6 font-display text-2xl font-black text-white sm:text-3xl">
              {differentiators[1].headline}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-white/90">
              {differentiators[1].body}
            </p>
            <p className="mt-5 font-display text-base font-black text-white">
              Every slice, a different pizza
            </p>
            <div className="mt-3 flex items-center gap-2" aria-hidden="true">
              {pizzaIconColors.map((color, i) => (
                <PizzaIcon key={i} color={color} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Made Fresh banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-8 overflow-visible rounded-2xl bg-charcoal px-8 py-10 sm:px-12 sm:py-12"
        >
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-black text-orange sm:text-3xl">
              Made Fresh. Baked to Perfection.
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-white">
              Our dough, signature pizza sauce, and quality toppings are prepared fresh
              daily, then baked until golden, hot, and delicious for a satisfying slice
              every time.
            </p>
          </div>
          <img
            src={madeFreshSliceImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-6 hidden w-auto -translate-y-1/2 object-contain sm:block sm:h-60 lg:right-12 lg:h-75"
          />
        </motion.div>
      </div>
    </section>
  );
}
