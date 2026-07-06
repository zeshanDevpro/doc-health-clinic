"use client";

import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaStar,
  FaStethoscope,
  FaUserMd,
  FaAmbulance,
} from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/constants";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  doctor: FaUserMd,
  equipment: FaStethoscope,
  affordable: FaDollarSign,
  calendar: FaCalendarCheck,
  emergency: FaAmbulance,
  speed: FaClock,
  shield: FaShieldAlt,
  star: FaStar,
};

type WhyChooseUsSectionProps = {
  limit?: number;
  showHeading?: boolean;
};

export function WhyChooseUsSection({
  limit,
  showHeading = true,
}: WhyChooseUsSectionProps) {
  const items = limit ? whyChooseUs.slice(0, limit) : whyChooseUs;

  return (
    <section className="relative w-full overflow-hidden px-2 py-20 md:px-6 md:py-28 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-navy/5 via-transparent to-brand-blue/5" />

      <Container className="relative">
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Why Choose <span>MedCare</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              Thousands of families across Islamabad trust us for honest care,
              transparent PKR fees, and treatment you can afford.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${showHeading ? "mt-14" : ""}`}>
          {items.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? FaStar;
            return (
              <Reveal key={feature.id} delay={index * 80}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="h-full rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-green text-white shadow-md">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                    {feature.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
