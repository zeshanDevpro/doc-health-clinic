import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function ItInfrastructureHeroSection() {
  return (
    <PageHero
      headingLine1="Housing Projects,"
      headingLine2="Curated for Investors."
      description="Explore featured new home communities from national and regional builders — with pre-construction pricing, builder incentives, and construction updates."
      backgroundImage={images.heroProjects}
      subheading="Discover top housing societies"
      buttons={[
        { label: "Explore Projects", action: "link", href: "/contact" },
      ]}
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Housing Projects",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
