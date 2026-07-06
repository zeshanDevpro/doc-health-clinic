import type {
  FaqItem,
  TeamGroupPhoto,
  Testimonial,
} from "@/types";
import { images } from "@/lib/images";
import { builderLogos, trustLogos } from "@/lib/partner-logos";

export const BRAND_COLORS = {
  navy: "#1B365D",
  green: "#C5A028",
  grey: "#4A5568",
  offWhite: "#FAF8F5",
  blue: "#2C5282",
} as const;

export const HERO_TEXT_GRADIENT = `linear-gradient(122deg, ${BRAND_COLORS.blue} 0%, ${BRAND_COLORS.navy} 48%, ${BRAND_COLORS.green} 100%)`;

/** Readable on dark hero overlays (service pages, contact, etc.) */
export const HERO_TEXT_GRADIENT_ON_DARK = `linear-gradient(122deg, #FFFFFF 0%, #F0E6CC 45%, ${BRAND_COLORS.green} 100%)`;

export const brandButtonClassName =
  "group inline-flex items-center justify-center gap-3 rounded-full border-2 border-brand-green bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-dark hover:border-brand-green-dark bg-brand-navy";

export const brandButtonClassNameSm =
  "group inline-flex items-center justify-center rounded-full border-2 border-brand-green bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-dark hover:border-brand-green-dark";

export const company = {
  name: "Demo Real Estate",
  shortName: "Demo Real Estate",
  tagline:
    "Your trusted partner for buying, selling, and investing in homes, condos, land, and commercial properties across the United States.",
  email: "hello@demorealestate.com",
  phone: "+1 (555) 234-5678",
  whatsapp: "+1 (555) 234-5678",
  whatsappUrl: "https://wa.me/15552345678",
  address: "8500 Preston Road, Suite 200, Plano, TX 75024, United States",
  copyright: "Demo Real Estate",
  mapEmbedUrl:
    "https://www.google.com/maps?q=8500+Preston+Road,+Plano,+TX+75024&hl=en&z=15&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Plano,+TX+75024,+United+States",
} as const;

export const navLinks = [
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Projects", href: "/projects" },
  { label: "Investment", href: "/investment" },
  { label: "Rentals", href: "/rentals" },
  { label: "Consultancy", href: "/consultancy" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Projects", href: "/projects" },
  { label: "Investment", href: "/investment" },
  { label: "Rentals", href: "/rentals" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
];

export const globalStats = {
  intro:
    "Demo Real Estate connects buyers, sellers, and investors with verified listings and new developments — backed by local market insights, transparent dealings, and expert guidance at every step.",
  left: [
    {
      value: 12,
      suffix: "+",
      title: "Years of Experience",
      description:
        "Trusted real estate advisory serving homebuyers and investors in major U.S. markets.",
    },
    {
      value: 2500,
      suffix: "+",
      title: "Properties Listed",
      description:
        "Single-family homes, condos, townhomes, land, and commercial spaces for every budget.",
    },
  ],
  right: [
    {
      value: 50,
      suffix: "+",
      title: "New Developments",
      description:
        "Featured communities from top builders including master-planned neighborhoods and urban infill projects.",
      icon: "/images/svg/global-stats-icon-3.svg",
    },
    {
      value: 100,
      suffix: "%",
      title: "Verified Listings",
      description:
        "Every property is checked for title, ownership, and market pricing before it goes live.",
      icon: "/images/svg/finance-mode.svg",
    },
    {
      title: "Nationwide Coverage",
      description:
        "Serving Dallas–Fort Worth, Austin, Phoenix, Miami, Nashville, and growing markets coast to coast.",
      icon: "/images/svg/global-stats-icon-1.svg",
      isText: true,
    },
  ],
};

export const certificates = [...trustLogos];

export const clientLogos = [...builderLogos];

export const projectSlides = [
  { src: images.luxuryEstate, alt: "Luxury home for sale" },
  { src: images.suburbanStreet, alt: "Suburban neighborhood street" },
  { src: images.communityAerial, alt: "Master-planned community" },
  { src: images.houseExterior, alt: "Single-family home exterior" },
];

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What services does Demo Real Estate provide?",
    answer:
      "We offer residential and commercial sales, new construction advisory, rental listings, investment guidance, and full transaction support — from property shortlisting through closing.",
  },
  {
    id: "areas",
    question: "Which cities and markets do you cover?",
    answer:
      "We serve Dallas–Fort Worth, Austin, Houston, Phoenix, Miami, Nashville, Denver, and surrounding suburbs — including master-planned communities, urban condos, and suburban neighborhoods.",
  },
  {
    id: "quote",
    question: "How do I schedule a property showing?",
    answer:
      "Contact us through the website or call our team. Share your budget and preferred area — we will shortlist verified options and arrange showings at your convenience.",
  },
  {
    id: "verification",
    question: "Are your property listings verified?",
    answer:
      "Yes. Every listing is checked for title, ownership, and market pricing before it is published — giving you confidence before any earnest money deposit.",
  },
];

