import { InnerPageHero } from "@/components/global/InnerPageHero";
import { createPageMetadata } from "@/lib/site-metadata";
import { ContactAppointmentSection } from "@/view/contact/ContactAppointmentSection";
import { FaqSection } from "@/view/contact/FaqSection";

export const metadata = createPageMetadata({
  title: "Contact & Book Appointment | MedCare Health Clinic Islamabad",
  description:
    "Contact MedCare Health Clinic in G-8 Markaz, Islamabad. WhatsApp +92 300 123 4567, email info@medcareclinic.pk, or book your appointment online.",
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
