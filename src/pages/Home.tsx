import { Hero, Personality, Craving, BrandValue } from "../components/sections";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Personality />
      <Craving />
      <BrandValue />
    </>
  );
}