export const residentialFaqs: FaqItem[] = [
  {
    id: "res-types",
    question: "What residential properties do you offer?",
    answer:
      "We list single-family homes, townhomes, condos, vacant land, and luxury estates across top neighborhoods — available for sale and lease.",
  },
  {
    id: "res-budget",
    question: "Can you help me find a home within my budget?",
    answer:
      "Absolutely. Share your budget, preferred city or suburb, and must-haves — our agents will shortlist the best verified options for you.",
  },
  {
    id: "res-docs",
    question: "What should I review before making an offer?",
    answer:
      "We guide you through title review, HOA documents, inspection reports, and closing costs — ensuring a secure and transparent purchase.",
  },
  {
    id: "res-visit",
    question: "Do you arrange property showings?",
    answer:
      "Yes. We schedule in-person tours, provide virtual walkthroughs for out-of-state buyers, and accompany you through every step of the buying process.",
  },
];

export const commercialFaqs: FaqItem[] = [
  {
    id: "com-types",
    question: "What commercial properties are available?",
    answer:
      "We offer retail storefronts, office suites, mixed-use buildings, industrial warehouses, and commercial land in prime business districts and suburban corridors.",
  },
  {
    id: "com-roi",
    question: "Can you advise on commercial investment returns?",
    answer:
      "Yes. Our team provides cap rate estimates, tenant demand analysis, and market comparisons to help you choose high-potential commercial assets.",
  },
  {
    id: "com-lease",
    question: "Do you handle commercial leasing?",
    answer:
      "We assist with both sales and lease transactions — matching tenants with suitable spaces and owners with qualified buyers.",
  },
  {
    id: "com-location",
    question: "Which commercial areas do you specialize in?",
    answer:
      "We cover downtown districts, suburban retail centers, and high-traffic corridors across Texas, Arizona, Florida, and other major U.S. metros.",
  },
];

export const projectsFaqs: FaqItem[] = [
  {
    id: "proj-list",
    question: "Which new developments do you feature?",
    answer:
      "We showcase communities from national and regional builders — master-planned neighborhoods, urban condo projects, and suburban single-family developments.",
  },
  {
    id: "proj-prelaunch",
    question: "Do you offer pre-construction opportunities?",
    answer:
      "Yes. We connect buyers with early pricing, builder incentives, and reservation options on newly announced and upcoming communities.",
  },
  {
    id: "proj-installment",
    question: "Are builder financing options available?",
    answer:
      "Most featured developments offer flexible financing — our team explains down payment, monthly payments, and estimated completion timelines clearly.",
  },
  {
    id: "proj-updates",
    question: "How do I track construction progress?",
    answer:
      "We provide regular build updates, phase release announcements, and move-in timelines for all featured new home communities.",
  },
];

export const investmentFaqs: FaqItem[] = [
  {
    id: "inv-types",
    question: "What investment options do you recommend?",
    answer:
      "We advise on rental properties, fix-and-flip opportunities, land banking, and pre-construction investments based on your budget and return goals.",
  },
  {
    id: "inv-returns",
    question: "What returns can I expect from real estate?",
    answer:
      "Returns vary by market, property type, and hold period. We provide market-backed valuations and historical trend data to guide your decision.",
  },
  {
    id: "inv-overseas",
    question: "Do you serve out-of-state and remote buyers?",
    answer:
      "Yes. We offer virtual tours, remote closing support, and dedicated advisory for clients buying in a market they don't live in.",
  },
  {
    id: "inv-risk",
    question: "How do you minimize investment risk?",
    answer:
      "We verify builder credentials, zoning approvals, and local demand before recommending any investment opportunity.",
  },
];

