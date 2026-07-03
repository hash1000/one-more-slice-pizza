import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pizza from "../../../assets/images/hero/hero-pizza.jpeg";
import { useInterval } from "../../../hooks/useInterval";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";
import { rotatingMessages, MESSAGE_POSITION, MESSAGE_INTERVAL_MS } from "../../../data/hero";

export function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

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
      className="relative flex w-full items-center overflow-hidden bg-[#FAF7F2] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)]"
    >
      {/* decorative: oversized outlined circle, left background, barely visible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-charcoal/[0.06] sm:-left-56 sm:h-[44rem] sm:w-[44rem]"
      />

      {/* decorative: warm radial glow behind the pizza */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange/[0.08] blur-[110px] sm:h-[700px] sm:w-[700px] lg:h-[850px] lg:w-[850px]"
      />

      {/* decorative: soft fade into the dark section below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-charcoal/[0.04]"
      />

      <div className={`${containerClasses} grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-10`}>
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-orange sm:text-sm">
            One More Slice Pizza
          </p>

          <h1
            className="mt-3 font-display font-black tracking-tight text-charcoal"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
          >
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

          <p className="mx-auto mt-5 max-w-[60ch] text-base text-charcoal/60 lg:mx-0">
            Fresh, oven-hot pizza with slices twice the size. Made throughout the day, every day.
          </p>

          <button onClick={() => navigate("/menu")} className={`mt-8 ${buttonClasses("dark", "md")}`}>
            See the Slice
          </button>
        </motion.div>

        {/* Right: rotating pizza */}
        <div className="relative order-1 mx-auto flex aspect-square w-full max-w-[16rem] items-center justify-center sm:max-w-[22rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[34rem]">
          {/* decorative: soft realistic drop shadow grounding the pizza */}
          <div className="absolute bottom-[4%] h-10 w-[70%] rounded-full bg-charcoal-soft/25 blur-2xl" />

          <motion.div
            style={{ rotate: scrollRotate, y: scrollY, scale: scrollScale, opacity: scrollOpacity }}
            className="relative h-full w-full"
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: 360 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: { duration: 6, ease: "easeInOut", repeat: Infinity },
                      rotate: { duration: 120, ease: "linear", repeat: Infinity },
                    }
              }
              className="relative h-full w-full p-8 sm:p-12 lg:p-16"
            >
              <img
                src={pizza}
                alt="One More Slice pizza loaded with every topping"
                className="h-full w-full rounded-full object-cover shadow-warm-lg ring-4 ring-white/70 sm:ring-8"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Orbiting brand message, overlapping the pizza's edge */}
          <div className="absolute inset-0 hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute z-20 max-w-[9.5rem] rounded-2xl border border-charcoal/5 bg-white/90 px-3.5 py-2.5 text-center font-display text-xs font-bold leading-snug text-charcoal shadow-soft backdrop-blur-sm sm:max-w-[10rem] ${MESSAGE_POSITION}`}
              >
                {rotatingMessages[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: cycling message, below the pizza */}
        <div className="relative order-3 mt-1 flex justify-center sm:hidden">
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
