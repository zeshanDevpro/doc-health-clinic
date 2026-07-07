import Link from "next/link";
import { FaCircleArrowRight, FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  brandButtonClassName,
  brandButtonOutlineClassName,
  company,
  appointmentPageHref,
} from "@/constants";
import { images } from "@/lib/images";

export function PageCtaSection() {
  return (
    <section
      className="relative overflow-hidden px-2 py-10 md:px-6 md:py-16 lg:px-10"
      style={{ backgroundImage: `url('${images.ctaBg}')` }}
    >
      <div className="absolute inset-0 bg-brand-navy/85" aria-hidden />
      <Container className="relative z-[1] text-center">
        <Reveal>
          <h2 className="text-[28px] font-light text-white md:text-[40px]">
            Ready to Take Care of{" "}
            <span className="font-semibold text-brand-green-light">Your Health?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Book an appointment at our G-8 Islamabad clinic today  or message us on
            WhatsApp for emergency support available around the clock.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={appointmentPageHref} className={brandButtonClassName}>
              Contact & Book
              <FaCircleArrowRight />
            </Link>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={brandButtonOutlineClassName}
            >
              <FaWhatsapp />
              {company.whatsapp}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
