"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroButton } from "@/components/global/HeroButton";
import { BRAND_COLORS, HERO_TEXT_GRADIENT_ON_DARK } from "@/constants";
import { images } from "@/lib/images";
import type { PageHeroProps } from "@/types";

const defaultAccent = {
  from: BRAND_COLORS.blue,
  via: BRAND_COLORS.navy,
  to: BRAND_COLORS.green,
};

const defaultSplitOverlay =
  "bg-gradient-to-br from-brand-off-white/60 via-brand-off-white/30 to-brand-navy/10";

const defaultBackgroundOverlay =
  "bg-gradient-to-r from-brand-navy/80 via-brand-navy/55 to-brand-navy/35";

export function PageHero({
  headingLine1,
  headingLine2,
  description,
  backgroundImage = images.heroHome,
  backgroundAlt = "MedCare Health Clinic",
  waveImage,
  bannerImage,
  bannerAlt = "Page banner",
  subheading,
  buttons,
  onProposal,
  onConsultation,
  showGlobeOverlay = true,
  floatingImage,
  theme,
  variant = "split",
}: PageHeroProps) {
  const isBackground = variant === "background";
  const hasButtons = Boolean(buttons?.length);
  const hasBannerImage = !isBackground && Boolean(bannerImage);
  const showGlobe = !isBackground && showGlobeOverlay;
  const accentFrom = theme?.accentFrom ?? defaultAccent.from;
  const accentVia = theme?.accentVia ?? defaultAccent.via;
  const accentTo = theme?.accentTo ?? defaultAccent.to;

  const overlayClass =
    theme?.overlayClass ??
    (isBackground ? defaultBackgroundOverlay : defaultSplitOverlay);

  return (
    <section className="relative flex min-h-[70vh] overflow-hidden bg-brand-navy pt-[35px] lg:min-h-[85vh]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}

      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${overlayClass}`}
        aria-hidden
      />

      {!isBackground && waveImage && (
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${waveImage}')` }}
          aria-hidden
        />
      )}

      {showGlobe && (
        <div className="animate-fadein pointer-events-none absolute bottom-0 left-0 z-[1] w-full opacity-50">
          <Image
            src="/images/parkonic-global.png"
            alt=""
            width={1920}
            height={800}
            className="h-auto w-full"
            priority
            aria-hidden
          />
        </div>
      )}

      {!isBackground && (
        <>
          <div
            className="animate-hero-glow pointer-events-none absolute -top-20 right-0 z-[1] h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
            aria-hidden
          />
          <div
            className="animate-hero-glow-delayed pointer-events-none absolute bottom-10 left-0 z-[1] h-64 w-64 rounded-full bg-brand-navy/15 blur-3xl"
            aria-hidden
          />
        </>
      )}

      <Container
        className={`relative z-[2] flex min-h-[55vh] flex-wrap items-center py-10 lg:min-h-[65vh] ${isBackground ? "justify-center" : ""
          }`}
      >
        <div
          className={`w-full py-4 ${isBackground
            ? "mx-auto max-w-3xl text-center"
            : hasBannerImage
              ? "md:w-7/12 lg:w-7/12"
              : "max-w-3xl"
            }`}
        >
          {theme?.badge && (
            <Reveal>
              <span
                className={`mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm ${isBackground
                  ? "border-brand-green/40 bg-white/10 text-white"
                  : "border-brand-green/30 bg-white/80 text-brand-navy"
                  }`}
              >
                {theme.badge}
              </span>
            </Reveal>
          )}

          <Reveal delay={theme?.badge ? 80 : 0}>
            <h1
              className={`text-[36px] font-semibold leading-tight md:text-[42px] ${isBackground ? "text-white" : "text-parkonic-primary"
                }`}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: isBackground
                    ? HERO_TEXT_GRADIENT_ON_DARK
                    : `linear-gradient(122deg, ${accentFrom} 0%, ${accentTo} 100%)`,
                }}
              >
                {headingLine1}
              </span>
              {headingLine2 && (
                <>
                  <br />
                  <span className={isBackground ? "text-white" : "text-parkonic-primary"}>
                    {headingLine2}
                  </span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p
              className={`mt-5 max-w-xl text-base font-semibold leading-relaxed md:mt-8 ${isBackground ? "mx-auto text-white/90" : "text-parkonic-primary"
                }`}
            >
              {description}
            </p>
          </Reveal>

          {(subheading || hasButtons) && (
            <Reveal delay={300}>
              <div className="mt-5 md:mt-8">
                {subheading && (
                  <h4
                    className={`mb-2 text-xl font-semibold uppercase md:text-2xl ${isBackground ? "text-brand-green-light" : "text-parkonic-secondary"
                      }`}
                  >
                    {subheading}
                  </h4>
                )}
                {hasButtons && (
                  <div
                    className={`flex flex-wrap ${isBackground ? "justify-center" : ""}`}
                  >
                    {buttons!.map((cta) => (
                      <HeroButton
                        key={cta.label}
                        cta={cta}
                        onProposal={onProposal}
                        onConsultation={onConsultation}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {hasBannerImage && (
          <div className="relative mt-8 w-full md:mt-0 md:w-5/12 lg:w-5/12">
            <div className="animate-float relative mx-auto max-w-[500px]">
              <Image
                src={bannerImage!}
                alt={bannerAlt}
                width={600}
                height={500}
                className="relative z-[1] h-auto w-full rounded-[30px] object-cover shadow-[0_20px_60px_-20px_rgba(26,58,92,0.35)]"
                priority
              />
            </div>
          </div>
        )}

        {!isBackground && floatingImage && !hasBannerImage && (
          <div
            className="animate-float-slow pointer-events-none absolute top-[12%] right-0 z-[1] hidden h-40 w-40 bg-contain bg-center bg-no-repeat opacity-70 lg:block xl:h-52 xl:w-52"
            style={{ backgroundImage: `url('${floatingImage}')` }}
            aria-hidden
          />
        )}
      </Container>
    </section>
  );
}
