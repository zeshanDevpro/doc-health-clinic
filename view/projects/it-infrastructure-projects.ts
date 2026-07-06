import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type ItInfrastructureProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const itInfrastructureProjectItems: ItInfrastructureProjectItem[] = [
  {
    image: images.communityAerial,
    place: "Frisco, TX",
    title: "SUMMIT",
    title2: "CREEK",
    cardTitle: "Summit Creek Estates",
    description:
      "Master-planned community with lakes, trails, and pre-construction pricing from a national builder.",
  },
  {
    image: images.suburbanStreet,
    place: "Plano, TX",
    title: "LAKE",
    title2: "VIEW",
    cardTitle: "Lakeview Commons",
    description:
      "Tree-lined streets and sidewalk-lined blocks in a family-oriented suburban development.",
  },
  {
    image: images.newDevelopment,
    place: "Austin, TX",
    title: "HORIZON",
    title2: "RIDGE",
    cardTitle: "Horizon Ridge",
    description:
      "New phase release with model homes, resort-style pool, and builder closing-cost incentives.",
  },
  {
    image: images.masterPlanned,
    place: "Scottsdale, AZ",
    title: "FAIRWAY",
    title2: "OAKS",
    cardTitle: "Fairway Oaks",
    description:
      "Golf-adjacent community with custom lots, mountain views, and luxury amenity center.",
  },
  {
    image: images.houseExterior,
    place: "McKinney, TX",
    title: "WILLOW",
    title2: "BROOK",
    cardTitle: "Willowbrook Heights",
    description:
      "Early reservation lots in a top DFW suburb — quick move-in inventory available now.",
  },
  {
    image: images.modernHome,
    place: "Phoenix, AZ",
    title: "CEDAR",
    title2: "POINT",
    cardTitle: "Cedar Point Village",
    description:
      "Affordable new builds near major employers with community playground and dog park.",
  },
  {
    image: images.townhouse,
    place: "Miami, FL",
    title: "BAY",
    title2: "VIEW",
    cardTitle: "The Reserve at Bayview",
    description:
      "Waterfront townhome community with marina slips and flexible builder payment schedules.",
  },
  {
    image: images.luxuryEstate,
    place: "Nashville, TN",
    title: "SILVER",
    title2: "CREEK",
    cardTitle: "Silver Creek Ranch",
    description:
      "Estate-sized lots on rolling acreage with equestrian trails and custom home opportunities.",
  },
];

export const itInfrastructureAnimationItems: ImageAnimationItem[] =
  itInfrastructureProjectItems.map(
    ({ image, place, title, title2, description }) => ({
      image,
      place,
      title,
      title2,
      description,
    }),
  );

export const itInfrastructureFeatureItems: ItInfrastructureProjectItem[] = [
  itInfrastructureProjectItems[0],
  itInfrastructureProjectItems[1],
  itInfrastructureProjectItems[2],
];
