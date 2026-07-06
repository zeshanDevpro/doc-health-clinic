"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Container } from "@/components/ui/Container";
import {
  brandButtonClassNameSm,
  company,
  departments,
  footerNavLinks,
  socialLinks,
} from "@/constants";
import logo from "@/public/images/medcare-logo-full.svg";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
} as const;

function SocialIcon({ icon }: { icon: keyof typeof socialIconMap }) {
  const Icon = socialIconMap[icon];
  return <Icon className="h-5 w-5" aria-hidden />;
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="mt-10 border-t border-gray-200 bg-brand-navy px-2 text-white md:px-6 lg:px-10">
      <Container className="grid gap-10 pt-12 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block" title={company.shortName}>
            <Image
              src={logo}
              alt={company.name}
              width={220}
              height={64}
              className="h-14 w-auto brightness-0 invert object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {company.tagline} — Islamabad&apos;s trusted medical centre for
            Pakistani families.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-green"
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon as keyof typeof socialIconMap} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
            Quick Links
          </h5>
          <ul className="grid list-none gap-2.5 p-0">
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 no-underline transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
            Departments
          </h5>
          <ul className="grid list-none gap-2 p-0 sm:grid-cols-2 lg:grid-cols-1">
            {departments.slice(0, 8).map((dept) => (
              <li key={dept}>
                <Link
                  href="/services"
                  className="text-sm text-white/70 no-underline transition hover:text-white"
                >
                  {dept}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-green-light">
            Stay Connected
          </h5>

          <div className="mb-5 rounded-xl bg-white/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
              Emergency
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {company.workingHours.emergency}
            </p>
          </div>

          {subscribed ? (
            <p className="text-sm text-brand-green-light">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleNewsletter}>
              <p className="mb-3 text-sm text-white/70">
                Get health tips and clinic updates in your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 rounded-full border-0 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button type="submit" className={brandButtonClassNameSm}>
                  Join
                </button>
              </div>
            </form>
          )}

          <div className="mt-5 space-y-2">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-sm text-white/70 no-underline hover:text-white"
            >
              <MdEmail className="h-4 w-4" />
              {company.email}
            </a>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 no-underline hover:text-white"
            >
              <FaWhatsapp className="h-4 w-4" />
              {company.whatsapp}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5 text-center">
        <p className="m-0 text-sm text-white/50">
          Copyright &copy; {new Date().getFullYear()} {company.copyright}. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
