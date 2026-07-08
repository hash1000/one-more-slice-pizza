import { useScrollToHash } from "../../hooks/useScrollToHash";
import { Hero, BrandValue, LocationsSection, WhyItWorksSection } from "./components";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <BrandValue />
      <LocationsSection />
      <WhyItWorksSection />
    </>
  );
}
