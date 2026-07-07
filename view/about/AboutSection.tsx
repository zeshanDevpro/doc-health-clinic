import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, company } from "@/constants";
import { images } from "@/lib/images";

type AboutSectionProps = {
  variant?: "full" | "preview";
  showHeading?: boolean;
};

export function AboutSection({
  variant = "full",
  showHeading = true,
}: AboutSectionProps) {
  const isPreview = variant === "preview";

  return (
    <section className="w-full px-2 py-10 md:px-6 md:py-16 lg:px-10">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={images.aboutClinic}
                  alt="MedCare Health Clinic  modern medical facility in Islamabad"
                  width={600}
                  height={500}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-brand-navy px-6 py-4 text-white shadow-lg md:-right-8">
                <p className="text-3xl font-bold">
                  <AnimatedCounter target={aboutContent.experience} suffix="+" />
                </p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </Reveal>

          <div>
            {showHeading && (
              <Reveal>
                <SectionHeading>
                  About <span>MedCare Health Clinic</span>
                </SectionHeading>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand-green">
                  {company.tagline}
                </p>
              </Reveal>
            )}

            <Reveal delay={100}>
              <p className="mt-5 leading-relaxed text-brand-grey">
                {company.description}
              </p>
            </Reveal>

            {!isPreview && (
              <Reveal delay={150}>
                <div className="mt-8 space-y-6">
                  <div className="rounded-2xl border border-brand-green/20 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-brand-navy">Our Mission</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                      {aboutContent.mission}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-blue/20 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-brand-navy">Our Vision</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                      {aboutContent.vision}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            {isPreview && (
              <Reveal delay={200}>
                <Link
                  href="/about"
                  className="mt-6 inline-flex text-sm font-semibold text-brand-green transition hover:text-brand-navy"
                >
                  Learn More About Us →
                </Link>
              </Reveal>
            )}
          </div>
        </div>

        {!isPreview && (
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {aboutContent.highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 h-1 w-12 rounded-full bg-brand-green transition group-hover:w-16" />
                  <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
