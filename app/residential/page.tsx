import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { residentialFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { CleaningFeaturesSection } from "@/view/residential/CleaningFeaturesSection";
import { CleaningGallerySection } from "@/view/residential/CleaningGallerySection";
import { CleaningHeroSection } from "@/view/residential/CleaningHeroSection";
import { CleaningIntroSection } from "@/view/residential/CleaningIntroSection";
import { CleaningProcessSection } from "@/view/residential/CleaningProcessSection";

export const metadata: Metadata = createPageMetadata({
  title: "Residential Properties | Demo Real Estate",
  description:
    "Verified houses, condos, townhomes, and land for sale across Frisco, Austin, Scottsdale, Miami, and top U.S. neighborhoods.",
  path: "/residential",
});

export default function ResidentialPage() {
  return (
    <>
      <CleaningHeroSection />
      <CleaningIntroSection />
      <CleaningProcessSection />
      <CleaningFeaturesSection />
      <CleaningGallerySection />
      <FaqSection
        items={residentialFaqs}
        title={
          <>
            Residential{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about buying residential properties, site visits, and documentation."
      />
      <ContactCtaSection />
    </>
  );
}
