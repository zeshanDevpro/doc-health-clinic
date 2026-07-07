"use client";

import Link from "next/link";
import { ClinicMap } from "@/components/clinic/ClinicMap";
import { ContactAppointmentForm } from "@/components/clinic/ContactAppointmentForm";
import { ContactInfoPanel } from "@/components/clinic/ContactInfoPanel";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appointmentPageHref } from "@/constants";

type ContactAppointmentSectionProps = {
  showHeading?: boolean;
};

export function ContactAppointmentSection({
  showHeading = true,
}: ContactAppointmentSectionProps) {
  return (
    <section className="w-full bg-brand-surface px-2 py-20 md:px-6 md:py-28 lg:px-10">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Contact & <span>Book Appointment</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              Reach our G-8 Markaz clinic by WhatsApp, email, or book your visit
              online  our team responds in English and Urdu.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-10 lg:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          <Reveal>
            <ContactInfoPanel />
          </Reveal>

          <Reveal delay={150}>
            <ContactAppointmentForm
              title="Book Your Appointment"
              description="Fill in the form below  we'll confirm via WhatsApp or SMS within one hour."
            />
            <p className="mt-3 text-sm">
              <Link
                href={appointmentPageHref}
                className="font-semibold text-brand-green hover:text-brand-navy"
              >
                Prefer calendar booking? Pick a date & time →
              </Link>
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10">
          <ClinicMap />
        </Reveal>
      </Container>
    </section>
  );
}
