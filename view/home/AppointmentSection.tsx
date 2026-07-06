"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandButtonClassName, departments, doctors } from "@/constants";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

type AppointmentSectionProps = {
  showHeading?: boolean;
};

export function AppointmentSection({ showHeading = true }: AppointmentSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!isEmailjsConfigured()) {
      setSubmitted(true);
      formRef.current?.reset();
      return;
    }

    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId || "",
        emailjsConfig.templateId || "",
        formRef.current,
        { publicKey: emailjsConfig.publicKey },
      );
      setSubmitted(true);
      formRef.current.reset();
    } catch {
      setError(
        "Something went wrong while booking. Please WhatsApp us directly or try again shortly.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="relative w-full overflow-hidden px-2 py-20 md:px-6 md:py-28 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy-dark" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

      <Container className="relative">
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading className="text-white [&_span]:text-brand-green-light">
              Book Your <span>Appointment</span>
            </SectionHeading>
            <p className="mt-4 text-white/75">
              Schedule a visit in minutes. Our Islamabad team will confirm via WhatsApp
              or SMS — usually within one hour.
            </p>
          </Reveal>
        )}

        <Reveal delay={150} className={`mx-auto max-w-3xl ${showHeading ? "mt-12" : ""}`}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-3xl text-brand-green">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-brand-navy">
                  Appointment Request Received
                </h3>
                <p className="mt-3 text-brand-grey">
                  Thank you! Our scheduling team will contact you within one
                  business hour to confirm your visit.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="from_name" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Full Name *
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className={inputClassName}
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className={inputClassName}
                      disabled={isSending}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="from_email" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Email *
                    </label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClassName}
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      required
                      className={inputClassName}
                      defaultValue=""
                      disabled={isSending}
                    >
                      <option value="" disabled>
                        Select department
                      </option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="doctor" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Preferred Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      className={inputClassName}
                      defaultValue=""
                      disabled={isSending}
                    >
                      <option value="">Any available doctor</option>
                      {doctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} — {doc.specialization}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferred_date" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Preferred Date *
                    </label>
                    <input
                      id="preferred_date"
                      name="preferred_date"
                      type="date"
                      required
                      className={inputClassName}
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label htmlFor="preferred_time" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Preferred Time *
                    </label>
                    <select
                      id="preferred_time"
                      name="preferred_time"
                      required
                      className={inputClassName}
                      defaultValue=""
                      disabled={isSending}
                    >
                      <option value="" disabled>
                        Select time
                      </option>
                      <option value="08:00 AM">08:00 AM</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your symptoms or reason for visit..."
                      className={`${inputClassName} resize-y`}
                      disabled={isSending}
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {error}
                  </p>
                )}

                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className={`${brandButtonClassName} w-full sm:w-auto`}
                    disabled={isSending}
                  >
                    {isSending ? "Booking..." : "Book Appointment"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
