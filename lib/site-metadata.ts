import type { Metadata } from "next";
import { company, seoKeywords } from "@/constants";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.medcareclinic.pk";

export const ogImagePath = "/images/medcare-logo-full.svg";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

const defaultTitle =
  "MedCare Health Clinic Islamabad | Quality Healthcare in Pakistan";
const defaultDescription = company.description;

const ogImageUrl = `${siteUrl}${ogImagePath}`;

const openGraphImages = [
  {
    url: ogImageUrl,
    secureUrl: ogImageUrl,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    type: "image/svg+xml",
    alt: company.name,
  },
];

export const defaultSiteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  keywords: [...seoKeywords],
  applicationName: company.shortName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: company.name,
    title: defaultTitle,
    description: defaultDescription,
    images: openGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImageUrl,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: company.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const pageUrl = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: company.name,
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: company.name,
        },
      ],
    },
  };
}

export const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: company.name,
  description: company.description,
  url: siteUrl,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 15, G-8 Markaz",
    addressLocality: "Islamabad",
    addressRegion: "ICT",
    postalCode: "44000",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  medicalSpecialty: [
    "Cardiology",
    "GeneralPractice",
    "Pediatrics",
    "Orthopedics",
    "Dentistry",
    "Neurology",
    "Dermatology",
  ],
  image: ogImageUrl,
  priceRange: "PKR $$",
};
