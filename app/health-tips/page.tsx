import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { HealthTipsSection } from "@/view/health-tips/HealthTipsSection";

export const metadata = createPageMetadata({
  title: "Health Tips | MedCare Health Clinic Islamabad",
  description:
    "Practical health advice for Islamabad  blood pressure, diabetes, child vaccines, smog season, dental care, and annual check-ups from MedCare doctors in G-8 Markaz.",
  path: "/health-tips",
});

export default function HealthTipsPage() {
  return (
    <>
      <InnerPageHero page="healthTips" />
      <HealthTipsSection showHeading={false} />
      <PageBottom />
    </>
  );
}
