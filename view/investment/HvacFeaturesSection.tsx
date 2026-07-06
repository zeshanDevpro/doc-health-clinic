import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceFeatureCard } from "@/components/global/ServiceFeatureCard";
import { hvacFeatureItems } from "@/view/investment/hvac-projects";

export function HvacFeaturesSection() {
  return (
    <section className="w-full px-2 pt-[50px] md:px-6 md:pt-[100px] lg:px-10">
      <Container>
        <Reveal>
          <SectionHeading className="mb-8">
            <span>Investment</span> Opportunities.
          </SectionHeading>
        </Reveal>
        <Reveal delay={80}>
          <p className="mb-10 max-w-3xl leading-relaxed text-parkonic-primary">
            Curated investment options with market-backed valuations and
            transparent pricing for informed decision-making.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-6">
          {hvacFeatureItems.map((item, index) => (
            <Reveal
              key={item.image}
              delay={index * 100}
              className="flex w-full flex-col md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
            >
              <ServiceFeatureCard
                image={item.image}
                title={item.cardTitle}
                description={item.description}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
