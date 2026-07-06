import { ImageAnimation } from "@/components/global/ImageAnimation/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeAnimationItems } from "@/view/home/home-projects";

export function HomeGallerySection() {
  return (
    <section id="featured-properties" className="w-full scroll-mt-24">
      <Container className="px-2 pb-8 pt-[50px] md:px-6 md:pb-10 md:pt-[100px] lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading>
              Featured <span>Properties</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 leading-relaxed text-parkonic-primary md:mt-5 md:text-lg">
              Handpicked selection of the best properties available for sale and
              rent — residential plots, apartments, villas, and commercial spaces
              across the United States.
            </p>
          </Reveal>
        </div>
      </Container>

      <ImageAnimation items={homeAnimationItems} />
    </section>
  );
}
