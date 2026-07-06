import { InnerPageHero } from "@/components/global/InnerPageHero";
import { PageBottom } from "@/components/global/PageBottom";
import { createPageMetadata } from "@/lib/site-metadata";
import { DoctorsSection } from "@/view/home/DoctorsSection";

export const metadata = createPageMetadata({
  title: "Our Doctors | MedCare Health Clinic Islamabad",
  description:
    "Meet FCPS and MRCP-qualified specialists at MedCare Health Clinic — experienced doctors serving patients across Islamabad and the capital region, Pakistan.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <InnerPageHero page="doctors" />
      <DoctorsSection showHeading={false} />
      <PageBottom />
    </>
  );
}
