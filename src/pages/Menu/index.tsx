import { useCallback } from "react";
import { MenuHero, CategoryTabs, MenuCategorySection, MenuCTA } from "./components";
import { menuCategories } from "../../data/menu";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const categoryIds = menuCategories.map((cat) => cat.id);

export function Menu() {
  const activeId = useScrollSpy(categoryIds, "-160px 0px -70% 0px");

  const handleSelect = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-cream">
      <MenuHero />
      <CategoryTabs activeId={activeId} onSelect={handleSelect} />
      {menuCategories.map((category, i) => (
        <MenuCategorySection key={category.id} category={category} isFirst={i === 0} />
      ))}
      <MenuCTA />
    </div>
  );
}
