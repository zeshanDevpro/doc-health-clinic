"use client";

import { useEffect, useState } from "react";
import { ClinicMap } from "@/components/clinic/ClinicMap";
import { ContactAppointmentForm } from "@/components/clinic/ContactAppointmentForm";
import { ContactInfoPanel } from "@/components/clinic/ContactInfoPanel";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { departments } from "@/constants";
import { AppointmentSummary } from "./AppointmentSummary";
import { ScheduleAppointment } from "./ScheduleAppointment";
import type { AppointmentBookingState } from "./types";

const initialBooking: AppointmentBookingState = {
  date: null,
  slot: null,
  department: departments[0],
};

export function AppointmentBooking() {
  const [booking, setBooking] = useState<AppointmentBookingState>(initialBooking);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-brand-surface px-2 py-16 md:px-6 md:py-24 lg:px-10">
      <Container>
        {/* Section 1: Book Appointment */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionHeading as="h1">
            Book Your <span>Appointment</span>
          </SectionHeading>
          <p className="mt-4 text-brand-grey">
            Pick a date, choose a time slot, and enter your details to schedule
            a visit at our G-8, Islamabad clinic.
          </p>
        </Reveal>

        <div className="mt-10">
          <div className="rounded-[9px] bg-white shadow-lg ring-1 ring-gray-100">
            <div className="flex flex-col xl:flex-row">
              <div className="w-full xl:w-[58%]">
                <ScheduleAppointment
                  booking={booking}
                  onDateSelect={(date) =>
                    setBooking((prev) => ({ ...prev, date, slot: null }))
                  }
                  onSlotSelect={(slot) =>
                    setBooking((prev) => ({ ...prev, slot }))
                  }
                  onDepartmentChange={(department) =>
                    setBooking((prev) => ({ ...prev, department }))
                  }
                />
              </div>
              <div className="w-full border-t border-gray-100 bg-brand-surface xl:w-[42%] xl:border-t-0 xl:border-l">
                <AppointmentSummary booking={booking} />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Us */}
        <Reveal className="mx-auto mt-20 max-w-2xl text-center md:mt-24">
          <SectionHeading>
            Contact <span>Us</span>
          </SectionHeading>
          <p className="mt-4 text-brand-grey">
            Have a question or general enquiry? Reach out directly  no
            appointment needed. Our team responds in English and Urdu.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <ContactInfoPanel />
          </Reveal>

          <Reveal delay={150}>
            <ContactAppointmentForm
              id="contact-form"
              title="Send Us a Message"
              description="Fill in the form below and we'll get back to you via WhatsApp or email as soon as possible."
            />
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-10">
          <ClinicMap />
        </Reveal>
      </Container>
    </section>
  );
}
