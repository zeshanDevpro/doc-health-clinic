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
import { company, socialLinks } from "@/constants";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
} as const;

type ContactSectionProps = {
  showHeading?: boolean;
};

export function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <section className="w-full bg-white px-2 py-20 md:px-6 md:py-28 lg:px-10">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Contact <span>Us</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              Visit us in G-8 Markaz, Islamabad — WhatsApp, email, or message us.
              Our team responds promptly in English and Urdu.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-8 lg:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          <Reveal>
            <div className="space-y-5">
              <div className="flex gap-4 rounded-2xl bg-brand-surface p-5">
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

              <div className="flex gap-4 rounded-2xl bg-brand-surface p-5">
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

              <div className="flex gap-4 rounded-2xl bg-brand-surface p-5">
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

              <div className="flex gap-4 rounded-2xl bg-brand-surface p-5">
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
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
              <iframe
                src={company.mapEmbedUrl}
                title="MedCare Health Clinic location on Google Maps"
                className="h-[400px] w-full border-0 md:h-full md:min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
