import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { company, footerLinks, socialLinks } from "@/constants";
import logo from "@/public/images/demo-realestate-logo-full.svg";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
} as const;

function SocialIcon({ icon }: { icon: keyof typeof socialIconMap }) {
  const Icon = socialIconMap[icon];
  return <Icon className="h-6 w-6" aria-hidden />;
}

export function Footer() {
  return (
    <footer className=" mt-[30px] md:mt-[120px] border-t border-gray-200 px-2 md:px-6 lg:px-10">
      <Container className="flex flex-wrap justify-between gap-10 pt-10 pb-4">
        <div className="w-full lg:w-5/12">
          <Link href="/" className="inline-block no-underline" title={company.shortName}>
            <Image
              src={logo}
              alt={company.name}
              width={220}
              height={64}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-grey">
            {company.tagline}
          </p>
          <div className="mt-5 space-y-2 flex flex-col">

            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 text-sm text-brand-navy no-underline transition hover:text-brand-green"
            >
              <MdEmail className="h-4 w-4" aria-hidden />
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-brand-navy no-underline transition hover:text-brand-green"
            >
              <FaPhoneAlt className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-navy no-underline transition hover:text-brand-green"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              {company.whatsapp}
            </a>
          </div>
          <ul className="mt-5 flex list-none gap-5 p-0">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy transition-colors hover:text-brand-green"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon as keyof typeof socialIconMap} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-5/12">
          <h5 className="mb-4 text-lg font-semibold uppercase text-brand-grey">
            Our Services
          </h5>
          <ul className="m-0 grid list-none gap-3 grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.href} className="text-sm">
                <Link
                  href={link.href}
                  className="text-brand-navy no-underline transition hover:text-brand-green"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-gray-200 py-4 text-center">
        <p className="m-0 text-sm text-brand-grey">
          Copyright &copy; {new Date().getFullYear()} {company.copyright}. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
