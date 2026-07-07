import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { HealthTipsSection } from "@/view/health-tips/HealthTipsSection";

export const metadata = createPageMetadata({
  title: "Health Tips | MedCare Health Clinic Islamabad",
  description:
    "Expert health and wellness advice for Pakistani families  heart health, diabetes, child vaccination, dental hygiene, and more from MedCare doctors.",
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
