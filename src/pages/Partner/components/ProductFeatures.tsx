import { motion } from "framer-motion";
import {
  Zap,
  Wrench,
  Shrink,
  Megaphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import signaturePizza from "../../../assets/images/menu/signature/pepperoni.webp";
import breakfastPizza from "../../../assets/images/menu/breakfast/egg-bacon-cheese.webp";
import sweetSlice from "../../../assets/images/menu/sweet-slices/chocolate-bliss.webp";
import snackItem from "../../../assets/images/menu/snacks/garlic-sticks.webp";

interface MenuItem {
  title: string;
  body: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Signature Pizzas",
    body: "Whole-pizza and by-the-slice ordering built around fan-favorite flavors.",
    image: signaturePizza,
  },
  {
    title: "Breakfast Pizzas",
    body: "Start selling earlier with pizzas designed for the morning customer.",
    image: breakfastPizza,
  },
  {
    title: "Sweet Slices",
    body: "An easy incremental purchase that creates another occasion to buy.",
    image: sweetSlice,
  },
  {
    title: "Snacks & Sides",
    body: "Round out the order with high-margin, easy-to-execute add-ons.",
    image: snackItem,
  },
];

interface OperatorFeature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const operatorFeatures: OperatorFeature[] = [
  {
    icon: Zap,
    title: "Simple Execution",
    body: "A streamlined operating approach designed for repeatability and consistency.",
  },
  {
    icon: Wrench,
    title: "Flexible Equipment Packages",
    body: "Equipment configurations can be matched to the format and expected sales volume.",
  },
  {
    icon: Shrink,
    title: "Efficient Footprint",
    body: "Formats designed to work within a variety of available spaces.",
  },
  {
    icon: Megaphone,
    title: "Brand & Marketing Support",
    body: "A complete branded identity and marketing platform designed to help operators launch and promote One More Slice.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Opportunity",
    body: "Start with the format that fits your business and build from there.",
  },
];

export function ProductFeatures() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-xs font-bold uppercase tracking-widest text-orange"
            >
              A Menu That Works Harder
            </motion.span>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-body text-base leading-relaxed text-charcoal/70"
            >
              One More Slice isn't dependent on one type of pizza or one time
              of day.
            </motion.p>

            <div className="mt-8 flex flex-col gap-5">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold uppercase text-charcoal">
                      {item.title}
                    </p>
                    <p className="mt-0.5 font-body text-sm leading-relaxed text-charcoal/70">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 font-display text-lg font-black uppercase leading-snug text-charcoal"
            >
              The advantage isn't simply more menu.{" "}
              <span className="text-orange">It's more reasons to buy.</span>
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-xs font-bold uppercase tracking-widest text-orange"
            >
              Built With Operators in Mind
            </motion.span>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-body text-base leading-relaxed text-charcoal/70"
            >
              A great food concept still has to work behind the counter. One
              More Slice has been developed around practical restaurant and
              nontraditional foodservice environments with a focus on:
            </motion.p>

            <div className="mt-8 flex flex-col gap-6">
              {operatorFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange/10">
                      <Icon className="text-orange" size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-charcoal">
                        {feature.title}
                      </p>
                      <p className="mt-0.5 font-body text-sm leading-relaxed text-charcoal/70">
                        {feature.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
