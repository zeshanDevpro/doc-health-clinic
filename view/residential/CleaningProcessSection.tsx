import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Share Requirements",
    description:
      "Tell us your budget, preferred city or suburb, and property type — our agents shortlist the best verified options.",
  },
  {
    step: "02",
    title: "Property Showings",
    description:
      "Schedule tours at your convenience — we accompany you and answer every question on location, comps, and value.",
  },
  {
    step: "03",
    title: "Due Diligence",
    description:
      "We verify title, HOA documents, and closing costs — ensuring a secure purchase with zero hidden surprises.",
  },
  {
    step: "04",
    title: "Closing Day",
    description:
      "Complete escrow and title support through to final walkthrough — your new home, delivered with confidence.",
  },
];

const highlights = [
  "Verified listings",
  "Free consultation",
  "Showing support",
  "Closing assistance",
];

export function CleaningProcessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy px-2 py-[50px] md:px-6 md:py-[100px] lg:px-10">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-green-light">
              How It Works
            </span>
          </Reveal>
          <Reveal delay={50}>
            <SectionHeading className="text-white">
              Your Path to <span className="text-brand-green-light">Home Ownership</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg md:leading-8">
              From your first inquiry to key handover — we guide you through
              every step with transparent advice, verified listings, and
              complete deal support.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative mt-14 md:mt-20">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent md:block"
            aria-hidden
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div className="group relative h-full rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-brand-green/40 hover:bg-white/[0.08] md:p-7">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-green bg-brand-navy text-sm font-bold text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                      {item.step}
                    </div>
                    <div className="h-px flex-1 bg-brand-green/25 md:hidden" aria-hidden />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-7">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