export const rentalsFaqs: FaqItem[] = [
  {
    id: "rent-types",
    question: "What rental properties do you list?",
    answer:
      "We list apartments, houses, townhomes, office spaces, and retail units for rent across major U.S. cities — for families, professionals, and businesses.",
  },
  {
    id: "rent-process",
    question: "How does the rental process work?",
    answer:
      "Browse listings, schedule showings, and finalize lease agreements with our support — we handle applications and tenant–landlord coordination.",
  },
  {
    id: "rent-deposit",
    question: "What are typical rental terms?",
    answer:
      "Standard terms include first month's rent, security deposit, and lease duration. We explain all terms clearly before you sign.",
  },
  {
    id: "rent-list",
    question: "Can I list my property for rent?",
    answer:
      "Yes. Contact us with your property details and we will market it to qualified tenants through our platform and network.",
  },
];

export const consultancyFaqs: FaqItem[] = [
  {
    id: "con-services",
    question: "What does property consultancy include?",
    answer:
      "Our consultancy covers market analysis, property valuation, contract review, closing coordination, and investment strategy planning.",
  },
  {
    id: "con-fees",
    question: "How are consultancy fees structured?",
    answer:
      "Fees depend on service scope — sales commission, advisory packages, or flat consultation rates. We provide transparent pricing upfront.",
  },
  {
    id: "con-legal",
    question: "Do you assist with legal and closing procedures?",
    answer:
      "Yes. We guide you through title insurance, escrow, HOA approvals, and closing documentation for a smooth, secure transaction.",
  },
  {
    id: "con-sell",
    question: "Can you help me sell my property?",
    answer:
      "Absolutely. We market your property, connect you with verified buyers, and manage negotiations through to closing.",
  },
];

/** @deprecated Use residentialFaqs */
export const cleaningFaqs = residentialFaqs;
/** @deprecated Use commercialFaqs */
export const flooringFaqs = commercialFaqs;
/** @deprecated Use projectsFaqs */
export const itInfrastructureFaqs = projectsFaqs;
/** @deprecated Use investmentFaqs */
export const hvacFaqs = investmentFaqs;
/** @deprecated Use rentalsFaqs */
export const paintingFaqs = rentalsFaqs;
/** @deprecated Use consultancyFaqs */
export const poolFaqs = consultancyFaqs;

export const teamGroupPhotos: TeamGroupPhoto[] = [
  {
    id: "team-1",
    image: images.team1,
    alt: "Demo Real Estate sales team",
    caption: "Sales & Advisory",
    description:
      "Licensed agents helping clients find the perfect home or investment across U.S. markets.",
  },
  {
    id: "team-2",
    image: images.team2,
    alt: "Demo Real Estate client relations team",
    caption: "Client Relations",
    description:
      "Dedicated professionals ensuring smooth transactions and clear communication from offer to close.",
  },
  {
    id: "team-3",
    image: images.team3,
    alt: "Demo Real Estate field team",
    caption: "Showings & Inspections",
    description:
      "Local specialists conducting property tours and market verification in neighborhoods nationwide.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Demo Real Estate provided clear advice and a fast response. We secured a fair price on our lot with absolute confidence. Their professionalism is unmatched.",
    name: "Michael Carter",
    role: "Investor",
    company: "Dallas, TX",
  },
  {
    id: "2",
    quote:
      "The team explained all the closing costs and taxes in simple terms. There were zero surprises, and the entire process was transparent and smooth.",
    name: "Jennifer Walsh",
    role: "Home Buyer",
    company: "Austin, TX",
  },
  {
    id: "3",
    quote:
      "Their market data combined with virtual tours helped me shortlist properties in days, not weeks. A truly five-star service for out-of-state buyers.",
    name: "David Chen",
    role: "Remote Buyer",
    company: "Seattle, WA",
  },
  {
    id: "4",
    quote:
      "We found our dream home in Frisco through Demo Real Estate. From shortlisting to key handover, every step was handled with care and expertise.",
    name: "Sarah Mitchell",
    role: "Home Buyer",
    company: "Frisco, TX",
  },
  {
    id: "5",
    quote:
      "As a commercial investor, I appreciated their cap rate analysis and location insights. They helped me acquire a high-yield retail unit in a prime corridor.",
    name: "James Rodriguez",
    role: "Commercial Investor",
    company: "Miami, FL",
  },
  {
    id: "6",
    quote:
      "Listing our home for rent was effortless. They found qualified tenants within two weeks and handled all the lease paperwork professionally.",
    name: "Emily Brooks",
    role: "Property Owner",
    company: "Nashville, TN",
  },
];
