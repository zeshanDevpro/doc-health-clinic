import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { itInfrastructureAnimationItems } from "@/view/projects/it-infrastructure-projects";

export function ItInfrastructureGallerySection() {
  return (
    <section id="housing-projects" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 md:px-6 lg:px-10">
        <Reveal>
          <SectionHeading>
            Explore <span>Housing Projects</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-2xl leading-relaxed text-parkonic-primary">
            Major new home communities and pre-construction launches across Texas,
            Arizona, Florida, and Tennessee.
          </p>
        </Reveal>
      </Container>
      <ImageAnimation items={itInfrastructureAnimationItems} />
    </section>
  );
}
