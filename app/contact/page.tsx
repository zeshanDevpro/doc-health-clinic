import type { Metadata } from "next";
import { company } from "@/constants";
import { createPageMetadata } from "@/lib/site-metadata";
import { ContactHeroSection } from "@/view/contact/ContactHeroSection";
import { ContactMapSection } from "@/view/contact/ContactMapSection";
import { ContactSection } from "@/view/contact/ContactSection";

export const metadata: Metadata = createPageMetadata({
  title: `Contact Us | ${company.shortName}`,
  description:
    "Contact Demo Real Estate for property inquiries — buy, rent, invest, or sell. Our experts respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactSection />
      <ContactMapSection />
    </>
  );
}
