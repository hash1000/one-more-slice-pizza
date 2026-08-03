import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroBigSlice from "../../../assets/images/hero/hero-text.svg";
import { Container } from "../../../components/layout/Container";
import { containerClasses } from "../../../utils/layout";
import { buttonClasses } from "../../../utils/buttonStyles";
import { fadeUp, viewportOnce } from "../../../utils/motion";

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
        // Safari rejects play() before enough data is buffered; retry on canplay
        video.play().catch(() => {
          video.addEventListener(
            "canplay",
            () => {
              if (!reduceMotionQuery.matches) video.play().catch(() => {});
            },
            { once: true },
          );
        });
      }
    };

    applyMotionPreference();
    reduceMotionQuery.addEventListener("change", applyMotionPreference);
    return () =>
      reduceMotionQuery.removeEventListener("change", applyMotionPreference);
  }, []);

  return (
    <Container id="hero">
      <div
        className={`${containerClasses} grid grid-cols-1 items-center lg:grid-cols-[40fr_60fr] pt-4 pb-16 sm:pb-20 lg:pb-24`}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          <div className="ml-6 sm:ml-8 lg:ml-0">
            <img
              src={heroBigSlice}
              alt="Our Promise Is Simple: Big Slice"
              className="mx-auto w-full max-w-[39rem] lg:mx-0"
            />

            <p className=" mt-4 max-w-[48ch] text-xl text-muted lg:mx-0">
              Fresh oven hot pizza in oversized slices.
              <p className="max-w-[48ch] text-xl text-muted lg:mx-0">
                Fifteen varieties, made throughout
              </p>
              <p className="max-w-[48ch] text-xl text-muted lg:mx-0">
                the day, everyday.
              </p>
            </p>
            <div className="mt-10 inline-flex flex-col items-center gap-5 sm:flex-row">
              <button
                onClick={() => navigate("/menu")}
                className={`${buttonClasses("primary", "lg")} inline-flex items-center gap-2`}
              >
                See the Slices
              </button>
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

          <video
            ref={videoRef}
            className="relative aspect-square w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/videos/hero-poster.jpg"
          >
            {/* mp4 first: Safari claims WebM support but decodes VP9 unreliably */}
            <source
              src="/videos/hero-animation.mp4"
              type='video/mp4; codecs="avc1.42E01E"'
            />
            <source
              src="/videos/hero-animation.webm"
              type='video/webm; codecs="vp9"'
            />
          </video>
        </motion.div>
      </div>
    </Container>
  );
}
