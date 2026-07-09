import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { containerClasses } from "../../../utils/layout";
import { menuCategories } from "../../../data/menu";

interface CategoryTabsProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryTabs({ activeId, onSelect }: CategoryTabsProps) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-29 z-30 bg-cream/95 backdrop-blur-md transition-shadow duration-200 ease-in-out sm:top-33 ${
        stuck ? "shadow-[0_4px_20px_-12px_rgba(34,23,16,0.3)]" : ""
      }`}
    >
      <div className={containerClasses}>
        <div className="scrollbar-none my-2 flex snap-x snap-mandatory items-center gap-1 overflow-x-auto rounded-full bg-charcoal/5 p-1 sm:justify-center">
          {menuCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`relative shrink-0 snap-start cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-display text-sm font-bold uppercase tracking-wide transition-colors sm:px-6 sm:text-base ${
                  isActive ? "text-cream" : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeMenuTab"
                    className="absolute inset-0 -z-10 rounded-full bg-orange shadow-warm"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                {cat.tabLabel}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
