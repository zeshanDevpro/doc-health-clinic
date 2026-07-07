import { InnerPageHero } from "@/components/global/InnerPageHero";
import { createPageMetadata } from "@/lib/site-metadata";
import { AppointmentBooking } from "@/view/appointment/AppointmentBooking";

export const metadata = createPageMetadata({
  title: "Book Appointment | MedCare Health Clinic Islamabad",
  description:
    "Schedule your visit at MedCare Health Clinic in G-8 Markaz, Islamabad. Choose a date, pick a time slot, and confirm your appointment online.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <>
      <InnerPageHero page="appointment" />
      <AppointmentBooking />
    </>
  );
}
