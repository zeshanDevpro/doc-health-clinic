import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cleaningAnimationItems } from "@/view/residential/cleaning-projects";

export function CleaningGallerySection() {
  return (
    <section id="residential-properties" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Explore <span>Residential Listings</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            Browse verified houses, villas, apartments, and plots across
            Browse verified homes, condos, and land across America&apos;s top neighborhoods.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={cleaningAnimationItems} />
    </section>
  );
}
