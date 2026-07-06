import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { poolAnimationItems } from "@/view/consultancy/pool-projects";

export function PoolGallerySection() {
  return (
    <section id="consultancy-services" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Our <span>Advisory Services</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            End-to-end property consultancy for buyers, sellers, and investors
            End-to-end property advisory for buyers, sellers, and investors nationwide.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={poolAnimationItems} />
    </section>
  );
}
