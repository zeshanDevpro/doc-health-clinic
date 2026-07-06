import { PageBottom } from "@/components/global/PageBottom";
import { HeroSection } from "@/view/home/HeroSection";
import { AboutSection } from "@/view/home/AboutSection";
import { HomeGallerySection } from "@/view/home/HomeGallerySection";
import { ServicesSection } from "@/view/home/ServicesSection";
import { WhyChooseUsSection } from "@/view/home/WhyChooseUsSection";
import { DoctorsSection } from "@/view/home/DoctorsSection";
import { TestimonialsSection } from "@/view/home/TestimonialsSection";
import { HealthTipsSection } from "@/view/home/HealthTipsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection variant="preview" />
      <HomeGallerySection />
      <WhyChooseUsSection limit={4} />
      <ServicesSection limit={6} showViewAll />
      <DoctorsSection limit={3} showViewAll />
      <TestimonialsSection />
      <HealthTipsSection limit={3} showViewAll />
      <PageBottom />
    </>
  );
}
