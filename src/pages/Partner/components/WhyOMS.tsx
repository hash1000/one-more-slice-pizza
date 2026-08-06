import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";

// daypart photos
import Breakfast from "../../../assets/images/menu/breakfast/egg-cheese.webp";
import Lunch from "../../../assets/images/menu/signature/pepperoni.webp";
import Dinner from "../../../assets/images/menu/signature/veggie.webp";
import Snacks from "../../../assets/images/menu/snacks/garlic-sticks.webp";
import LateNight from "../../../assets/images/menu/signature/chicken-supreme.webp";
import Sweets from "../../../assets/images/menu/sweet-slices/churro-supreme.webp";

// daypart icons
import BreakFastIcon from "../../../assets/images/partner/why-one-more-slice-break-fast.svg";
import LunchIcon from "../../../assets/images/partner/why-one-more-slice-lunch.svg";
import DinnerIcon from "../../../assets/images/partner/why-one-more-slice-dinner.svg";
import SnacksIcon from "../../../assets/images/partner/why-one-more-slice-snacks.svg";
import NightIcon from "../../../assets/images/partner/why-one-more-slice-night.svg";
import SweetsIcon from "../../../assets/images/partner/why-one-more-slice-sweets.svg";

interface Daypart {
  id: string;
  icon: string;
  photo: string;
  title: string;
  body: string;
  highlight?: boolean;
}

const dayparts: Daypart[] = [
  {
    id: "breakfast",
    icon: BreakFastIcon,
    photo: Breakfast,
    title: "Breakfast",
    body: "Start selling earlier with breakfast pizzas designed for the morning customer.",
  },
  {
    id: "lunch",
    icon: LunchIcon,
    photo: Lunch,
    title: "Lunch",
    body: "Big individual slices create a fast, satisfying meal for customers on the move.",
  },
  {
    id: "dinner",
    icon: DinnerIcon,
    photo: Dinner,
    title: "Dinner",
    body: "Signature pizzas and whole-pizza ordering capture traditional pizza occasions.",
  },
  {
    id: "snack",
    icon: SnacksIcon,
    photo: Snacks,
    title: "Snack",
    body: "Individual slices create an easy incremental purchase throughout the afternoon.",
  },
  {
    id: "late-night",
    icon: NightIcon,
    photo: LateNight,
    title: "Late Night",
    body: "Pizza's natural late-night appeal extends the selling day.",
  },
  {
    id: "something-sweet",
    icon: SweetsIcon,
    photo: Sweets,
    title: "Something Sweet",
    body: "Sweet slices create another purchase occasion and incremental check opportunity.",
    highlight: true,
  },
];

export function WhyOMS() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-charcoal sm:text-4xl">
            Why One More Slice?
          </h2>
          <p className="mt-3 font-display text-sm font-bold uppercase tracking-widest text-orange sm:text-base">
            More Sales Opportunity in Every Day
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Traditional pizza concepts concentrate heavily on lunch and
            dinner. One More Slice is designed to reach further.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6"
        >
          {dayparts.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-orange/20 bg-[#FFF9DF] shadow-sm"
            >
              <div className="flex flex-col items-center gap-2 px-4 pt-6 ">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-9"
                />
                {item.highlight ? (
                  <span className="rounded-md border border-orange/40 bg-white/70 px-2 py-0.5 text-center font-display text-xs font-bold uppercase tracking-wide text-orange">
                    {item.title}
                  </span>
                ) : (
                  <p className="text-center font-display text-xs font-bold uppercase tracking-wide text-orange sm:text-sm">
                    {item.title}
                  </p>
                )}
              </div>

              <div className="aspect-square w-full overflow-hidden border-t border-orange/15">
                <img
                  src={item.photo}
                  alt={`${item.title} pizza`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="px-4 py-4 text-center font-body text-xs leading-relaxed text-charcoal/70 sm:text-sm">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="mx-auto mt-16 max-w-5xl border-t border-charcoal/10" /> */}

        {/* <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl text-center font-display text-xl font-black uppercase leading-snug text-charcoal sm:text-2xl"
        >
          One Kitchen. More Occasions.{" "}
          <span className="text-orange">More Opportunities to Sell.</span>
        </motion.p> */}
      </div>
    </section>
  );
}
