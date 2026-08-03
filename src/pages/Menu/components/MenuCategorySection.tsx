import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import type { MenuCategoryData } from "../../../data/menu";

interface MenuCategorySectionProps {
  category: MenuCategoryData;
  isFirst: boolean;
  sectionIndex: number;
}

export function MenuCategorySection({ category, isFirst, sectionIndex }: MenuCategorySectionProps) {
  const sectionBg = sectionIndex % 2 === 1 ? "bg-peach" : "bg-cream";
  const appendSlice = category.id !== "snacks";

  return (
    <section
      id={category.id}
      className={`relative scroll-mt-28 overflow-hidden ${sectionBg} py-10 sm:scroll-mt-32 sm:py-14`}
    >
      <div className={`relative ${containerClasses}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl italic font-black tracking-tight text-charcoal">
            {category.title}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="font-body text-sm uppercase tracking-wide text-muted">{category.subtitle}</span>
            {isFirst && (
              <span className="rounded-full bg-orange px-3 py-1 font-display text-xs font-bold text-white">
                33% Bigger Slice
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {category.items.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group overflow-hidden rounded-lg border border-charcoal/10 bg-[#FBF1DC]"
            >
              <div className="h-32 w-full overflow-hidden sm:h-40">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={150}
                  height={160}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <div className="px-4 py-3 sm:px-5 sm:py-4">
                <p className="font-display text-sm font-bold text-orange sm:text-base">
                  {item.name}
                  {appendSlice ? " Slice" : ""}
                </p>
                <p className="mt-1 line-clamp-3 font-body text-xs leading-relaxed text-muted sm:text-sm">{item.ingredients}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
