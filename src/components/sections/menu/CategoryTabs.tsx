import { motion } from "framer-motion";
import { containerClasses } from "../../../lib/layout";
import { menuCategories } from "../../../constants/menu";

interface CategoryTabsProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryTabs({ activeId, onSelect }: CategoryTabsProps) {
  return (
    <nav className="sticky top-[64px] z-30 border-b border-charcoal/8 bg-cream/95 backdrop-blur-md sm:top-[72px]">
      <div className={`${containerClasses} flex items-center justify-start gap-8 overflow-x-auto sm:justify-center sm:gap-10`}>
        {menuCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`relative shrink-0 whitespace-nowrap py-4 font-display text-xs font-bold uppercase tracking-widest transition-colors sm:text-sm ${
                isActive ? "text-orange" : "text-charcoal/55 hover:text-charcoal"
              }`}
            >
              {cat.tabLabel}
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-orange"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
