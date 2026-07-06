import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";
import { testimonials } from "@/constants";

type TestimonialsSectionProps = {
  showHeading?: boolean;
};

export function TestimonialsSection({ showHeading = true }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="w-full scroll-mt-24 overflow-x-hidden px-2 py-20 md:px-6 md:py-28 lg:px-10"
    >
      <Container>
        <Reveal className="min-w-0">
          <TestimonialsCarousel
            testimonials={testimonials}
            title={
              showHeading ? (
                <>
                  What Our{" "}
                  <span className="font-semibold text-parkonic-secondary">Patients Say</span>
                </>
              ) : undefined
            }
            subtitle={
              showHeading
                ? "Trusted by families across Islamabad, Rawalpindi, and the capital region."
                : undefined
            }
          />
        </Reveal>
      </Container>
    </section>
  );
}
