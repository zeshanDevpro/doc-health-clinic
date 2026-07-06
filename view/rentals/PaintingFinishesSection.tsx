import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const propertyTypes = [
  {
    name: "Apartments",
    swatch: "#2C5282",
    accent: "#C5A028",
    description:
      "1, 2, and 3 bed apartments in secure buildings — ideal for professionals and small families.",
    bestFor: "Professionals, couples, small families",
  },
  {
    name: "Houses & Villas",
    swatch: "#1B365D",
    accent: "#C5A028",
    description:
      "Standalone houses and luxury villas with gardens, parking, and privacy in gated communities.",
    bestFor: "Families, executives, long-term tenants",
  },
  {
    name: "Offices",
    swatch: "#4A5568",
    accent: "#2C5282",
    description:
      "Furnished and unfurnished office spaces in commercial districts and business hubs.",
    bestFor: "Startups, SMEs, corporate teams",
  },
  {
    name: "Shops & Retail",
    swatch: "#C5A028",
    accent: "#1B365D",
    description:
      "Ground-floor shops and retail units on main commercial roads with high visibility.",
    bestFor: "Retailers, restaurants, clinics",
  },
];

export function PaintingFinishesSection() {
  return (
    <section className="w-full bg-brand-off-white px-2 py-[50px] md:px-6 md:py-[100px] lg:px-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading>
              Rental <span>Property Types</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 leading-relaxed text-parkonic-primary md:text-lg">
              Whether you need a family home, a professional workspace, or a
              retail shop — we have verified rentals for every need.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((finish, index) => (
            <Reveal key={finish.name} delay={index * 100}>
              <div className="group h-full overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(27,54,93,0.08)] ring-1 ring-brand-navy/5 transition duration-300 hover:-translate-y-1">
                <div
                  className="h-3 w-full"
                  style={{ backgroundColor: finish.swatch }}
                />
                <div className="p-6 md:p-7">
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: finish.accent }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-xl font-semibold text-parkonic-secondary">
                    {finish.name}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-parkonic-primary">
                    {finish.description}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand-green">
                    Best for: {finish.bestFor}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
