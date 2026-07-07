import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { AboutSection } from "@/view/about/AboutSection";

export const metadata = createPageMetadata({
  title: "About Us | MedCare Health Clinic Islamabad",
  description:
    "Learn about MedCare Health Clinic  Islamabad's trusted medical centre with 18+ years of experience, patient-first care, and modern facilities in G-8 Markaz.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <InnerPageHero page="about" />
      <AboutSection showHeading={false} />
      <PageBottom />
    </>
  );
}
