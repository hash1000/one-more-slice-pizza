import { AnimatePresence, motion } from "framer-motion";
import heroCircle from "../../../assets/images/hero/circle.svg";
import heroBadge from "../../../assets/images/hero/badge.svg";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { useEffect, useState } from "react";

import sliceBbqChicken from "../../../assets/images/menu/signature/bbq-chicken.webp";
import sliceBuffaloRanch from "../../../assets/images/menu/signature/buffalo-ranch.webp";
import sliceCaramelApple from "../../../assets/images/menu/sweet-slices/caramel-apple.webp";
import sliceCheese from "../../../assets/images/menu/signature/cheese.webp";
import sliceChickenSupreme from "../../../assets/images/menu/signature/chicken-supreme.webp";
import sliceChocolateBliss from "../../../assets/images/menu/sweet-slices/chocolate-bliss.webp";
import sliceChurroSupreme from "../../../assets/images/menu/sweet-slices/churro-supreme.webp";
import sliceEggBacon from "../../../assets/images/menu/breakfast/egg-bacon-cheese.webp";
import sliceEggCheese from "../../../assets/images/menu/breakfast/egg-cheese.webp";
import sliceEggSausage from "../../../assets/images/menu/breakfast/egg-sausage-cheese.webp";
import sliceMeatLover from "../../../assets/images/menu/signature/meat-lovers.webp";
import slicePepperoni from "../../../assets/images/menu/signature/pepperoni.webp";
import sliceSausage from "../../../assets/images/menu/signature/sausage.webp";
import sliceVeggie from "../../../assets/images/menu/signature/veggie.webp";

const slices = [
  slicePepperoni,
  sliceBbqChicken,
  sliceBuffaloRanch,    
  sliceChickenSupreme,
  sliceMeatLover,
  sliceSausage,
  sliceVeggie,
  sliceCheese,
  sliceEggBacon,
  sliceEggCheese,
  sliceEggSausage,
  sliceCaramelApple,
  sliceChocolateBliss,
  sliceChurroSupreme,
];

const SLICE_INTERVAL_MS = 3200;


export function OurStory() {
  const [activeSlice, setActiveSlice] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlice((prev) => (prev + 1) % slices.length);
    }, SLICE_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative overflow-hidden  pt-20 sm:pt-24 lg:min-h-[85vh] lg:pt-0">
      <div
        className={`${containerClasses} grid grid-cols-1 items-start gap-12 py-12 sm:py-16 md:grid-cols-2 lg:min-h-[85vh] lg:grid-cols-[55fr_45fr] lg:gap-8 lg:py-24`}
      >

        {/* Left: copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 lg:pt-6"
        >
          <h1 className="relative inline-block font-display text-4xl font-black leading-tight tracking-tight text-charcoal sm:text-6xl lg:text-8xl">
            Our Story
            <svg
              className="absolute -bottom-4 left-0 w-full text-orange"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 9.5C40 3 100 1 198 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </h1>

          <h2 className="mt-10 font-display text-3xl font-black leading-snug tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            More Pizza. <span className="text-orange">One Big Slice at a Time.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted sm:text-xl">
            At One More Slice, we believe great pizza shouldn't require a special occasion. Whether you're grabbing a quick lunch, feeding the family, satisfying a late-night craving, or picking up something sweet, we're here to serve fresh, delicious food that's ready when you are always worth coming back for
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative order-1 mx-auto mt-6 flex w-full max-w-[28rem] items-center justify-center sm:max-w-[34rem] lg:order-2 lg:mt-0 lg:max-w-[46rem]"
        >
          {/* Ambient glow */}
          <motion.div
            aria-hidden="true"
            className="absolute h-[70%] w-[70%] rounded-full bg-orange/20 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Slow-rotating ring */}
          <motion.img
            src={heroCircle}
            alt=""
            aria-hidden="true"
            className="h-[75%] w-[75%]"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          {/* Gentle float wrapper for the slice */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeSlice}
                src={slices[activeSlice]}
                alt="A big slice of One More Slice pizza"
                initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
                animate={{
                  opacity: 1,
                  scale: [0.9, 1.06, 0.97, 1.02, 1],
                  rotate: [-20, -12, -14.5, -11.5, -12],
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: -4 }}
                transition={{
                  opacity: { duration: 0.4, ease: "easeOut" },
                  scale: {
                    duration: 0.9,
                    ease: [0.34, 1.56, 0.64, 1],
                    times: [0, 0.45, 0.68, 0.86, 1],
                  },
                  rotate: {
                    duration: 0.9,
                    ease: [0.34, 1.56, 0.64, 1],
                    times: [0, 0.45, 0.68, 0.86, 1],
                  },
                }}
                className="absolute h-[100%] w-[100%] object-contain"
              />
            </AnimatePresence>
          </motion.div>

          <motion.img
            src={heroBadge}
            alt="Big size, made to satisfy"
            className="pointer-events-none absolute bottom-[1%] -right-[1%] w-[45%] max-w-[16rem]"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
            whileHover={{ scale: 1.08, rotate: 6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
