import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

export function FreshFastFlavorful() {
  return (
    <section className="relative overflow-hidden bg-cream-soft py-16 sm:py-20">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-orange sm:text-5xl">
            Fresh. Fast. Flavorful.
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
            We're committed to serving great food with friendly service and exceptional value.
            Whether you dine in, grab it to go, or order delivery, One More Slice makes it easy
            to enjoy fresh pizza and crave-worthy favorites whenever hunger strikes.
          </p>

          <p className="mt-8 font-display text-xl font-black tracking-tight text-charcoal sm:text-2xl">
            Fresh Pizza. Big Flavor. <span className="text-orange">One More Slice.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
