import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBigSlice from "../../../assets/images/hero/hero-big-slice.svg";
import icon1 from "../../../assets/images/hero/icon1.png";
import icon2 from "../../../assets/images/hero/icon2.png";
import icon3 from "../../../assets/images/hero/icon3.png";
import icon4 from "../../../assets/images/hero/icon4.png";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";
import { fadeUp, viewportOnce } from "../../../utils/motion";

// To add/remove slices, just add/remove entries here (and drop the matching
// file into src/assets/slices/). The slider cycles through them in order.
// import sliceBbqChicken from "../../../assets/slices/BBQ Chicken.png";
// import sliceBuffaloRanch from "../../../assets/slices/Buffalo Ranch.png";
// import sliceCaramelApple from "../../../assets/slices/Caramel Apple Sweet.png";
// import sliceCheese from "../../../assets/slices/Cheese.png";
// import sliceChickenSupreme from "../../../assets/slices/Chicken Supreme.png";
// import sliceChocolateBliss from "../../../assets/slices/Chocolate Bliss Sweet.png";
// import sliceChurroSupreme from "../../../assets/slices/Churro Supreme Sweet.png";
// import sliceEggBacon from "../../../assets/slices/Egg n Bacon.png";
// import sliceEggCheese from "../../../assets/slices/Egg n Cheese.png";
// import sliceEggSausage from "../../../assets/slices/Egg n Sausage.png";
// import sliceMeatLover from "../../../assets/slices/Meat Lover.png";
// import slicePepperoni from "../../../assets/slices/Pepperoni.png";
// import sliceSausage from "../../../assets/slices/Sausage.png";
// import sliceVeggie from "../../../assets/slices/Veggie.png";

// const slices = [
//   slicePepperoni,
//   sliceBbqChicken,
//   sliceBuffaloRanch,
//   sliceChickenSupreme,
//   sliceMeatLover,
//   sliceSausage,
//   sliceVeggie,
//   sliceCheese,
//   sliceEggBacon,
//   sliceEggCheese,
//   sliceEggSausage,
//   sliceCaramelApple,
//   sliceChocolateBliss,
//   sliceChurroSupreme,
// ];

// const SLICE_INTERVAL_MS = 3200;

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
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [activeSlice, setActiveSlice] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const applyMotionPreference = () => {
      if (reduceMotionQuery.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        video.play().catch(() => {});
      }
    };

    applyMotionPreference();
    reduceMotionQuery.addEventListener("change", applyMotionPreference);
    return () =>
      reduceMotionQuery.removeEventListener("change", applyMotionPreference);
  }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setActiveSlice((prev) => (prev + 1) % slices.length);
  //   }, SLICE_INTERVAL_MS);

  //   return () => clearInterval(id);
  // }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#FAF7F2] pt-28 pb-16 sm:pt-24 lg:pb-20 sm:ps-4 lg:pe-4"
    >
      <div
        className={`${containerClasses} grid grid-cols-1 items-center lg:grid-cols-[40fr_60fr] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24`}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          <div className="ml-[3rem] lg:ml-0">
            <img
              src={heroBigSlice}
              alt="Our Promise Is Simple: Big Slice"
              className="mx-auto w-full max-w-[39rem] lg:mx-0"
            />
            <p className="mt-6 w-fit font-display text-3xl font-bold uppercase tracking-wide text-charcoal sm:text-4xl">
              More Pizza. More Satisfaction.
            </p>

            <p className="mx-auto mt-4 max-w-[48ch] text-xl text-charcoal/60 lg:mx-0">
              We serve{" "}
              <span className="font-semibold text-orange">big slices</span>{" "}
              packed with flavor and made to satisfy.
            </p>

            <div className="mt-10 inline-flex flex-col items-center gap-5 sm:flex-row">
              <button
                onClick={() => navigate("/menu")}
                className={`${buttonClasses("primary", "lg")} inline-flex items-center gap-2`}
              >
                See the Slices
                <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </button>

              {/* <button
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
              </button> */}
            </div>
          </div>

          {/* Feature row */}
        </motion.div>

        {/* Right: pizza on a warm cream surface */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative order-1 mx-auto flex w-full max-w-[28rem] items-center justify-center sm:max-w-[34rem] lg:order-2 lg:max-w-[46rem]"
        >
          {/* Soft radial orange glow behind the pizza */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-56 w-56 rounded-full bg-orange/[0.07] blur-[70px] sm:h-80 sm:w-80 sm:blur-[100px] lg:h-[28rem] lg:w-[28rem] lg:blur-[120px]"
          />

          {/* Soft elliptical drop shadow under the pizza */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[8%] h-10 w-2/3 rounded-full bg-[#2B1B12]/20 blur-2xl sm:h-14 lg:bottom-[12%]"
          />

          <video
            ref={videoRef}
            className="relative aspect-square w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/hero-poster.jpg"
          >
            <source src="/videos/hero-animation.webm" type="video/webm" />
            <source src="/videos/hero-animation.mp4" type="video/mp4" />
          </video>
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
