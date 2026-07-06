import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type PaintingProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const paintingProjectItems: PaintingProjectItem[] = [
  {
    image: images.heroRentals,
    place: "Frisco, TX",
    title: "FAMILY",
    title2: "HOME",
    cardTitle: "4 Bed Home for Rent",
    description:
      "Fully furnished family home in a safe suburb — 4 beds, 2 baths, and 2-car garage.",
  },
  {
    image: images.apartment,
    place: "Austin, TX",
    title: "LOFT",
    title2: "RENT",
    cardTitle: "1 Bed Loft for Rent",
    description:
      "Modern loft with open layout, in-unit laundry, and walkable to downtown amenities.",
  },
  {
    image: images.office,
    place: "Dallas, TX",
    title: "OFFICE",
    title2: "LEASE",
    cardTitle: "Furnished Office for Lease",
    description:
      "1,500 sq ft furnished suite with conference room, reception, and included parking.",
  },
  {
    image: images.shop,
    place: "Miami, FL",
    title: "RETAIL",
    title2: "LEASE",
    cardTitle: "Retail Space for Lease",
    description:
      "Ground-floor unit on a busy commercial boulevard with high visibility.",
  },
  {
    image: images.villa,
    place: "Scottsdale, AZ",
    title: "ESTATE",
    title2: "RENT",
    cardTitle: "Luxury Estate for Rent",
    description:
      "Resort-style home with pool, casita, and mountain views — premium executive rental.",
  },
  {
    image: images.heroResidential,
    place: "Nashville, TN",
    title: "DUPLEX",
    title2: "UNIT",
    cardTitle: "Duplex Unit for Rent",
    description:
      "Updated side of a duplex with private entrance — affordable option for young professionals.",
  },
];

export const paintingAnimationItems: ImageAnimationItem[] =
  paintingProjectItems.map(({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }));

export const paintingFeatureItems: PaintingProjectItem[] = [
  paintingProjectItems[0],
  paintingProjectItems[1],
  paintingProjectItems[3],
];
