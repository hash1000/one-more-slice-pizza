import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../../utils/motion";
import { containerClasses } from "../../../utils/layout";
import type { MenuCategoryData } from "../../../data/menu";

interface MenuCategorySectionProps {
  category: MenuCategoryData;
  isFirst: boolean;
}

export function MenuCategorySection({ category, isFirst }: MenuCategorySectionProps) {
  const headingColor = "text-charcoal";
  const subtitleColor = "text-charcoal/55";
  const cardBg = "bg-cream";
  const cardBorder = "border-charcoal/8";
  const nameColor = "text-charcoal";
  const ingredientColor = "text-charcoal/55";

  return (
    <section
      id={category.id}
      className="relative scroll-mt-37.5 overflow-hidden bg-cream py-16 sm:py-20"
    >
      {!isFirst && (
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
          <span className={`rounded-2xl bg-orange/10 px-5 py-2 font-display text-3xl font-black tracking-tight sm:text-4xl ${headingColor}`}>
            {category.title}
          </span>
          {isFirst && (
            <span className="rounded-full bg-orange px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest text-cream shadow-warm">
              Bestseller
            </span>
          )}
        </motion.div>
        <p className={`mt-3 font-body text-base ${subtitleColor}`}>{category.subtitle}</p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-6 h-1 w-16 origin-left rounded-full bg-orange"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4"
        >
          {category.items.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`group relative flex min-h-80 flex-col items-center overflow-hidden rounded-2xl border ${cardBorder} ${cardBg} px-4 py-6 text-center shadow-soft transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-warm-lg`}
            >
              {item.badge && (
                <span className="absolute right-3 top-3 rounded-full bg-charcoal px-2.5 py-1 font-display text-[0.6rem] font-bold uppercase tracking-widest text-cream">
                  {item.badge}
                </span>
              )}
              <img
                src={item.image}
                alt={item.alt}
                width={140}
                height={140}
                className="h-35 w-35 object-contain transition-transform duration-250 ease-in-out group-hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              <p className={`mt-4 font-display text-base font-bold ${nameColor}`}>{item.name}</p>
              <p className={`mt-1 line-clamp-2 font-body text-sm leading-snug ${ingredientColor}`}>{item.ingredients}</p>
              <p className="mt-3 inline-block rounded-full bg-orange px-3 py-1 font-display text-base font-black text-cream shadow-warm transition-[filter] duration-200 ease-in-out group-hover:brightness-105">
                {item.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
