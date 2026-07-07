"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { SelectInputDropdown } from "@/components/ui/SelectInputDropdown";
import {
  appointmentTimeSlots,
  brandButtonClassName,
  departments,
  doctors,
} from "@/constants";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

const inputClassName =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

const departmentOptions = departments.map((dept) => ({
  value: dept,
  label: dept,
}));

const doctorOptions = [
  { value: "", label: "Any available doctor" },
  ...doctors.map((doc) => ({
    value: doc.name,
    label: `${doc.name}  ${doc.specialization}`,
  })),
];

const timeOptions = appointmentTimeSlots.map((time) => ({
  value: time,
  label: time,
}));

type ContactAppointmentFormProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function ContactAppointmentForm({
  id = "appointment",
  title = "Contact Us",
  description = "Send us a message or request a visit  we'll confirm via WhatsApp or SMS within one hour.",
  className = "",
}: ContactAppointmentFormProps) {
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
    <div
      id={id}
      className={`rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-100 md:p-8 ${className}`}
    >
      <h3 className="text-2xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm text-brand-grey">{description}</p>

      {submitted ? (
        <div className="py-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-3xl text-brand-green">
            ✓
          </div>
          <h4 className="text-xl font-semibold text-brand-navy">Request Received</h4>
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
              <label
                htmlFor={`${id}-from_name`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Full Name *
              </label>
              <input
                id={`${id}-from_name`}
                name="from_name"
                type="text"
                required
                placeholder="Your full name"
                className={inputClassName}
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-phone`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Phone *
              </label>
              <input
                id={`${id}-phone`}
                name="phone"
                type="tel"
                required
                placeholder="+92 300 000 0000"
                className={inputClassName}
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-from_email`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Email *
              </label>
              <input
                id={`${id}-from_email`}
                name="from_email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputClassName}
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-department`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Department *
              </label>
              <SelectInputDropdown
                id={`${id}-department`}
                aria-label="Select department"
                options={departmentOptions}
                selectedValue={department}
                onValueChange={setDepartment}
                placeholder="Select department"
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-doctor`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Preferred Doctor
              </label>
              <SelectInputDropdown
                id={`${id}-doctor`}
                aria-label="Select preferred doctor"
                options={doctorOptions}
                selectedValue={doctor}
                onValueChange={setDoctor}
                placeholder="Any available doctor"
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-preferred_date`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Preferred Date *
              </label>
              <input
                id={`${id}-preferred_date`}
                name="preferred_date"
                type="date"
                required
                className={inputClassName}
                disabled={isSending}
              />
            </div>
            <div>
              <label
                htmlFor={`${id}-preferred_time`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Preferred Time *
              </label>
              <SelectInputDropdown
                id={`${id}-preferred_time`}
                aria-label="Select preferred time"
                options={timeOptions}
                selectedValue={preferredTime}
                onValueChange={setPreferredTime}
                placeholder="Select time"
                disabled={isSending}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor={`${id}-message`}
                className="mb-1.5 block text-sm font-medium text-brand-navy"
              >
                Message
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={4}
                placeholder="Describe your symptoms or reason for visit..."
                className={`${inputClassName} resize-y`}
                disabled={isSending}
              />
            </div>
          </div>

          {error && (
            <p
              className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className={`${brandButtonClassName} w-full sm:w-auto`}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
