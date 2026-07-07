import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { company, socialLinks } from "@/constants";
import { images } from "@/lib/images";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
} as const;

export function ContactInfoPanel() {
  return (
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

      <div className="flex gap-4 rounded-2xl border-2 border-red-100 bg-red-50 p-2 md:p-5">
        <MdAccessTime className="mt-0.5 h-6 w-6 shrink-0 text-red-500" aria-hidden />
        <div>
          <p className="font-semibold text-red-700">Emergency</p>
          <p className="mt-1 text-sm text-red-600">{company.workingHours.emergency}</p>
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
  );
}
