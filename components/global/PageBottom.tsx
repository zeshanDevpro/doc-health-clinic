import { PageCtaSection } from "@/components/global/PageCtaSection";
import { FaqSection } from "@/view/home/FaqSection";

type PageBottomProps = {
  showCta?: boolean;
};

/** FAQ on every page; optional CTA before footer (hidden on contact page). */
export function PageBottom({ showCta = true }: PageBottomProps) {
  return (
    <>
      <FaqSection />
      {showCta && <PageCtaSection />}
    </>
  );
}
