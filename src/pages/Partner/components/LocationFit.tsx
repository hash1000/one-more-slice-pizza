import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import standaloneImg from "../../../assets/images/partner/location-standalone.jpg";
import inlineImg from "../../../assets/images/partner/location-inline-endcap.jpg";
import storeInStoreImg from "../../../assets/images/partner/location-store-in-store.jpg";
import convenienceImg from "../../../assets/images/partner/location-convenience-store.jpg";
import travelCenterImg from "../../../assets/images/partner/location-travel-center.jpg";

interface LocationType {
  title: string;
  body: string;
  image: string;
}

const locations: LocationType[] = [
  {
    title: "Standalone Restaurant",
    body: "The complete branded restaurant experience",
    image: standaloneImg,
  },
  {
    title: "Inline or Endcap",
    body: "A dedicated One More Slice location within high-traffic retail environments",
    image: inlineImg,
  },
  {
    title: "Store-in-Store",
    body: "Create a recognizable branded pizza destination inside an existing operation",
    image: storeInStoreImg,
  },
  {
    title: "Convenience Store",
    body: "Add a differentiated hot-food program designed around the convenience customer",
    image: convenienceImg,
  },
  {
    title: "Travel Center",
    body: "Serve multiple dayparts and high-volume customer traffic from one flexible concept",
    image: travelCenterImg,
  },
];

export function LocationFit() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className={containerClasses}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-cream sm:text-4xl lg:text-5xl">
            Designed to Fit the Location
          </h2>
          <p className="mt-4 font-display text-base font-bold uppercase tracking-wide text-orange sm:text-lg">
            One More Slice can be adapted to a range of operating
            environments
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {locations.map((location) => (
            <motion.div
              key={location.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col overflow-hidden rounded-xl border border-cream/15 bg-charcoal transition-colors duration-200 hover:border-orange/60"
            >
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 py-6">
                <h3 className="font-display text-base font-black uppercase leading-snug text-orange sm:text-lg">
                  {location.title}
                </h3>
                <span className="mt-3 h-px w-10 bg-cream/25" />
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/70">
                  {location.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
