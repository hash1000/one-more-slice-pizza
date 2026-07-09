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
  const headingColor = "text-charcoal";
  const subtitleColor = "text-muted";
  const cardBg = "bg-card";
  const cardBorder = "border-charcoal/12";
  const nameColor = "text-charcoal";
  const ingredientColor = "text-muted";
  const sectionBg = sectionIndex % 2 === 1 ? "bg-peach" : "bg-cream";

  return (
    <section
      id={category.id}
      className={`relative scroll-mt-28 overflow-hidden ${sectionBg} py-10 sm:scroll-mt-32 sm:py-14`}
    >
      {!isFirst && (
        <div className="pointer-events-none absolute -bottom-20 -right-20 -z-0 h-40 w-40 rounded-full bg-orange/8 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />
      )}

      <div className={`relative ${containerClasses}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className={`rounded-2xl bg-orange/10 px-5 py-1.5 font-display text-2xl font-black tracking-tight sm:text-3xl ${headingColor}`}>
            {category.title}
          </span>
          {isFirst && (
            <span className="rounded-full bg-orange px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest text-cream shadow-warm">
              Bestseller
            </span>
          )}
          <span className={`font-body text-base ${subtitleColor}`}>{category.subtitle}</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        >
          {category.items.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`menu-card group relative flex h-[26rem] cursor-pointer flex-col items-center overflow-hidden rounded-2xl border ${cardBorder} ${cardBg} px-4 py-5 text-center shadow-soft sm:h-80 sm:py-4 lg:h-96`}
            >
              {item.badge && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-charcoal px-2.5 py-1 font-display text-[0.6rem] font-bold uppercase tracking-widest text-cream">
                  {item.badge}
                </span>
              )}
              <div className="flex h-[52%] w-[78%] shrink-0 items-center justify-center overflow-visible sm:h-[45%] sm:w-[62%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={150}
                  height={250}
                  className="slice-diagonal h-[80%] w-[80%] object-contain sm:h-[72%] sm:w-[72%]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <p className={`menu-card-title mt-3 font-display text-[1.375rem] font-bold leading-snug sm:text-xl ${nameColor}`}>{item.name}</p>
              <p className={`mt-1 line-clamp-3 font-body text-[1.0625rem] leading-relaxed sm:text-base ${ingredientColor}`}>{item.ingredients}</p>
              {/* <span className="mt-auto inline-flex items-center gap-1 rounded-full bg-orange/10 px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest text-orange-dark">
                Halal available
              </span> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
