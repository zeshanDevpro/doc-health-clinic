import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";

export type CleaningProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const cleaningProjectItems: CleaningProjectItem[] = [
  {
    image: images.luxuryEstate,
    place: "Frisco, TX",
    title: "LUXURY",
    title2: "HOME",
    cardTitle: "4 Bed Corner Estate",
    description:
      "Custom-built home with landscaped yard, pool, and 3-car garage in a top-rated school district.",
  },
  {
    image: images.suburbanStreet,
    place: "Plano, TX",
    title: "NEIGH",
    title2: "BOR",
    cardTitle: "Tree-Lined Subdivision",
    description:
      "Established neighborhood with sidewalks, community park, and charming single-family streetscapes.",
  },
  {
    image: images.houseExterior,
    place: "Southlake, TX",
    title: "RANCH",
    title2: "STYLE",
    cardTitle: "Updated Ranch Home",
    description:
      "Single-story brick home with covered porch, fenced yard, and recent kitchen renovation.",
  },
  {
    image: images.townhouse,
    place: "Austin, TX",
    title: "URBAN",
    title2: "ROW",
    cardTitle: "3 Bed Townhome",
    description:
      "Walkable townhome row near downtown with rooftop patio and attached two-car garage.",
  },
  {
    image: images.communityAerial,
    place: "McKinney, TX",
    title: "AERIAL",
    title2: "VIEW",
    cardTitle: "Master-Planned Community",
    description:
      "Bird's-eye view of a growing suburb with lakes, trails, and new home construction throughout.",
  },
  {
    image: images.masterPlanned,
    place: "Phoenix, AZ",
    title: "DESERT",
    title2: "LIVING",
    cardTitle: "New Community Home",
    description:
      "Affordable new build in a fast-growing suburb with community pool and desert landscaping.",
  },
  {
    image: images.modernHome,
    place: "Houston, TX",
    title: "SMART",
    title2: "HOME",
    cardTitle: "Contemporary New Build",
    description:
      "Energy-efficient design with open floor plan, smart thermostat, and builder warranty included.",
  },
  {
    image: images.livingRoom,
    place: "Nashville, TN",
    title: "OPEN",
    title2: "PLAN",
    cardTitle: "Renovated Interior",
    description:
      "Bright living space with vaulted ceilings, quartz counters, and designer staging throughout.",
  },
];

export const cleaningAnimationItems: ImageAnimationItem[] =
  cleaningProjectItems.map(({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }));

export const cleaningFeatureItems: CleaningProjectItem[] = [
  cleaningProjectItems[0],
  cleaningProjectItems[1],
  cleaningProjectItems[2],
];
