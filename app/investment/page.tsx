import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site-metadata";
import { investmentFaqs } from "@/constants";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";
import { FaqSection } from "@/view/home/FaqSection";
import { HvacFeaturesSection } from "@/view/investment/HvacFeaturesSection";
import { HvacGallerySection } from "@/view/investment/HvacGallerySection";
import { HvacHeroSection } from "@/view/investment/HvacHeroSection";
import { HvacIntroSection } from "@/view/investment/HvacIntroSection";

export const metadata: Metadata = createPageMetadata({
  title: "Property Investment | Demo Real Estate",
  description:
    "Market-backed investment advisory for rental properties, land, and pre-construction opportunities — for local and out-of-state investors.",
  path: "/investment",
});

export default function InvestmentPage() {
  return (
    <>
      <HvacHeroSection />
      <HvacIntroSection />
      <HvacFeaturesSection />
      <HvacGallerySection />
      <FaqSection
        items={investmentFaqs}
        title={
          <>
            Investment{" "}
            <span className="font-semibold text-parkonic-secondary">
              Questions & Answers
            </span>
          </>
        }
        subtitle="Common questions about property investment, returns, and out-of-state buyer support."
      />
      <ContactCtaSection />
    </>
  );
}
