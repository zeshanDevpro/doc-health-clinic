import { PageBottom } from "@/components/global/PageBottom";
import { HeroSection } from "@/view/home/HeroSection";
import { AboutSection } from "@/view/about/AboutSection";
import { HomeGallerySection } from "@/view/home/HomeGallerySection";
import { ServicesSection } from "@/view/services/ServicesSection";
import { WhyChooseUsSection } from "@/view/why-choose-us/WhyChooseUsSection";
import { DoctorsSection } from "@/view/doctors/DoctorsSection";
import { TestimonialsSection } from "@/view/home/TestimonialsSection";
import { HealthTipsSection } from "@/view/health-tips/HealthTipsSection";

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
