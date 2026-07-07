import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeAnimationItems } from "@/view/home/home-animation-items";

export function HomeGallerySection() {
  return (
    <section className="w-full bg-brand-surface">
      <Container className="px-2 pb-6 pt-16 md:px-6 md:pb-8 md:pt-24 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Inside MedCare
          </p>
          <SectionHeading className="mt-3">
            Explore Our <span>Medical Facilities</span>
          </SectionHeading>
        </Reveal>
      </Container>

      <ImageAnimation items={homeAnimationItems} />
    </section>
  );
}
