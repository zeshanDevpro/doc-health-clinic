import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type PoolProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const poolProjectItems: PoolProjectItem[] = [
  {
    image: images.modernHome,
    place: "Dallas, TX",
    title: "BUY",
    title2: "GUIDE",
    cardTitle: "Home Buying Advisory",
    description:
      "End-to-end support from shortlisting to closing — contracts, negotiation, and title coordination.",
  },
  {
    image: images.houseExterior,
    place: "Austin, TX",
    title: "SELL",
    title2: "HELP",
    cardTitle: "Home Selling Service",
    description:
      "Market your property to qualified buyers, manage offers, and navigate closing procedures.",
  },
  {
    image: images.team1,
    place: "Phoenix, AZ",
    title: "CMA",
    title2: "REPORT",
    cardTitle: "Comparative Market Analysis",
    description:
      "Data-backed property valuation using recent comps, neighborhood trends, and local MLS data.",
  },
  {
    image: images.team2,
    place: "Miami, FL",
    title: "TITLE",
    title2: "REVIEW",
    cardTitle: "Title & Contract Review",
    description:
      "Verify clear title, HOA docs, disclosure requirements, and contingencies before you commit.",
  },
  {
    image: images.team3,
    place: "Remote",
    title: "VIRTUAL",
    title2: "BUY",
    cardTitle: "Out-of-State Buyer Support",
    description:
      "Virtual tours, remote closing coordination, and dedicated advisory for buyers relocating or investing remotely.",
  },
  {
    image: images.communityAerial,
    place: "Denver, CO",
    title: "INVEST",
    title2: "PLAN",
    cardTitle: "Investment Strategy",
    description:
      "Personalized investment plans based on budget, timeline, and cash-flow or appreciation goals.",
  },
  {
    image: images.suburbanStreet,
    place: "Nationwide",
    title: "MARKET",
    title2: "GUIDE",
    cardTitle: "Neighborhood Selection Guide",
    description:
      "Compare suburbs by schools, commute, appreciation history, and lifestyle fit.",
  },
  {
    image: images.newDevelopment,
    place: "All States",
    title: "CLOSE",
    title2: "HELP",
    cardTitle: "Closing & Escrow Support",
    description:
      "Complete assistance with title insurance, escrow, final walkthrough, and key handover.",
  },
  {
    image: images.luxuryEstate,
    place: "Nationwide",
    title: "FULL",
    title2: "SERVICE",
    cardTitle: "Full Transaction Support",
    description:
      "From first inquiry to closing day — transparent, secure, and fully documented deals.",
  },
];

export const poolAnimationItems: ImageAnimationItem[] = poolProjectItems.map(
  ({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }),
);

export const poolFeatureItems: PoolProjectItem[] = [
  poolProjectItems[0],
  poolProjectItems[2],
  poolProjectItems[7],
];
