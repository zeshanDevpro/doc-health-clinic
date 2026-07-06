import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";
import { testimonials } from "@/constants";

export function TestimonialsSection() {
  return (
    <section className="w-full overflow-x-hidden px-2 pt-[50px] md:px-6 md:pt-[150px] lg:px-10">
      <Container>
        <Reveal className="min-w-0">
          <TestimonialsCarousel
            testimonials={testimonials}
            title={
              <>
                What Our <span className="font-semibold text-parkonic-secondary">Clients Say</span>
              </>
            }
            subtitle="Trusted by homebuyers, investors, and property owners across the United States."
          />
        </Reveal>
      </Container>
    </section>
  );
}
