import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function PoolHeroSection() {
  return (
    <PageHero
      headingLine1="Property Consultancy,"
      headingLine2="Expert Guidance."
      description="From market valuation and documentation review to transfer assistance and investment strategy — Demo Real Estate provides complete advisory for buyers, sellers, and investors."
      backgroundImage={images.heroConsultancy}
      subheading="Professional property advisory"
      buttons={[
        { label: "Book a Consultation", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Property Consultancy",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
