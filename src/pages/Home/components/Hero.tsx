import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import pizza from "../../../assets/images/hero/pizza-hero.jpg";
import { Logo } from "../../../components/ui/Logo";
import { useInterval } from "../../../hooks/useInterval";
import { containerClasses } from "../../../utils/layout";
import { rotatingMessages, MESSAGE_POSITION, MESSAGE_INTERVAL_MS } from "../../../data/hero";

export function Hero() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useInterval(() => {
    setIndex((i) => (i + 1) % rotatingMessages.length);
  }, MESSAGE_INTERVAL_MS);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-16"
    >
      <div className={`${containerClasses} grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-8`}>
        {/* Mobile: logo above pizza */}
        <div className="order-1 flex justify-center lg:hidden">
          <Logo variant="plain" className="mx-auto h-32 w-auto sm:h-36" />
        </div>

        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 order-3 text-center lg:order-1 lg:text-left"
        >
          <Logo variant="plain" className="hidden lg:block lg:h-56 xl:h-64" />

          <h1 className="mt-6 font-display text-2xl font-black leading-tight tracking-tight text-charcoal sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
            Big Slices.{" "}
            <span className="relative inline-block whitespace-nowrap text-orange">
              Big Value.
              <svg
                className="absolute -bottom-2 left-0 w-full text-cheese"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9.5C40 3 100 1 198 7" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            {" "}Big Flavor.
          </h1>
        </motion.div>

        {/* Right: rotating pizza */}
        <div className="relative order-2 mx-auto flex aspect-square w-full max-w-[20rem] items-center justify-center sm:max-w-[26rem] lg:order-2 lg:max-w-[36rem] xl:max-w-[42rem]">
          <div className="absolute bottom-[6%] h-10 w-[70%] rounded-full bg-charcoal/20 blur-2xl" />

          <motion.div
            style={{ rotate: scrollRotate, y: scrollY, scale: scrollScale, opacity: scrollOpacity }}
            className="relative h-full w-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 70, ease: "linear", repeat: Infinity }}
              className="relative h-full w-full"
            >
              <img
                src={pizza}
                alt="One More Slice pizza loaded with every topping"
                className="h-full w-full rounded-full object-cover shadow-warm-lg ring-4 ring-white/70 sm:ring-8"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Orbiting brand message */}
          <div className="absolute inset-0 hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute z-20 max-w-[10.5rem] rounded-2xl border border-charcoal/5 bg-white/90 px-4 py-3 text-center font-display text-sm font-bold leading-snug text-charcoal shadow-soft backdrop-blur-sm sm:max-w-[11rem] ${MESSAGE_POSITION}`}
              >
                {rotatingMessages[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: cycling message */}
        <div className="relative order-4 -mt-2 flex justify-center sm:hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="rounded-full border border-charcoal/5 bg-white/90 px-5 py-2.5 text-center font-display text-sm font-bold text-charcoal shadow-soft"
            >
              {rotatingMessages[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
