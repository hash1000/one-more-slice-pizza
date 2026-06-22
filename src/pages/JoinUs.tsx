import {
  JoinUsHero,
  WhyOneMoreSlice,
  IdealLocations,
  BrochureCTA,
} from "../components/sections/joinUs";
import { FinalCTA } from "../components/sections";
import { joinUsFinalCta, brochureHref } from "../constants/joinUs";
import { useScrollToHash } from "../hooks/useScrollToHash";

export function JoinUs() {
  useScrollToHash();

  return (
    <>
      <JoinUsHero />
      <WhyOneMoreSlice />
      <IdealLocations />
      <BrochureCTA />
      <FinalCTA
        id="join-cta"
        title={joinUsFinalCta.title}
        body={joinUsFinalCta.body}
        buttonLabel="Download Franchise Brochure"
        buttonHref={brochureHref}
        download
      />
    </>
  );
}
