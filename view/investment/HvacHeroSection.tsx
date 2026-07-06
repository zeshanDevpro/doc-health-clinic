import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function HvacHeroSection() {
  return (
    <PageHero
      headingLine1="Property Investment,"
      headingLine2="Smart Returns."
      description="Market-backed investment advisory for rental properties, land, and pre-construction opportunities — tailored for local and out-of-state investors seeking secure, high-potential returns."
      backgroundImage={images.heroInvestment}
      subheading="Invest with confidence"
      buttons={[
        { label: "Get Investment Advice", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Property Investment",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
