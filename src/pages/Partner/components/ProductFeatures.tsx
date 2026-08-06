import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

// menu images
import signaturePizza from "../../../assets/images/partner/signature-pizza.jpg";
import sweetSlices from "../../../assets/images/partner/sweet-slices.jpg";
import wholePizza from "../../../assets/images/partner/whole-pizza.jpg";
import breakfast from "../../../assets/images/partner/breakfast-pizza.jpg";

// operator icons
import executionIcon from "../../../assets/images/partner/execution.svg";
import equipmentIcon from "../../../assets/images/partner/equipment.png";
import footprintIcon from "../../../assets/images/partner/footprint.svg";
import marketingIcon from "../../../assets/images/partner/marketing.svg";
import oppurtunityIcon from "../../../assets/images/partner/oppurtunity.svg";

interface MenuItem {
  title: string;
  body: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Signature Pizzas",
    body: "Familiar favorites and craveable specialty pizzas built for broad appeal.",
    image: signaturePizza,
  },
  {
    title: "Breakfast Pizzas",
    body: "A differentiated offering that extends the brand into the morning daypart.",
    image: breakfast,
  },
  {
    title: "Sweet Slices",
    body: "An indulgent addition that creates snack, dessert and incremental purchase opportunities.",
    image: sweetSlices,
  },
  {
    title: "Whole Pizzas",
    body: "Expand beyond individual slices and capture family, group and take-home occasions.",
    image: wholePizza,
  },
];

interface OperatorFeature {
  icon: string;
  title: string;
  body: string;
}

const operatorFeatures: OperatorFeature[] = [
  {
    icon: executionIcon,
    title: "Simple Execution",
    body: "A streamlined operating approach designed for repeatability and consistency.",
  },
  {
    icon: equipmentIcon,
    title: "Flexible Equipment Packages",
    body: "Equipment configurations can be matched to the format and expected sales volume.",
  },
  {
    icon: footprintIcon,
    title: "Efficient Footprint",
    body: "Formats designed to work within a variety of available spaces.",
  },
  {
    icon: marketingIcon,
    title: "Brand & Marketing Support",
    body: "A complete branded identity and marketing platform designed to help operators launch and promote One More Slice.",
  },
  {
    icon: oppurtunityIcon,
    title: "Scalable Opportunity",
    body: "Start with the format that fits your business and build from there.",
  },
];

export function ProductFeatures() {
  return (
    <section className="py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-10">
          {/* Left: menu card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm sm:p-10"
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl font-black uppercase leading-tight text-charcoal sm:text-3xl"
            >
              A Menu That Works Harder
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-body text-base leading-relaxed text-charcoal/70"
            >
              One More Slice isn't dependent on one type of pizza or one time
              of day.
            </motion.p>

            <div className="mt-8 flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex flex-col md:flex-row items-center gap-5"
                >
                  <div className=" shrink-0 overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold uppercase tracking-wide text-orange">
                      {item.title}
                    </p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/70">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 border-t border-charcoal/10 pt-6"
            >
              <p className="font-display text-xs font-bold uppercase tracking-widest text-orange">
                The advantage isn't simply more menu
              </p>
              <p className="mt-1 font-display text-xl font-black uppercase leading-snug text-charcoal">
                It's more reasons to buy.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: operator features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="lg:pl-4 lg:pt-2"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl font-black uppercase leading-tight text-orange sm:text-3xl"
            >
              Built With Operators in Mind
            </motion.span>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-body text-base leading-relaxed text-charcoal/70"
            >
              A great food concept still has to work behind the counter.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-2 font-body text-base leading-relaxed text-charcoal/70"
            >
              <span className="font-bold text-charcoal">One More Slice</span>{" "}
              has been developed around practical restaurant and
              nontraditional foodservice environments with a focus on:
            </motion.p>

            <div className="mt-9 flex flex-col gap-7">
              {operatorFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <img
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold uppercase tracking-wide text-orange">
                      {feature.title}
                    </p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-charcoal/70">
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
