import { motion } from "framer-motion";
import { cravingLines } from "../../../data/craving";
import { containerClasses } from "../../../utils/layout";

export function Craving() {
  return (
    <section id="craving" className="relative scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className={containerClasses}>
        <div className="mx-auto flex max-w-6xl flex-col gap-2">
          {cravingLines.map((line, i) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex min-h-[20vh] items-center justify-center py-4 sm:min-h-[24vh] ${
                i === cravingLines.length - 1 ? "min-h-[28vh] sm:min-h-[34vh]" : ""
              }`}
            >
              <h3
                className={`font-display font-black leading-[1.05] tracking-tight ${line.size} ${line.align} ${line.color} ${
                  i === cravingLines.length - 1 ? "drop-shadow-[0_8px_40px_rgba(242,84,28,0.35)]" : ""
                }`}
              >
                {line.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
