import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroSlice from "../../../assets/images/hero/hero-slice.png";
import heroBigSlice from "../../../assets/images/hero/hero-big-slice.png";
import icon1 from "../../../assets/images/hero/icon1.png";
import icon2 from "../../../assets/images/hero/icon2.png";
import icon3 from "../../../assets/images/hero/icon3.png";
import icon4 from "../../../assets/images/hero/icon4.png";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";

const features = [
  {
    label: "Big Size",
    description: "Generous slices in every order.",
    icon: icon1,
  },
  {
    label: "Great Taste",
    description: "Bold flavors made with quality ingredients.",
    icon: icon2,
  },
  {
    label: "Made Fresh",
    description: "Hot, fresh and made to order.",
    icon: icon3,
  },
  {
    label: "Made For You",
    description: "Your satisfaction is our priority.",
    icon: icon4,
  },
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#FAF7F2] pt-28 pb-16 sm:pt-32 lg:pb-20"
    >
      <div
        className={`${containerClasses} grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-8`}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          <img
            src={heroBigSlice}
            alt="Our Promise Is Simple: Big Slice"
            className="mx-auto w-full max-w-[39rem] lg:mx-0"
          />
          <div className="ml-[3rem] lg:ml-[6rem]">
            <p className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-charcoal sm:text-3xl">
              More Pizza. More Satisfaction.
            </p>

            <p className="mx-auto mt-3 max-w-[48ch] text-lg text-charcoal/60 lg:mx-0">
              We serve{" "}
              <span className="font-semibold text-orange">big slices</span>{" "}
              packed with flavor and made to satisfy.
            </p>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => navigate("/menu")}
                className={buttonClasses("primary", "lg")}
              >
                See the Slice
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#our-story")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex cursor-pointer items-center gap-3 font-display text-base font-bold uppercase tracking-wide text-charcoal"
              >
                <span className="flex h-[4.125rem] w-[4.125rem] items-center justify-center rounded-full border-2 border-charcoal transition-colors group-hover:bg-charcoal group-hover:text-cream">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M12 2 2 20h20L12 2Zm0 4.2L17.5 18h-11L12 6.2Z" />
                    <circle cx="12" cy="15" r="1.1" />
                    <circle cx="10" cy="12" r="0.9" />
                    <circle cx="14" cy="12.5" r="0.9" />
                  </svg>
                </span>
                Build your own Pizza
              </button>
            </div>
          </div>

          {/* Feature row */}
        </motion.div>

        {/* Right: angled pizza slice photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto mt-6 flex w-full max-w-[26rem] items-center justify-center sm:max-w-[32rem] lg:mt-0 lg:max-w-[40rem]"
        >
          <img
            src={heroSlice}
            alt="A big slice of One More Slice pepperoni pizza"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
      <div className=" mt-8 grid grid-cols-2 border-charcoal/10 pt-8 sm:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={feature.label}
            className={`flex items-center justify-center gap-4 px-4 py-2 ${
              index !== 0 ? "sm:border-l sm:border-charcoal/15" : ""
            }`}
          >
            <img
              src={feature.icon}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <div className="text-left">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-charcoal">
                {feature.label}
              </p>
              <p className="text-xs leading-snug text-charcoal/55">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
