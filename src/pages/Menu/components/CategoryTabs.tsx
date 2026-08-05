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
        <div className="scrollbar-none my-2 flex snap-x snap-mandatory items-stretch justify-evenly gap-1 overflow-x-auto rounded-md bg-orange p-1 shadow-warm sm:justify-center">
          {menuCategories.map((cat, index) => {
            const isActive = cat.id === activeId;
            const isLast = index === menuCategories.length - 1;
            return (
              <div key={cat.id} className="flex flex-1 shrink-0 snap-start items-stretch justify-center sm:flex-none">
                <button
                  onClick={() => onSelect(cat.id)}
                  className={`relative flex-1 cursor-pointer whitespace-nowrap rounded-sm px-4 py-2 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors sm:flex-none sm:px-6 sm:text-base ${
                    isActive ? "" : "hover:text-white/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeMenuTab"
                      className="absolute inset-0 -z-10 rounded-sm bg-orange-dark"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {cat.tabLabel}
                </button>

                {!isLast && (
                  <span className="my-auto ml-1 h-4 w-0.5 shrink-0 self-center bg-white" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}