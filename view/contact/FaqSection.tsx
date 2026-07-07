import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/constants";
import type { FaqItem } from "@/types";

type FaqSectionProps = {
  items?: FaqItem[];
  title?: ReactNode;
  subtitle?: string;
  showHeading?: boolean;
};

export function FaqSection({
  items = faqs,
  title = (
    <>
      Frequently Asked{" "}
      <span className="font-semibold text-parkonic-secondary">Questions</span>
    </>
  ),
  subtitle = "Everything you need to know about appointments, PKR fees, insurance panels, and visiting our G-8 Islamabad clinic.",
  showHeading = true,
}: FaqSectionProps) {
  return (
    <section className="w-full px-2 py-10 md:px-6 md:py-16 lg:px-10">
      <Container className="mx-auto max-w-4xl">
        <Reveal>
          <FaqAccordion
            items={items}
            title={showHeading ? title : undefined}
            subtitle={showHeading ? subtitle : undefined}
          />
        </Reveal>
      </Container>
    </section>
  );
}
