import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

// images
import BigSlicesFeatureBg from "../../../assets/images/partner/big-slices-feature.png";
import BigSlicesFeaturePizza from "../../../assets/images/partner/big-slices-feature-pizza.png";
import BigSlicesFeatureSticker from "../../../assets/images/partner/big-slices-feature-sticker.svg";

// svg icons
import SliceIcon from "../../../assets/images/partner/big-slices-feature-slice.svg";
import VarietyIcon from "../../../assets/images/partner/big-slices-feature-variety.svg";
import SellIcon from "../../../assets/images/partner/big-slices-feature-sell.svg";

const points = [
  { label: "Big Slice", icon: SliceIcon },
  { label: "Big Variety", icon: VarietyIcon },
  { label: "Built to Sell", icon: SellIcon },
];

export function BigSlicesFeature() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className={containerClasses}
      
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-xl font-black uppercase tracking-wide text-charcoal sm:text-2xl lg:text-3xl"
        >
          One Kitchen <span className="text-orange">.</span> More Occasions{" "}
          <span className="text-orange">.</span> More Opportunities to Sell
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-12 overflow-hidden rounded-2xl shadow-soft sm:mt-16"
        >
          <div
            className="relative grid gap-8 bg-cover bg-center px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] lg:items-center lg:gap-10 lg:px-0 lg:py-0"
            style={{ backgroundImage: `url(${BigSlicesFeatureBg})` }}
          >
            {/* Pizza slice image bleeding to the edge */}
            <div className="relative -mx-6 -mt-10 aspect-4/3 overflow-hidden sm:-mx-10 sm:-mt-12 sm:rounded-t-2xl lg:m-0 lg:aspect-auto lg:h-full lg:min-h-95 lg:rounded-none lg:rounded-l-2xl">
              <img
                src={BigSlicesFeaturePizza}
                alt="Big slice pizza"
                className="h-full w-full object-cover"
              />
              <img
                src={BigSlicesFeatureSticker}
                alt="Big Slice, Bigger Value"
                className="absolute bottom-4 left-4 h-24 w-24 drop-shadow-lg sm:h-28 sm:w-28 lg:bottom-6 lg:left-6 lg:h-32 lg:w-32"
              />
            </div>

            {/* Copy */}
            <div className="relative py-2 lg:py-12">
              <h3 className="font-display text-2xl font-black uppercase leading-tight text-charcoal sm:text-3xl">
                Big Slices Create
              </h3>
              <p className="mt-1 font-display text-sm font-bold uppercase tracking-wide text-cream sm:text-base">
                A Bigger Point of Difference
              </p>

              <p className="mt-6 font-body text-base font-bold leading-relaxed text-charcoal">
                One More Slice starts with a 14-inch pizza cut into six
                generous slices.
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/80 sm:text-base">
                That creates an individual slice that feels substantial,
                satisfying and worth choosing while still giving operators
                the flexibility to sell complete pizzas.
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/80 sm:text-base">
                The result is a product designed to stand out visually and
                create strong perceived value.
              </p>
            </div>

            {/* Icon list */}
            <div className="relative flex flex-col gap-6 border-t-2 border-white/80 pt-8 lg:border-l-2 lg:border-t-0 lg:py-12 lg:pl-10 lg:pr-10">
              {points.map((point) => (
                <div key={point.label} className="flex items-center gap-4">
                  {/* <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal"> */}
                    <img src={point.icon} alt="" className="h-9 w-9" aria-hidden="true" />
                  {/* </span> */}
                  <span className="font-display text-base font-black uppercase tracking-wide text-charcoal sm:text-lg">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
