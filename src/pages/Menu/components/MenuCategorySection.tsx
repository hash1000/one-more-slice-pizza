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
  isDark: boolean;
}

const sectionBgClass: Record<"light" | "tint" | "dark", string> = {
  light: "bg-cream",
  tint: "bg-cream-soft",
  dark: "bg-charcoal",
};

export function MenuCategorySection({ category, isFirst, isDark }: MenuCategorySectionProps) {
  const tone = isDark ? "dark" : isFirst ? "light" : "tint";

  const headingColor = isDark ? "text-cream" : "text-charcoal";
  const subtitleColor = isDark ? "text-cream/60" : "text-charcoal/55";
  const cardBg = isDark ? "bg-charcoal-soft" : "bg-cream";
  const cardBorder = isDark ? "border-cream/10" : "border-charcoal/8";
  const nameColor = isDark ? "text-cream" : "text-charcoal";
  const ingredientColor = isDark ? "text-cream/50" : "text-charcoal/55";

  return (
    <section
      id={category.id}
      className={`relative scroll-mt-[150px] overflow-hidden ${sectionBgClass[tone]} py-16 sm:py-20`}
    >
      {isDark && (
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange/15 blur-[110px]" />
      )}
      {!isDark && !isFirst && (
        <div className="pointer-events-none absolute -bottom-20 -right-20 -z-0 h-64 w-64 rounded-full bg-orange/8 blur-[100px]" />
      )}

      <div className={`relative ${containerClasses}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <span
            className={`rounded-2xl px-5 py-2 font-display text-3xl font-black tracking-tight sm:text-4xl ${headingColor} ${
              isDark ? "bg-cream/8" : "bg-orange/10"
            }`}
          >
            {category.title}
          </span>
          {isFirst && (
            <span className="rounded-full bg-orange px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest text-cream shadow-warm">
              Bestseller
            </span>
          )}
        </motion.div>
        <p className={`mt-3 font-body text-base ${subtitleColor}`}>{category.subtitle}</p>
        <div className="mt-6 h-1 w-16 rounded-full bg-orange" />

        {category.columns === 1 ? (
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            {category.items.map((item) => (
              <div
                key={item.name}
                className={`group flex flex-col items-center gap-6 rounded-2xl border ${cardBorder} ${cardBg} px-6 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg sm:flex-row sm:text-left`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`${imageSizeClass[1]} shrink-0 object-contain transition-transform duration-300 group-hover:scale-105`}
                  loading="lazy"
                  draggable={false}
                />
                <div>
                  <p className={`font-display text-lg font-bold ${nameColor}`}>{item.name}</p>
                  <p className={`mt-1 max-w-xs font-body text-sm ${ingredientColor}`}>{item.ingredients}</p>
                  <p className="mt-3 inline-block rounded-full bg-orange px-3 py-1 font-display text-lg font-black text-cream shadow-warm">
                    $X.XX
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ${gridColsClass[category.columns]}`}>
            {category.items.map((item) => (
              <div
                key={item.name}
                className={`group flex flex-col items-center rounded-2xl border ${cardBorder} ${cardBg} px-4 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`${imageSizeClass[category.columns]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                  loading="lazy"
                  draggable={false}
                />
                <p className={`mt-4 font-display text-base font-bold ${nameColor}`}>{item.name}</p>
                <p className={`mt-1 font-body text-sm leading-snug ${ingredientColor}`}>{item.ingredients}</p>
                <p className="mt-3 inline-block rounded-full bg-orange px-3 py-1 font-display text-base font-black text-cream shadow-warm">
                  $X.XX
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
