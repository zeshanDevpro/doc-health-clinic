import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function CleaningHeroSection() {
  return (
    <PageHero
      headingLine1="Residential Properties,"
      headingLine2="Built for Modern Living."
      description="From luxury estates and condos to vacant land and townhomes — Demo Real Estate lists verified homes across top neighborhoods in Texas, Arizona, Florida, and beyond."
      backgroundImage={images.heroResidential}
      subheading="Find your dream home today"
      buttons={[
        { label: "Schedule a Showing", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Residential Properties",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
