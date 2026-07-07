"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { appointmentPageHref, brandButtonClassNameSm, doctors } from "@/constants";

type DoctorsSectionProps = {
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
};

export function DoctorsSection({
  limit,
  showHeading = true,
  showViewAll = false,
}: DoctorsSectionProps) {
  const items = limit ? doctors.slice(0, limit) : doctors;

  return (
    <section className="w-full px-2 py-10 md:px-6 md:py-16 lg:px-10">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Meet Our <span>Doctors</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              FCPS and MRCP-qualified physicians dedicated to delivering
              personalised, evidence-based care for patients across Pakistan.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-8  sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {items.map((doctor, index) => (
            <Reveal key={doctor.id} delay={index * 100}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl flex min-h-[610px] flex-col justify-between bg-brand-surface shadow-sm ring-1 ring-gray-100 transition hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-brand-surface sm:h-80">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-[center_18%] transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand-green-light">
                      {doctor.specialization}
                    </p>
                    <h3 className="text-xl font-semibold text-white">{doctor.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-brand-navy">{doctor.qualification}</p>
                  <p className="mt-1 text-sm text-brand-green">
                    {doctor.experience} years of experience
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-grey">{doctor.bio}</p>
                  <Link
                    href={appointmentPageHref}
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 ${brandButtonClassNameSm}`}
                  >
                    Book Appointment
                    <FaCircleArrowRight />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {showViewAll && (
          <Reveal className="mt-10 text-center">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-green"
            >
              Meet All Our Doctors →
            </Link>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
