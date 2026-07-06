import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hvacAnimationItems } from "@/view/investment/hvac-projects";

export function HvacGallerySection() {
  return (
    <section id="investment-properties" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Explore <span>Investment Options</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            Rental properties, land, condos, and commercial investments across
            America&apos;s fastest-growing metros.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={hvacAnimationItems} />
    </section>
  );
}
