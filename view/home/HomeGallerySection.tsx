import { ImageAnimation } from "@/components/global/ImageAnimation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeAnimationItems } from "@/view/home/home-animation-items";

export function HomeGallerySection() {
  return (
    <section className="w-full">
      <Container className="px-2 pb-8 pt-16 md:px-6 md:pb-10 md:pt-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading>
              Explore Our <span>Medical Facilities</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-brand-grey">
              Take a look inside MedCare Health Clinic — from specialist
              consultations and modern diagnostics to paediatric care and 24/7
              emergency support in G-8 Markaz, Islamabad.
            </p>
          </Reveal>
        </div>
      </Container>

      <ImageAnimation items={homeAnimationItems} />
    </section>
  );
}
