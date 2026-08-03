import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import driveThruImg from "../../../assets/images/locations/drive-thru.jpg";
import inlineImg from "../../../assets/images/locations/inline.jpg";
import convenienceStoreImg from "../../../assets/images/locations/convenience-store.jpg";
import travelCentersImg from "../../../assets/images/locations/travel-centers.jpg";
import hospitalImg from "../../../assets/images/locations/hospital.jpg";
import universityCollegeImg from "../../../assets/images/locations/university-college.jpg";
import airportImg from "../../../assets/images/locations/airport.jpg";
import othersImg from "../../../assets/images/locations/others.jpg";

interface LocationItem {
  label: string;
  image: string;
}

const locations: LocationItem[] = [
  { label: "Drive-Thru", image: driveThruImg },
  { label: "Inline", image: inlineImg },
  { label: "Convenience Store", image: convenienceStoreImg },
  { label: "Travel Centers", image: travelCentersImg },
  { label: "Hospital", image: hospitalImg },
  { label: "University/College", image: universityCollegeImg },
  { label: "Airport", image: airportImg },
  { label: "Others", image: othersImg },
];

export function LocationsSection() {
  return (
    <section className="bg-white py-20">
      <div className={containerClasses}>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-base text-charcoal"
        >
          Where We Fit
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 mb-12 text-center font-display text-2xl text-orange"
        >
          Perfect For Every Location.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:gap-8"
        >
          {locations.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="location-card flex cursor-pointer flex-col items-center rounded-2xl bg-charcoal p-1.5"
            >
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="h-44.5 w-full rounded-2xl object-cover"
              />
              <p className="py-4 text-center font-display text-base text-orange">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
