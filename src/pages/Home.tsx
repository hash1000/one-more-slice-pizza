import { Hero, Personality, Craving, FinalCTA } from "../components/sections";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Personality />
      <Craving />
      <FinalCTA />
    </>
  );
}
