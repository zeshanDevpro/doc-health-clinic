import { InnerPageHero } from "@/components/global/InnerPageHero";
import { createPageMetadata } from "@/lib/site-metadata";
import { ContactAppointmentSection } from "@/view/home/ContactAppointmentSection";
import { FaqSection } from "@/view/home/FaqSection";

export const metadata = createPageMetadata({
  title: "Contact & Book Appointment | MedCare Health Clinic Islamabad",
  description:
    "Contact MedCare Health Clinic in G-8 Markaz, Islamabad. WhatsApp +92 300 847 3200, email info@medcareclinic.pk, or book your appointment online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <InnerPageHero page="contact" />
      <ContactAppointmentSection showHeading={false} />
      <FaqSection />
    </>
  );
}
