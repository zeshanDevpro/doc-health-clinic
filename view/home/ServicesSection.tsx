"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaBaby,
  FaBone,
  FaBrain,
  FaEye,
  FaFemale,
  FaFlask,
  FaHeart,
  FaRunning,
  FaStethoscope,
  FaTooth,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactPageHref, medicalServices } from "@/constants";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  stethoscope: FaStethoscope,
  heart: FaHeart,
  tooth: FaTooth,
  baby: FaBaby,
  bone: FaBone,
  brain: FaBrain,
  skin: FaHandHoldingMedical,
  female: FaFemale,
  eye: FaEye,
  lab: FaFlask,
  ambulance: FaAmbulance,
  physio: FaRunning,
};

type ServicesSectionProps = {
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
};

export function ServicesSection({
  limit,
  showHeading = true,
  showViewAll = false,
}: ServicesSectionProps) {
  const items = limit ? medicalServices.slice(0, limit) : medicalServices;

  return (
    <section className="w-full bg-white px-2 py-20 md:px-6 md:py-28 lg:px-10">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Our Medical <span>Services</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              Comprehensive healthcare under one roof — from preventive care to
              specialised treatments for patients across Islamabad and the capital region.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${showHeading ? "mt-14" : ""}`}>
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] ?? FaStethoscope;
            return (
              <Reveal key={service.id} delay={(index % 4) * 80}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-brand-surface p-6 shadow-sm transition hover:border-brand-green/30 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy transition group-hover:bg-brand-navy group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-grey">
                    {service.description}
                  </p>
                  <Link
                    href={contactPageHref}
                    className="mt-4 text-sm font-semibold text-brand-green transition hover:text-brand-navy"
                  >
                    Book Appointment →
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {showViewAll && (
          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-green"
            >
              View All Services →
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
