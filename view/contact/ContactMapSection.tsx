import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/constants";

export function ContactMapSection() {
  return (
    <section className="w-full px-2 pt-[50px] pb-[80px] md:px-6 md:pt-[100px] md:pb-[120px] lg:px-10">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Reveal>
            <SectionHeading>
              Find <span>Us</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 leading-relaxed text-brand-grey md:text-lg">
              Visit our team at {company.address}. We serve buyers, sellers,
              and investors in markets across the United States.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-[30px] shadow-sm ring-1 ring-gray-100">
            <iframe
              title={`${company.shortName} location map`}
              src={company.mapEmbedUrl}
              className="h-[350px] w-full border-0 md:h-[450px] lg:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-sm text-brand-grey">
            {company.address} ·{" "}
            <a
              href={company.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-navy no-underline transition hover:text-brand-green"
            >
              Get directions on Google Maps
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
