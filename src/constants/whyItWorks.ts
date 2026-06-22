import morePizza from "../assets/images/why-it-works/more-pizza.jpg";
import moreSatisfaction from "../assets/images/why-it-works/more-satisfaction.jpg";
import moreValue from "../assets/images/why-it-works/more-value.jpg";
import moreToComeBackFor from "../assets/images/why-it-works/more-to-come-back-for.jpg";
import type { WhyUsCardData } from "../types";

export const whyItWorksIntro =
  "We built One More Slice Pizza around one simple idea: every slice should feel worth coming back for.";

export const whyItWorksCards: WhyUsCardData[] = [
  {
    highlight: "More",
    title: "Pizza",
    description: "14 inches. 6 slices. Bigger bites in every slice.",
    image: morePizza,
    alt: "Pepperoni pizza on a wooden board",
  },
  {
    highlight: "More",
    title: "Satisfaction",
    description: "The kind of pizza that leaves you full, happy, and reaching for one more.",
    image: moreSatisfaction,
    alt: "Cheesy slice being pulled from a fresh pizza",
  },
  {
    highlight: "More",
    title: "Value",
    description: "A rewarding pizza experience that feels worth every dollar.",
    image: moreValue,
    alt: "Loaded pizza slice with melted cheese pull",
  },
  {
    highlight: "More",
    title: "to Come Back For",
    description: "Fresh, consistent, and worth another visit.",
    image: moreToComeBackFor,
    alt: "Pizza fresh out of a wood-fired oven",
  },
];
