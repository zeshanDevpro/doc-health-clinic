import type { ImageAnimationItem } from "@/types";
import { images } from "@/lib/images";
import { poolProjectItems } from "@/view/consultancy/pool-projects";

export type HomeProjectItem = {
  image: string;
  place: string;
  title: string;
  title2: string;
  cardTitle: string;
  description: string;
};

export const homeProjectItems: HomeProjectItem[] = [
  {
    image: images.luxuryEstate,
    place: "Frisco, TX",
    title: "LUXURY",
    title2: "HOME",
    cardTitle: "4 Bed Craftsman Estate",
    description:
      "Spacious corner lot home with modern finishes, landscaped yard, and 3-car garage in a gated community.",
  },
  {
    image: images.suburbanStreet,
    place: "Plano, TX",
    title: "TREE",
    title2: "LINED",
    cardTitle: "Suburban Neighborhood",
    description:
      "Quiet cul-de-sac in a master-planned community with sidewalks, parks, and top-rated schools nearby.",
  },
  {
    image: images.communityAerial,
    place: "McKinney, TX",
    title: "MASTER",
    title2: "PLAN",
    cardTitle: "Planned Community Lots",
    description:
      "Aerial view of a growing subdivision with new streets, amenities, and builder-ready home sites.",
  },
  {
    image: images.masterPlanned,
    place: "Austin, TX",
    title: "NEW",
    title2: "BUILD",
    cardTitle: "Single-Family New Construction",
    description:
      "Fresh inventory in a walkable neighborhood with community pool, trails, and HOA-managed landscaping.",
  },
  {
    image: images.houseExterior,
    place: "Southlake, TX",
    title: "CURB",
    title2: "APPEAL",
    cardTitle: "Updated Ranch Home",
    description:
      "Renovated single-story with brick facade, covered porch, and mature trees on a generous lot.",
  },
  {
    image: images.townhouse,
    place: "Scottsdale, AZ",
    title: "TOWN",
    title2: "HOME",
    cardTitle: "3 Bed Townhome Row",
    description:
      "Modern townhome with attached garage, private patio, and low-maintenance desert landscaping.",
  },
  {
    image: images.apartment,
    place: "Dallas, TX",
    title: "HIGH",
    title2: "RISE",
    cardTitle: "Uptown Condo Tower",
    description:
      "Downtown high-rise units with skyline views, concierge, and walkable dining and nightlife.",
  },
  {
    image: images.modernHome,
    place: "Phoenix, AZ",
    title: "CONTEM",
    title2: "PORY",
    cardTitle: "Contemporary New Build",
    description:
      "Clean-line architecture with open floor plan, smart home package, and energy-efficient design.",
  },
  {
    image: images.newDevelopment,
    place: "Houston, TX",
    title: "PHASE",
    title2: "TWO",
    cardTitle: "New Phase Release",
    description:
      "Just-opened section of a master-planned community with model homes and builder incentives.",
  },
  {
    image: images.livingRoom,
    place: "Nashville, TN",
    title: "MOVE",
    title2: "IN",
    cardTitle: "Staged Family Home",
    description:
      "Bright open-concept interior with upgraded kitchen, hardwood floors, and fenced backyard.",
  },
  {
    image: images.plot,
    place: "Denver, CO",
    title: "BUILD",
    title2: "LOT",
    cardTitle: "Half-Acre Building Lot",
    description:
      "Premium lot with mountain views — ready for your custom dream home in a private enclave.",
  },
  {
    image: images.shop,
    place: "Miami, FL",
    title: "RETAIL",
    title2: "UNIT",
    cardTitle: "850 Sq Ft Storefront",
    description:
      "High-footfall retail space on a busy commercial strip with strong rental yield potential.",
  },
  {
    image: images.office,
    place: "Charlotte, NC",
    title: "OFFICE",
    title2: "PARK",
    cardTitle: "Suburban Office Park",
    description:
      "Professional office suite in a landscaped business park with ample parking and highway access.",
  },
  {
    image: images.heroRentals,
    place: "Tampa, FL",
    title: "WATER",
    title2: "VIEW",
    cardTitle: "Waterfront Rental Condo",
    description:
      "Furnished bay-view unit ideal for snowbirds and year-round Florida coastal living.",
  },
  {
    image: images.homeInterior,
    place: "Orlando, FL",
    title: "POOL",
    title2: "HOME",
    cardTitle: "4 Bed Pool Home",
    description:
      "Resort-style backyard with screened pool — move-in ready in a family-friendly suburb.",
  },
  {
    image: images.villa,
    place: "Los Angeles, CA",
    title: "HILLS",
    title2: "ESTATE",
    cardTitle: "Hillside Contemporary",
    description:
      "Architect-designed home with walls of glass, pool terrace, and panoramic city views.",
  },
  {
    image: images.skyline,
    place: "Atlanta, GA",
    title: "MIXED",
    title2: "USE",
    cardTitle: "Mixed-Use Corner",
    description:
      "Retail ground floor with residential above on a high-growth corridor near downtown.",
  },
  {
    image: images.heroInvestment,
    place: "San Antonio, TX",
    title: "DUPLEX",
    title2: "DEAL",
    cardTitle: "Cash-Flow Duplex",
    description:
      "Turnkey duplex with existing tenants — strong monthly income in an appreciating market.",
  },
  poolProjectItems[7],
];

export const homeAnimationItems: ImageAnimationItem[] = homeProjectItems.map(
  ({ image, place, title, title2, description }) => ({
    image,
    place,
    title,
    title2,
    description,
  }),
);
