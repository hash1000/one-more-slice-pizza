import { useScrollToHash } from "../../hooks/useScrollToHash";
import { Hero, FeatureStrip, BrandValue, LocationsSection, WhyItWorksSection } from "./components";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <FeatureStrip />
      <BrandValue />
      <LocationsSection />
      <WhyItWorksSection />
    </>
  );
}
