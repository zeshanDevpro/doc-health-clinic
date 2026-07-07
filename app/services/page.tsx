import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { ServicesSection } from "@/view/services/ServicesSection";

export const metadata = createPageMetadata({
  title: "Medical Services | MedCare Health Clinic Islamabad",
  description:
    "Explore 12 medical departments at MedCare G-8 Islamabad  general medicine, cardiology, paediatrics, orthopaedics, emergency care, and more under one roof.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero page="services" />
      <ServicesSection showHeading={false} />
      <PageBottom />
    </>
  );
}
