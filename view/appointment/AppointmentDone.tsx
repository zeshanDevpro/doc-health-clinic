import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { brandButtonClassName, company, contactPageHref } from "@/constants";

export function AppointmentDone() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-dark px-2 py-24 md:px-6 md:py-32 lg:px-10">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />

      <Container className="relative">
        <Reveal className="text-center">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
            Appointment Scheduled
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 w-full max-w-4xl rounded-2xl bg-white px-6 py-10 shadow-2xl md:px-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-center">
              <div className="mx-auto flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-brand-green/10 md:mx-0">
                <span className="text-7xl text-brand-green" aria-hidden>
                  ✓
                </span>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-brand-grey">
                <p className="text-base font-semibold text-brand-navy">
                  Thank you for choosing {company.name}!
                </p>
                <p>
                  We&apos;re honoured to be part of your healthcare journey. Our
                  team will contact you shortly via WhatsApp or SMS to confirm
                  your appointment details.
                </p>
                <p>
                  If you have any questions before your visit, reach us on
                  WhatsApp at {company.whatsapp} or email {company.email}.
                </p>
                <p>
                  We look forward to welcoming you at our G-8 Markaz clinic in
                  Islamabad.
                </p>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Link href={contactPageHref} className={brandButtonClassName}>
                    Contact Clinic
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border-2 border-brand-green px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-green/10"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
