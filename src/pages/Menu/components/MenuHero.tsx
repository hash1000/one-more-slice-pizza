import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import heroPizza from "../../../assets/images/menu/signature/meat-lovers.png";

export function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className={`${containerClasses} grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-5 max-w-md font-body text-lg leading-relaxed text-cream/65 lg:mx-0">
            Fresh ingredients. Bold flavors. Pizza made for every craving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto flex h-64 w-full max-w-md items-center justify-center sm:h-80 lg:h-[22rem] lg:max-w-none"
        >
          <div className="absolute h-48 w-72 rounded-full bg-orange-dark/30 blur-[80px] sm:h-56 sm:w-96" />
          <img
            src={heroPizza}
            alt="Loaded pepperoni and meat pizza slice"
            className="relative h-full w-full rotate-[8deg] object-contain drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
