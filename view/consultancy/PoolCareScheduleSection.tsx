import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const serviceSteps = [
  { step: "Step 1", task: "Initial consultation & requirement analysis" },
  { step: "Step 2", task: "Property shortlisting & market comparison" },
  { step: "Step 3", task: "Site visits & documentation verification" },
  { step: "Step 4", task: "Negotiation, transfer & final handover" },
];

const serviceHighlights = [
  { label: "Response Time", range: "Within 24 hours", note: "For all inquiries" },
  { label: "Listing Verification", range: "100% checked", note: "Before publishing" },
  { label: "Deal Support", range: "End-to-end", note: "From visit to transfer" },
  { label: "Client Satisfaction", range: "5-star rated", note: "Trusted by hundreds" },
];

export function PoolCareScheduleSection() {
  return (
    <section className="w-full px-2 py-[50px] md:px-6 md:py-[100px] lg:px-10">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionHeading>
              Our <span>Consultancy Process</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 leading-relaxed text-parkonic-primary md:text-lg">
              A clear, transparent workflow — from your first inquiry to final
              property transfer.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-[48%]">
            <Reveal>
              <h4 className="mb-6 text-xl font-semibold text-parkonic-secondary">
                Service Workflow
              </h4>
            </Reveal>
            <ul className="space-y-4">
              {serviceSteps.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <li className="flex items-center gap-4 rounded-[20px] bg-white p-4 shadow-[0_8px_32px_rgba(27,54,93,0.06)] ring-1 ring-brand-navy/5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                      {item.step}
                    </span>
                    <span className="text-parkonic-primary">{item.task}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[48%]">
            <Reveal delay={150}>
              <div className="h-full rounded-[30px] bg-gradient-to-br from-brand-navy to-brand-navy-dark p-8 md:p-10">
                <h4 className="mb-6 text-xl font-semibold text-brand-green-light">
                  Service Commitments
                </h4>
                <ul className="space-y-5">
                  {serviceHighlights.map((item) => (
                    <li
                      key={item.label}
                      className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-white/70">
                          {item.label}
                        </span>
                        <span className="text-lg font-semibold text-brand-green-light">
                          {item.range}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/50">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
