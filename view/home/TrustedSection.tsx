import { FadeCarousel, LogoMarquee, MarqueeCarousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  certificates,
  clientLogos,
  projectSlides,
} from "@/constants";

export function TrustedSection() {
  return (
    <section className="flex w-full px-2 pt-[50px] md:px-6 md:pt-[150px] lg:px-10">
      <Container>
        <div className="mb-5 max-w-4xl">
          <Reveal>
            <SectionHeading>
              Why Homebuyers Trust{" "}
              <span className="text-[25px] md:text-[40px]">
                Demo Real Estate
              </span>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
          <div className="mb-12 w-full md:mb-24 md:w-1/2">
            <Reveal>
              <p className="mb-5 leading-[35px] text-brand-grey">
                Every property is carefully verified for authenticity, ownership,
                and documentation. Our experts guide you from the first visit to
                final transfer — with market-backed valuations and transparent
                dealings at every step.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mb-5">
                <h4 className="mb-4 text-2xl font-medium text-brand-navy">
                  Verified &amp; Trusted
                </h4>
                <LogoMarquee items={certificates} variant="logo" />
              </div>
            </Reveal>
          </div>

          <div className="relative mb-5 w-full md:w-1/2">
            <Reveal delay={200}>
              <div className="relative">
                <h4 className="mb-4 text-2xl font-medium text-brand-navy">
                  Featured Properties
                </h4>
                <FadeCarousel items={projectSlides} />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <MarqueeCarousel
            title="Partner Housing Societies & Developers"
            items={clientLogos}
            variant="logo"
          />
        </Reveal>
      </Container>
    </section>
  );
}
