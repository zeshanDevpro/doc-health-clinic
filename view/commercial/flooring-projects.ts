import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type FlooringProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const flooringProjectItems: FlooringProjectItem[] = [
  {
    image: images.shop,
    place: "Miami, FL",
    title: "RETAIL",
    title2: "SPACE",
    cardTitle: "850 Sq Ft Storefront",
    description:
      "High-traffic retail space on a main commercial strip with strong foot traffic and visibility.",
  },
  {
    image: images.office,
    place: "Dallas, TX",
    title: "OFFICE",
    title2: "SUITE",
    cardTitle: "2,000 Sq Ft Office — Uptown",
    description:
      "Premium office with reception, conference room, and dedicated parking in Dallas CBD.",
  },
  {
    image: images.heroCommercial,
    place: "Austin, TX",
    title: "MIXED",
    title2: "USE",
    cardTitle: "Ground-Floor Retail Unit",
    description:
      "Street-level commercial space on a busy boulevard — ideal for restaurant, clinic, or boutique.",
  },
  {
    image: images.plot,
    place: "Phoenix, AZ",
    title: "COMM",
    title2: "LAND",
    cardTitle: "0.75 Acre Commercial Lot",
    description:
      "Corner commercial parcel in a growth corridor — ready for development or hold.",
  },
  {
    image: images.newDevelopment,
    place: "Denver, CO",
    title: "RETAIL",
    title2: "PAD",
    cardTitle: "Outparcel — Retail Pad",
    description:
      "Commercial pad in a new shopping center with high visibility and strong tenant demand.",
  },
  {
    image: images.heroInvestment,
    place: "Nashville, TN",
    title: "MAIN",
    title2: "ST",
    cardTitle: "Main Street Commercial",
    description:
      "Front-facing lot on the city's main commercial avenue with maximum drive-by exposure.",
  },
  {
    image: images.skyline,
    place: "Charlotte, NC",
    title: "OFFICE",
    title2: "TOWER",
    cardTitle: "Class A Office Floor",
    description:
      "Full-floor office space in a downtown tower with lobby services and parking.",
  },
  {
    image: images.heroContact,
    place: "Houston, TX",
    title: "WARE",
    title2: "HOUSE",
    cardTitle: "Industrial Warehouse",
    description:
      "20,000 sq ft warehouse with loading docks and office — suited for logistics or light manufacturing.",
  },
  {
    image: images.team1,
    place: "Tampa, FL",
    title: "STRIP",
    title2: "MALL",
    cardTitle: "Strip Center Unit",
    description:
      "End-cap retail unit in a busy suburban strip center with ample parking.",
  },
];

export const flooringAnimationItems: ImageAnimationItem[] =
  flooringProjectItems.map(({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }));

export const flooringFeatureItems: FlooringProjectItem[] = [
  flooringProjectItems[0],
  flooringProjectItems[1],
  flooringProjectItems[3],
];
