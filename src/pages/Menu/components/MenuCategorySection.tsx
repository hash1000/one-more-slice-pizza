import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import type { MenuCategoryData } from "../../../data/menu";

const gridColsClass: Record<MenuCategoryData["columns"], string> = {
  4: "sm:grid-cols-2 lg:grid-cols-4",
  3: "sm:grid-cols-3",
  1: "grid-cols-1",
};

const imageSizeClass: Record<MenuCategoryData["columns"], string> = {
  4: "h-40 sm:h-44",
  3: "h-52 sm:h-60",
  1: "h-44 w-44 sm:h-52 sm:w-52",
};

interface MenuCategorySectionProps {
  category: MenuCategoryData;
  isFirst: boolean;
}

export function MenuCategorySection({ category, isFirst }: MenuCategorySectionProps) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-[150px] ${containerClasses} py-16 sm:py-20 ${
        isFirst ? "" : "border-t border-charcoal/8"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl font-black tracking-tight text-charcoal sm:text-4xl">{category.title}</h2>
        <p className="mt-2 font-body text-base text-charcoal/55">{category.subtitle}</p>
      </motion.div>

      {category.columns === 1 ? (
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          {category.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <img
                src={item.image}
                alt={item.alt}
                className={`${imageSizeClass[1]} shrink-0 object-contain`}
                loading="lazy"
                draggable={false}
              />
              <div>
                <p className="font-display text-lg font-bold text-charcoal">{item.name}</p>
                <p className="mt-1 max-w-xs font-body text-sm text-charcoal/55">{item.ingredients}</p>
                <p className="mt-2 font-display text-base font-bold text-orange">$X.XX</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`mt-10 grid grid-cols-2 gap-x-6 gap-y-12 ${gridColsClass[category.columns]}`}>
          {category.items.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt={item.alt}
                className={`${imageSizeClass[category.columns]} w-auto object-contain`}
                loading="lazy"
                draggable={false}
              />
              <p className="mt-4 font-display text-base font-bold text-charcoal">{item.name}</p>
              <p className="mt-1 font-body text-sm leading-snug text-charcoal/55">{item.ingredients}</p>
              <p className="mt-2 font-display text-base font-bold text-orange">$X.XX</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
