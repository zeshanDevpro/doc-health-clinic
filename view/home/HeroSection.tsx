import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  GradientText,
  HeroHeading,
} from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FaCircleArrowRight } from "react-icons/fa6";
import { images } from "@/lib/images";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[70vh] overflow-hidden bg-cover bg-center bg-no-repeat px-2 md:px-6 md:pt-[75px] lg:min-h-screen lg:px-10"
      style={{ backgroundImage: `url('${images.heroHome}')` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brand-navy/50 to-brand-navy/80 " />

      <Container className="relative z-[2] flex min-h-[60vh] items-center">
        <div className="w-full max-w-2xl py-10 lg:max-w-xl xl:max-w-2xl">
          <Reveal>
            <HeroHeading>
              Find Your Ideal{" "}
              <br className="hidden md:block" />
              <GradientText>Property</GradientText>{" "}
              With Confidence
            </HeroHeading>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 text-base font-semibold leading-relaxed text-white/90 md:mt-8">
              Explore verified properties, housing projects, market updates, and
              expert real estate guidance with Demo Real Estate — your trusted
              partner for buying, selling, and investing across the United States.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-5 md:mt-8">
              <h4 className="text-xl font-semibold uppercase text-brand-green-light md:text-2xl">
                Your dream home starts here
              </h4>
              <div className="mt-3 flex flex-col gap-2 md:flex-row">
                <Button
                  href="/contact"
                  className="flex w-full items-center justify-between"
                >
                  Talk to an Expert
                  <FaCircleArrowRight />
                </Button>
                <Button
                  href="/residential"
                  className="flex w-full items-center justify-between "
                >
                  Browse Properties
                  <FaCircleArrowRight />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
