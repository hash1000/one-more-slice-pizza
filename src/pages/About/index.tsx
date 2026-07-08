import { useEffect } from "react";
import { OurStory } from "./components";

export function About() {
  useEffect(() => {
    document.title = "About Us | One More Slice Pizza";

    const meta = document.querySelector('meta[name="description"]') ?? (() => {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
      return el;
    })();
    const previousContent = meta.getAttribute("content");
    meta.setAttribute(
      "content",
      "Learn the story behind One More Slice Pizza — fresh ingredients, real mozzarella, and dough baked fresh daily for pizza that's always worth coming back for."
    );

    return () => {
      document.title = "One More Slice Pizza";
      if (previousContent !== null) {
        meta.setAttribute("content", previousContent);
      }
    };
  }, []);

  return (
    <>
      <OurStory />
    </>
  );
}
