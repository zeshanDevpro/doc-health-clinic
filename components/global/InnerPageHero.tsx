import { PageHero } from "@/components/global/PageHero";
import { pageHeroContent } from "@/lib/page-heroes";

type PageHeroKey = keyof typeof pageHeroContent;

export function InnerPageHero({ page }: { page: PageHeroKey }) {
  const content = pageHeroContent[page];

  return (
    <PageHero
      variant="background"
      showGlobeOverlay={false}
      headingLine1={content.headingLine1}
      headingLine2={content.headingLine2}
      description={content.description}
      backgroundImage={content.backgroundImage}
      backgroundAlt={`${content.headingLine1} ${content.headingLine2}`}
      theme={{
        badge: content.badge,
        overlayClass:
          "bg-gradient-to-r from-brand-navy/80 via-brand-navy/55 to-brand-navy/35",
      }}
    />
  );
}
