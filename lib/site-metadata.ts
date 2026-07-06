import type { Metadata } from "next";
import { company } from "@/constants";

/** Production site URL — must match the live domain (including www). */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.demorealestate.com";

export const ogImagePath = "/images/demo-realestate-logo-full.svg";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

const defaultTitle = "Demo Real Estate | Property Consultants";
const defaultDescription = company.tagline;

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
  applicationName: company.shortName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.shortName,
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
      siteName: company.shortName,
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
