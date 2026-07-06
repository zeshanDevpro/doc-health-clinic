import { HeroSection } from "@/view/home/HeroSection";
import { GlobalStatsSection } from "@/view/home/GlobalStatsSection";
import { TrustedSection } from "@/view/home/TrustedSection";
import { HomeGallerySection } from "@/view/home/HomeGallerySection";
import { TestimonialsSection } from "@/view/home/TestimonialsSection";
import { TeamSection } from "@/view/home/TeamSection";
import { FaqSection } from "@/view/home/FaqSection";
import { ContactCtaSection } from "@/view/home/ContactCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlobalStatsSection />
      <TrustedSection />
      <HomeGallerySection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
