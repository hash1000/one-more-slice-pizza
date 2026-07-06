import { useEffect } from "react";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { PartnerHero, PartnerOptions, PartnerProcess, PartnerForm } from "./components";

export function Partner() {
  useScrollToHash();

  useEffect(() => {
    document.title = "Partner With Us | One More Slice Pizza";

    const meta = document.querySelector('meta[name="description"]') ?? (() => {
      const el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
      return el;
    })();
    const previousContent = meta.getAttribute("content");
    meta.setAttribute(
      "content",
      "Partner with One More Slice Pizza through a franchise or licensing program. Tell us about your business and we'll be in touch within 1 business day."
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
      <PartnerHero />
      <PartnerOptions />
      <PartnerProcess />
      <PartnerForm />
    </>
  );
}
