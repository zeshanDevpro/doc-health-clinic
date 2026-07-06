import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { projectsFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { ItInfrastructureFeaturesSection } from "@/view/projects/ItInfrastructureFeaturesSection";
import { ItInfrastructureGallerySection } from "@/view/projects/ItInfrastructureGallerySection";
import { ItInfrastructureHeroSection } from "@/view/projects/ItInfrastructureHeroSection";
import { ItInfrastructureIntroSection } from "@/view/projects/ItInfrastructureIntroSection";

export const metadata: Metadata = createPageMetadata({
  title: "Housing Projects | Demo Real Estate",
  description:
    "Featured new home communities and pre-construction launches from national and regional builders across Texas, Arizona, Florida, and Tennessee.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <ItInfrastructureHeroSection />
      <ItInfrastructureIntroSection />
      <ItInfrastructureFeaturesSection />
      <ItInfrastructureGallerySection />
      <FaqSection
        items={projectsFaqs}
        title={
          <>
            Projects{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about housing projects, installment plans, and pre-launch bookings."
      />
      <ContactCtaSection />
    </>
  );
}
