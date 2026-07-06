import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { consultancyFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { PoolCareScheduleSection } from "@/view/consultancy/PoolCareScheduleSection";
import { PoolFeaturesSection } from "@/view/consultancy/PoolFeaturesSection";
import { PoolGallerySection } from "@/view/consultancy/PoolGallerySection";
import { PoolHeroSection } from "@/view/consultancy/PoolHeroSection";
import { PoolIntroSection } from "@/view/consultancy/PoolIntroSection";

export const metadata: Metadata = createPageMetadata({
  title: "Property Consultancy | Demo Real Estate",
  description:
    "Expert property advisory — comparative market analysis, contract review, closing coordination, and investment strategy for U.S. buyers and sellers.",
  path: "/consultancy",
});

export default function ConsultancyPage() {
  return (
    <>
      <PoolHeroSection />
      <PoolIntroSection />
      <PoolCareScheduleSection />
      <PoolFeaturesSection />
      <PoolGallerySection />
      <FaqSection
        items={consultancyFaqs}
        title={
          <>
            Consultancy{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about our property advisory, fees, and legal support."
      />
      <ContactCtaSection />
    </>
  );
}
