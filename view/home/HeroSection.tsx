"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
  FaWhatsapp,
} from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientText, HeroHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  appointmentPageHref,
  brandButtonOutlineClassName,
  company,
  heroStats,
} from "@/constants";
import { images } from "@/lib/images";

const trustPoints = [
  { icon: FaShieldAlt, label: "Licensed & Insured" },
  { icon: FaStethoscope, label: "FCPS Specialists" },
  { icon: FaHeart, label: "Patient-First Care" },
];

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-brand-navy">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroHome}
          alt="MedCare Health Clinic  quality healthcare in Islamabad, Pakistan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-brand-navy/92 via-brand-navy/78 to-brand-navy/55" />
      <div className="pointer-events-none absolute -right-32 top-20 z-[1] h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 z-[1] h-80 w-80 rounded-full bg-brand-blue/15 blur-3xl" />

      {/* Main hero content */}
      <Container className="relative z-[2] flex flex-1 items-center px-2 py-10 md:px-6 md:py-16 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green-light backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light" />
                {company.tagline}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <HeroHeading className="mt-5 text-white">
                Quality Healthcare for{" "}
                <GradientText variant="dark" className="!bg-clip-text !text-transparent">
                  You & Your Family
                </GradientText>
              </HeroHeading>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                Islamabad&apos;s trusted medical centre in G-8  compassionate care
                from FCPS-qualified doctors, modern diagnostics, and affordable
                fees for every Pakistani family.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={appointmentPageHref}
                  className="!mt-0 flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  Book Appointment
                  <FaCircleArrowRight />
                </Button>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${brandButtonOutlineClassName} w-full justify-center sm:w-auto`}
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    <Icon className="text-brand-green-light" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal delay={200} className="reveal-scale">
              <div className="relative mx-auto max-w-xl lg:ml-auto lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-green/40 via-brand-blue/20 to-transparent blur-2xl" />

                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/25">
                  <Image
                    src={images.doctorConsultation}
                    alt="Doctor consulting with patient at MedCare Health Clinic Islamabad"
                    width={720}
                    height={520}
                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[400px] xl:h-[440px]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
                </div>

                {/* Floating satisfaction card */}
                <motion.div
                  className="absolute -bottom-5 left-0 md:-left-3 rounded md:rounded-2xl bg-white px-2 md:px-5 py-1.5 md:py-4 shadow-xl ring-1 ring-gray-100 sm:-left-6"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-3xl font-bold text-brand-navy">98%</p>
                  <p className="text-sm font-medium text-brand-grey">
                    Patient Satisfaction
                  </p>
                </motion.div>

                {/* Floating doctors card */}
                <motion.div
                  className="absolute right-0 md:-right-2 -top-12 md:top-6 flex items-center gap-3 rounded md:rounded-2xl border border-white/20 bg-white/95 px-1 md:px-4 py-1 md:py-3 shadow-lg backdrop-blur-md sm:-right-5"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    <FaUserMd className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">20+ Doctors</p>
                    <p className="text-xs text-brand-grey">Expert specialists</p>
                  </div>
                </motion.div>

                {/* Location pill */}
                <div className="absolute bottom-6 right-4 rounded-full bg-brand-navy/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:right-6">
                  📍 G-8 Markaz, Islamabad
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Stats strip  full width below hero */}
      <div className="relative z-[2] px-2 py-10 md:px-6 lg:px-10 border-t border-white/10 bg-white/95 backdrop-blur-md">
        <Container className="py-7 md:py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="group text-center md:text-left">
                  <p className="text-2xl font-bold text-brand-navy transition-colors group-hover:text-brand-green md:text-4xl">
                    {stat.isText ? (
                      stat.textValue
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-grey">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
