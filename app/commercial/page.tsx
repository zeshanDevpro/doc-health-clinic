import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { commercialFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { FlooringFeaturesSection } from "@/view/commercial/FlooringFeaturesSection";
import { FlooringGallerySection } from "@/view/commercial/FlooringGallerySection";
import { FlooringHeroSection } from "@/view/commercial/FlooringHeroSection";
import { FlooringIntroSection } from "@/view/commercial/FlooringIntroSection";

export const metadata: Metadata = createPageMetadata({
  title: "Commercial Properties | Demo Real Estate",
  description:
    "Retail storefronts, office suites, and commercial land for sale and lease in prime business districts across Texas, Florida, Arizona, and major U.S. metros.",
  path: "/commercial",
});

export default function CommercialPage() {
  return (
    <>
      <FlooringHeroSection />
      <FlooringIntroSection />
      <FlooringFeaturesSection />
      <FlooringGallerySection />
      <FaqSection
        items={commercialFaqs}
        title={
          <>
            Commercial{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about commercial property investment, leasing, and ROI."
      />
      <ContactCtaSection />
    </>
  );
}
