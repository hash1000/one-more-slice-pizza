import { useScrollToHash } from "../../hooks/useScrollToHash";
import { Hero, Personality, BrandValue, LocationsSection, WhyItWorksSection } from "./components";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Personality />
      {/* <Craving /> */}
      <BrandValue />
      <LocationsSection />
      <WhyItWorksSection />
    </>
  );
}
