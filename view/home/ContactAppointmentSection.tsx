"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SelectInputDropdown } from "@/components/ui/SelectInputDropdown";
import {
  appointmentTimeSlots,
  brandButtonClassName,
  company,
  departments,
  doctors,
  socialLinks,
} from "@/constants";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";
import { images } from "@/lib/images";

const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
} as const;

const departmentOptions = departments.map((dept) => ({
  value: dept,
  label: dept,
}));

const doctorOptions = [
  { value: "", label: "Any available doctor" },
  ...doctors.map((doc) => ({
    value: doc.name,
    label: `${doc.name} — ${doc.specialization}`,
  })),
];

const timeOptions = appointmentTimeSlots.map((time) => ({
  value: time,
  label: time,
}));

type ContactAppointmentSectionProps = {
  showHeading?: boolean;
};

export function ContactAppointmentSection({
  showHeading = true,
}: ContactAppointmentSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  function resetForm() {
    formRef.current?.reset();
    setDepartment("");
    setDoctor("");
    setPreferredTime("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!department) {
      setError("Please select a department.");
      return;
    }

    if (!preferredTime) {
      setError("Please select a preferred time.");
      return;
    }

    if (!isEmailjsConfigured()) {
      setSubmitted(true);
      resetForm();
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
      resetForm();
    } catch {
      setError(
        "Something went wrong. Please WhatsApp us directly or try again shortly.",
      );
    } finally {
      setIsSending(false);
    }
  }

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
              online — our team responds in English and Urdu.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-10 lg:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          <Reveal>
            <div className="space-y-5">
              <div className="relative mb-6 h-48 overflow-hidden rounded-2xl shadow-md md:h-56">
                <Image
                  src={images.hospitalReception}
                  alt="MedCare Health Clinic reception in Islamabad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <MdLocationOn className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Address</p>
                  <p className="mt-1 text-sm text-brand-grey">{company.address}</p>
                  <a
                    href={company.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-brand-green hover:text-brand-navy"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <FaWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">WhatsApp</p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-brand-grey hover:text-brand-green"
                  >
                    {company.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border-2 border-red-100 bg-red-50 p-5">
                <MdAccessTime className="mt-0.5 h-6 w-6 shrink-0 text-red-500" aria-hidden />
                <div>
                  <p className="font-semibold text-red-700">Emergency</p>
                  <p className="mt-1 text-sm text-red-600">
                    {company.workingHours.emergency}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <MdEmail className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-sm text-brand-grey hover:text-brand-green"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <MdAccessTime className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-navy">Working Hours</p>
                  <ul className="mt-2 space-y-1 text-sm text-brand-grey">
                    <li>{company.workingHours.weekdays}</li>
                    <li>{company.workingHours.saturday}</li>
                    <li>{company.workingHours.sunday}</li>
                    <li className="font-medium text-brand-green">
                      {company.workingHours.emergency}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white transition hover:bg-brand-green"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:opacity-90"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div id="appointment" className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100 md:p-8">
              <h3 className="text-2xl font-semibold text-brand-navy">
                Book Your Appointment
              </h3>
              <p className="mt-2 text-sm text-brand-grey">
                Fill in the form below — we&apos;ll confirm via call or SMS within one hour.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-3xl text-brand-green">
                    ✓
                  </div>
                  <h4 className="text-xl font-semibold text-brand-navy">
                    Request Received
                  </h4>
                  <p className="mt-3 text-sm text-brand-grey">
                    Thank you! Our team will contact you shortly to confirm your visit.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
                  <input type="hidden" name="department" value={department} />
                  <input type="hidden" name="doctor" value={doctor} />
                  <input type="hidden" name="preferred_time" value={preferredTime} />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="from_name" className="mb-1.5 block text-sm font-medium text-brand-navy">
                        Full Name *
                      </label>
                      <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        required
                        placeholder="Your full name"
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
                        placeholder="+92 300 000 0000"
                        className={inputClassName}
                        disabled={isSending}
                      />
                    </div>
                    <div>
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
                      <SelectInputDropdown
                        id="department"
                        aria-label="Select department"
                        options={departmentOptions}
                        selectedValue={department}
                        onValueChange={setDepartment}
                        placeholder="Select department"
                        disabled={isSending}
                      />
                    </div>
                    <div>
                      <label htmlFor="doctor" className="mb-1.5 block text-sm font-medium text-brand-navy">
                        Preferred Doctor
                      </label>
                      <SelectInputDropdown
                        id="doctor"
                        aria-label="Select preferred doctor"
                        options={doctorOptions}
                        selectedValue={doctor}
                        onValueChange={setDoctor}
                        placeholder="Any available doctor"
                        disabled={isSending}
                      />
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
                      <SelectInputDropdown
                        id="preferred_time"
                        aria-label="Select preferred time"
                        options={timeOptions}
                        selectedValue={preferredTime}
                        onValueChange={setPreferredTime}
                        placeholder="Select time"
                        disabled={isSending}
                      />
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

                  <div className="mt-6">
                    <button
                      type="submit"
                      className={`${brandButtonClassName} w-full sm:w-auto`}
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
            <iframe
              src={company.mapEmbedUrl}
              title="MedCare Health Clinic location on Google Maps"
              className="h-[360px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
