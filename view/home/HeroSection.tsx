"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaStethoscope, FaUserMd, FaSyringe, FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientText, HeroHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  brandButtonOutlineClassName,
  company,
  contactPageHref,
  heroStats,
} from "@/constants";
import { images } from "@/lib/images";

const floatingIcons = [
  { Icon: FaStethoscope, className: "top-[18%] left-[8%] text-brand-green", delay: 0 },
  { Icon: FaHeart, className: "top-[30%] right-[12%] text-brand-blue", delay: 0.5 },
  { Icon: FaUserMd, className: "bottom-[35%] left-[15%] text-brand-green-light", delay: 1 },
  { Icon: FaSyringe, className: "bottom-[25%] right-[8%] text-brand-blue", delay: 1.5 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] overflow-hidden bg-brand-navy lg:min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroHome}
          alt="MedCare Health Clinic — quality healthcare in Islamabad, Pakistan"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-brand-navy/75 via-brand-navy/55 to-brand-navy/35" />

      {floatingIcons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          className={`pointer-events-none absolute z-[2] hidden text-3xl opacity-20 lg:block ${className}`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
          aria-hidden
        >
          <Icon />
        </motion.div>
      ))}

      <Container className="relative z-[2] flex min-h-[85vh] items-center py-16 lg:min-h-screen">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green-light">
                {company.tagline}
              </p>
              <HeroHeading className="text-white">
                Quality Healthcare for{" "}
                <GradientText className="!bg-clip-text !text-transparent">
                  You & Your Family
                </GradientText>
              </HeroHeading>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-white/85 md:mt-6 md:text-lg">
                Islamabad&apos;s trusted medical centre in G-8 — compassionate care from
                FCPS-qualified doctors, modern diagnostics, and affordable fees
                for every Pakistani family.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={contactPageHref} className="flex w-full items-center justify-between sm:w-auto">
                  Contact & Book
                  <FaCircleArrowRight />
                </Button>
                <a
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${brandButtonOutlineClassName} w-full sm:w-auto`}
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="reveal-scale">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20">
                <Image
                  src={images.doctorConsultation}
                  alt="Doctor consulting with patient at MedCare Health Clinic Islamabad"
                  width={600}
                  height={450}
                  className="h-[280px] w-full object-cover md:h-[360px]"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-8">
                <p className="text-2xl font-bold text-brand-navy">98%</p>
                <p className="text-sm text-brand-grey">Patient Satisfaction</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="relative z-[2] w-full bg-white/95 backdrop-blur-md">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-navy md:text-4xl">
                    {stat.isText ? (
                      stat.textValue
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-grey md:text-base">
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
