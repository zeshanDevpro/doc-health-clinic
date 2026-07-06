import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function FlooringHeroSection() {
  return (
    <PageHero
      headingLine1="Commercial Properties,"
      headingLine2="Built for Business Growth."
      description="Shops, offices, mixed-use buildings, and commercial land in prime locations — Demo Real Estate connects investors and businesses with high-yield commercial assets across major U.S. metros."
      backgroundImage={images.heroCommercial}
      subheading="Invest in prime commercial spaces"
      buttons={[
        { label: "View Commercial Listings", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Commercial Properties",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
