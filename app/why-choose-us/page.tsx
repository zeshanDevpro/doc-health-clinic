import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { WhyChooseUsSection } from "@/view/why-choose-us/WhyChooseUsSection";

export const metadata = createPageMetadata({
  title: "Why Choose Us | MedCare Health Clinic Islamabad",
  description:
    "Discover why thousands of Pakistani families trust MedCare  experienced doctors, modern equipment, affordable PKR fees, and 24/7 emergency support in Islamabad.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <>
      <InnerPageHero page="whyChooseUs" />
      <WhyChooseUsSection showHeading={false} />
      <PageBottom />
    </>
  );
}
