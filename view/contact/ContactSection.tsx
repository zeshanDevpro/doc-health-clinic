"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandButtonClassName, company, navLinks } from "@/constants";
import { emailjsConfig, isEmailjsConfigured } from "@/lib/emailjs";

const inputClassName =
  "w-full rounded-lg border border-parkonic-grey px-3 py-2.5 text-sm outline-none focus:border-parkonic-secondary";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!isEmailjsConfigured()) {
      setError(
        "Email is not configured yet. Add your Template ID and Public Key in lib/emailjs.ts or .env.local.",
      );
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
        "Something went wrong while sending your message. Please try again or contact us directly by phone or email.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="w-full px-2 pt-[50px] pb-[30px] md:px-6 md:pt-[80px] md:pb-[20px] lg:px-10">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <Reveal className="w-full lg:w-5/12">
            <div className="rounded-[30px] bg-brand-surface p-8">
              <h3 className="text-2xl font-semibold text-brand-navy">
                Contact Information
              </h3>
              <p className="mt-3 leading-relaxed text-brand-grey">
                {company.tagline}
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <p className="text-sm font-medium text-brand-navy">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-brand-grey no-underline transition hover:text-brand-green"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-medium text-brand-navy">Phone</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="text-brand-grey no-underline transition hover:text-brand-green"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-medium text-brand-navy">WhatsApp</p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-grey no-underline transition hover:text-brand-green"
                  >
                    <FaWhatsapp className="h-4 w-4" aria-hidden />
                    {company.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-medium text-brand-navy">Address</p>
                  <p className="text-brand-grey">{company.address}</p>
                </li>
              </ul>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-brand-navy">
                  Our Services
                </p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-brand-grey no-underline transition hover:text-brand-green"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="w-full lg:w-7/12">
            <div className="rounded-[30px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
              {submitted ? (
                <div className="py-12 text-center">
                  <h3 className="text-2xl font-semibold text-brand-navy">
                    Thank You!
                  </h3>
                  <p className="mt-3 leading-relaxed text-brand-grey">
                    Your message has been received. Our team will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h3 className="mb-6 text-2xl font-semibold text-brand-navy">
                    Send Us a Message
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="from_name"
                        className="mb-1 block text-sm font-medium text-parkonic-primary"
                      >
                        Full Name *
                      </label>
                      <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className={inputClassName}
                        disabled={isSending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="from_email"
                        className="mb-1 block text-sm font-medium text-parkonic-primary"
                      >
                        Email *
                      </label>
                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className={inputClassName}
                        disabled={isSending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium text-parkonic-primary"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className={inputClassName}
                        disabled={isSending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1 block text-sm font-medium text-parkonic-primary"
                      >
                        Property Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className={inputClassName}
                        defaultValue=""
                        disabled={isSending}
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {navLinks.map((link) => (
                          <option key={link.href} value={link.label}>
                            {link.label}
                          </option>
                        ))}
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-parkonic-primary"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about the property you're looking for"
                      className={`${inputClassName} resize-y`}
                      disabled={isSending}
                    />
                  </div>

                  {error && (
                    <p
                      className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}

                  <div className="mt-6 text-center sm:text-left">
                    <button
                      type="submit"
                      className={brandButtonClassName}
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
