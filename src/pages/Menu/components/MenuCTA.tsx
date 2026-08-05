import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import storeImg from "../../../assets/images/menu/order-now.jpg";

export function MenuCTA() {
  return (
    <section className={`${containerClasses} py-16 sm:py-20 lg:py-24`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-stretch gap-8 rounded-2xl bg-orange p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 sm:text-left"
      >
        <div className="flex flex-col gap-2 items-center ms-7 px-4 py-4 sm:items-start sm:px-4 sm:py-0">
          <p className="font-display text-3xl font-black leading-tight tracking-tight md:text-4xl lg:text-6xl">
            <span className="text-charcoal">One more</span> <span className="text-white">won&apos;t hurt.</span>
          </p>
          <p className="mt-2 font-body text-2xl text-white/90">Go ahead. Order now.</p>
          <Link
            to="/#hero"
            className="mt-6 inline-block rounded-lg bg-charcoal px-8 py-3 font-display text-sm font-bold text-white transition-colors duration-200 hover:bg-charcoal-soft"
          >
            Order Now
          </Link>
        </div>
        <img
          src={storeImg}
          alt=""
          aria-hidden="true"
          className="h-56 w-full rounded-2xl object-contain sm:h-64 sm:w-2/5 lg:h-[420px]"
        />
      </motion.div>
    </section>
  );
}
