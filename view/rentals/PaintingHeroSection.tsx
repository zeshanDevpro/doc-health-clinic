import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function PaintingHeroSection() {
  return (
    <PageHero
      headingLine1="Rentals & Leasing,"
      headingLine2="Find Your Perfect Space."
      description="Apartments, houses, villas, offices, and shops for rent across major cities — verified listings with flexible terms for families, professionals, and businesses."
      backgroundImage={images.heroRentals}
      subheading="Quality rentals, verified listings"
      buttons={[
        { label: "Browse Rentals", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Rentals & Leasing",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
