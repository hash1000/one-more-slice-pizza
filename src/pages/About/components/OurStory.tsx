import { AnimatePresence, motion } from "framer-motion";
import heroCircle from "../../../assets/images/hero/circle.svg";
import heroBadge from "../../../assets/images/hero/badge.svg";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import { Container } from "../../../components/layout/Container";
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
import { Button } from "../../../components/ui";

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
    <Container
      id="hero"
      className="bg-white! flex min-h-[calc(100vh-100px)]! flex-col justify-center pt-24! pb-10! sm:min-h-[calc(100vh-96px)]! sm:pt-28! sm:pb-12! lg:pb-16!"
    >
      <section className="relative">
        <div
          className={`${containerClasses} flex flex-col lg:flex-row  items-center gap-10  md:gap-12  lg:gap-8`}
        >
          {/* Left: copy – 35% */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="basis-[45%] flex flex-col items-center gap-6 text-center order-1 lg:items-start lg:gap-6 lg:text-left xl:gap-8"
          >
            <span className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight text-orange sm:text-4xl lg:mt-0 lg:text-5xl xl:text-7xl">
              Our Story
              <svg
                className="absolute -bottom-2 left-0 w-full text-orange"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9.5C40 3 100 1 198 7"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <h1 className="font-display text-3xl font-black leading-tight tracking-tight text-charcoal sm:text-4xl lg:text-4xl xl:text-6xl">
              Pizza Should Be{" "}
              <span className="text-orange">Bigger, Better</span> and Worth
              Coming Back for
            </h1>

            <p className="max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg">
              One More Slice was built around a simple idea: everyday pizza
              should still feel like something special. We serve oversized,
              satisfying slices with bold flavor, quality ingredients and the
              kind of convenience that keeps life moving.
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Button variant="secondary" size="md" className="rounded-full!">
                Explore the Menu
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: pizza visual – 65%, controlled size */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02, y: 24 }}
            whileInView={{ opacity: 1, scale: 1.5, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative basis-[55%] mt-28 lg:mt-0 mx-auto flex aspect-square w-full max-w-65 items-center justify-center sm:max-w-80 md:max-w-90 order-2 lg:max-w-90 xl:max-w-120 2xl:max-w-130"
          >
            {/* Ambient glow */}
            <motion.div
              aria-hidden="true"
              className="absolute h-[80%] w-[80%] rounded-full bg-orange/20 blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Slow-rotating ring */}
            <motion.img
              src={heroCircle}
              alt=""
              aria-hidden="true"
              className="h-[90%] w-[90%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Gentle float wrapper for the slice */}
            <motion.div
              className="pointer-events-none absolute inset-[-8%] flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                  className="absolute h-full w-full object-contain"
                />
              </AnimatePresence>
            </motion.div>

            <motion.img
              src={heroBadge}
              alt="Big size, made to satisfy"
              className="pointer-events-none absolute bottom-[1%] -right-[1%] w-[35%] max-w-48"
              initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </section>
    </Container>
  );
}