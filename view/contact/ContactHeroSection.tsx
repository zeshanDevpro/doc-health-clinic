import { PageHero } from "@/components/global/PageHero";
import { images } from "@/lib/images";

export function ContactHeroSection() {
  return (
    <PageHero
      headingLine1="Contact Us"
      headingLine2="We're Here to Help."
      description="Tell us what you're looking for — buy, rent, invest, or sell. Our property experts aim to respond within one business day with verified options tailored to your needs."
      backgroundImage={images.heroContact}
      subheading="Talk to a property expert today"
      variant="background"
      showGlobeOverlay={false}
      theme={{
        badge: "Get in Touch",
        overlayClass: "bg-gradient-to-r from-brand-navy/90 to-brand-navy/40",
      }}
    />
  );
}
