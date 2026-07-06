import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function FlooringIntroSection() {
  return (
    <section className="w-full px-2 pt-[50px] pb-12 md:px-6 md:pt-[100px] lg:px-10">
      <Container>
        <div className="flex  flex-col md:flex-row gap-5 items-start justify-between">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <SectionHeading>
                <span>Prime Commercial,</span> Maximum Returns.
              </SectionHeading>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 leading-[35px] text-parkonic-primary">
                Demo Real Estate lists shops, offices, warehouses, and commercial
                plots in high-footfall areas — with market-backed ROI analysis
                and complete deal support for investors and business owners.
              </p>
            </Reveal>
          </div>
          <div className="mt-8 w-full text-center lg:mt-0 lg:w-1/2">
            <Reveal delay={150}>
              <Image
                src={images.shop}
                alt="Commercial properties across the United States"
                width={670}
                height={450}
                className="mx-auto h-auto w-full max-w-[670px] rounded-[30px] object-cover shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
