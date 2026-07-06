import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { flooringAnimationItems } from "@/view/commercial/flooring-projects";

export function FlooringGallerySection() {
  return (
    <section id="commercial-properties" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Explore <span>Commercial Listings</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            Shops, offices, and commercial land for sale and lease nationwide.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={flooringAnimationItems} />
    </section>
  );
}
