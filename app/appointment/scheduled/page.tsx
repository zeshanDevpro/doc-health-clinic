import { createPageMetadata } from "@/lib/site-metadata";
import { AppointmentDone } from "@/view/appointment/AppointmentDone";

export const metadata = createPageMetadata({
  title: "Appointment Confirmed | MedCare Health Clinic",
  description:
    "Your appointment request has been received. MedCare Health Clinic will confirm your visit shortly.",
  path: "/appointment/scheduled",
});

export default function AppointmentScheduledPage() {
  return <AppointmentDone />;
}
