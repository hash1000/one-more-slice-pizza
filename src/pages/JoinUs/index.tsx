import { useScrollToHash } from "../../hooks/useScrollToHash";
import {
  JoinUsHero,
  WhyOneMoreSlice,
  IdealLocations,
  BrochureCTA,
  InterestForm,
  FinalCTA,
} from "./components";
import { joinUsFinalCta, brochureHref } from "../../data/joinUs";

export function JoinUs() {
  useScrollToHash();

  return (
    <>
      <JoinUsHero />
      <WhyOneMoreSlice />
      <IdealLocations />
      <BrochureCTA />
      <InterestForm />
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
