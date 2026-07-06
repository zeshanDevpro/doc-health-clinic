import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type HvacProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const hvacProjectItems: HvacProjectItem[] = [
  {
    image: images.heroInvestment,
    place: "Dallas, TX",
    title: "RENT",
    title2: "AL",
    cardTitle: "Single-Family Rental",
    description:
      "Turnkey rental home in a strong school district — ideal for buy-and-hold investors.",
  },
  {
    image: images.plot,
    place: "Austin, TX",
    title: "LAND",
    title2: "BANK",
    cardTitle: "Corner Lot — Land Banking",
    description:
      "Premium corner lot in a path-of-growth area — historically strong appreciation potential.",
  },
  {
    image: images.apartment,
    place: "Houston, TX",
    title: "PRE",
    title2: "SALE",
    cardTitle: "Pre-Construction Condo",
    description:
      "Under-construction luxury units with builder incentives and estimated completion in 12 months.",
  },
  {
    image: images.shop,
    place: "Phoenix, AZ",
    title: "NNN",
    title2: "LEASE",
    cardTitle: "Triple-Net Retail",
    description:
      "NNN leased retail with national tenant — stable cash flow for passive investors.",
  },
  {
    image: images.communityAerial,
    place: "Atlanta, GA",
    title: "GROWTH",
    title2: "CORR",
    cardTitle: "Commercial Land — I-85 Corridor",
    description:
      "Strategic parcel near a major interchange — long-term play in a booming metro.",
  },
];

export const hvacAnimationItems: ImageAnimationItem[] = hvacProjectItems.map(
  ({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }),
);

export const hvacFeatureItems: HvacProjectItem[] = [
  hvacProjectItems[0],
  hvacProjectItems[2],
  hvacProjectItems[4],
];
