import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { rentalsFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { PaintingFeaturesSection } from "@/view/rentals/PaintingFeaturesSection";
import { PaintingFinishesSection } from "@/view/rentals/PaintingFinishesSection";
import { PaintingGallerySection } from "@/view/rentals/PaintingGallerySection";
import { PaintingHeroSection } from "@/view/rentals/PaintingHeroSection";
import { PaintingIntroSection } from "@/view/rentals/PaintingIntroSection";

export const metadata: Metadata = createPageMetadata({
  title: "Rentals & Leasing | Demo Real Estate",
  description:
    "Apartments, houses, townhomes, and commercial spaces for rent across Dallas, Austin, Miami, Nashville, and major U.S. cities.",
  path: "/rentals",
});

export default function RentalsPage() {
  return (
    <>
      <PaintingHeroSection />
      <PaintingIntroSection />
      <PaintingFinishesSection />
      <PaintingFeaturesSection />
      <PaintingGallerySection />
      <FaqSection
        items={rentalsFaqs}
        title={
          <>
            Rentals{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about rental properties, lease terms, and listing your property."
      />
      <ContactCtaSection />
    </>
  );
}
