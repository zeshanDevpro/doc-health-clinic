import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FaCircleArrowRight } from "react-icons/fa6";
import { images } from "@/lib/images";

export function ContactCtaSection() {
  return (
    <section className="flex w-full px-2 pt-[50px] md:px-6 md:pt-[150px] lg:px-10">
      <Container>
        <Reveal>
          <div
            className="flex flex-wrap items-center justify-center rounded-[30px] bg-cover bg-center p-3 text-center md:p-14"
            style={{
              backgroundImage: `linear-gradient(rgba(27, 54, 93, 0.85), rgba(27, 54, 93, 0.85)), url('${images.ctaBg}')`,
            }}
          >
            <h2 className="mb-4 w-full text-[30px] font-extralight text-white lg:text-[40px]">
              Talk to a Property Expert Today
            </h2>
            <p className="w-full leading-relaxed text-white/90 lg:px-[16%]">
              Tell us what you&apos;re looking for — buy, rent, invest, or sell.
              Our team aims to respond within one business day with verified
              options tailored to your needs.
            </p>
            <div className="mt-6">
              <Button
                href="/contact"
                className="inline-flex items-center justify-between gap-1"
              >
                Get in Touch
                <FaCircleArrowRight />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
