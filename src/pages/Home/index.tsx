import { useScrollToHash } from "../../hooks/useScrollToHash";
import { Hero, Personality, Craving, BrandValue } from "./components";

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
