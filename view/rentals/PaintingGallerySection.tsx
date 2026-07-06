import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { paintingAnimationItems } from "@/view/rentals/painting-projects";

export function PaintingGallerySection() {
  return (
    <section id="rental-properties" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Explore <span>Rental Listings</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            Apartments, houses, and commercial units for rent nationwide.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={paintingAnimationItems} />
    </section>
  );
}
