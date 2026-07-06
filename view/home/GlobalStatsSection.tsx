import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { globalStats } from "@/constants";

function StatIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      width={50}
      height={55}
      className="mr-5 inline-block h-auto w-[50px]"
      aria-hidden
    />
  );
}

export function GlobalStatsSection() {
  return (
    <section className="relative z-[1] w-full overflow-hidden pt-[50px] md:pt-[150px] px-2 md:px-6 lg:px-10">
      <Container>
        <Reveal>
          <SectionHeading>
            Built on <span>Experience & Trust</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-5 max-w-xl">
          <Reveal delay={100}>
            <p className="leading-[35px] text-parkonic-primary">
              {globalStats.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-5 flex flex-wrap">
          <div className="mb-5 w-full lg:w-1/2 xl:pr-[10%]">
            {globalStats.left.map((stat, index) => (
              <Reveal key={stat.title} delay={index * 150} className="mt-5">
                <div>
                  <h4 className="text-[80px] font-extralight leading-none text-parkonic-primary">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </h4>
                  <h6 className="mb-4 text-lg font-medium text-parkonic-secondary">
                    {stat.title}
                  </h6>
                  <p className="leading-[35px] text-parkonic-primary">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="relative z-[1] mb-5 w-full lg:w-1/2">
            {globalStats.right.map((stat, index) => (
              <Reveal key={stat.title} delay={index * 150} className="mb-6">
                <div className="w-full rounded-[35px] bg-white p-5 md:p-[35px] shadow-[0_10px_10px_-10px_rgba(200,200,200,0.2),20px_40px_80px_-50px_rgba(0,0,0,0.2)] xl:w-3/4">
                  <h4 className="mb-0 flex flex-col md:flex-row items-start md:items-center text-[40px] font-normal text-parkonic-primary">
                    {stat.icon && <StatIcon src={stat.icon} />}
                    {stat.isText ? (
                      <span>{stat.title}</span>
                    ) : (
                      <AnimatedCounter
                        target={stat.value!}
                        suffix={stat.suffix}
                      />
                    )}
                  </h4>
                  <h6 className="mb-4 text-xl font-medium text-parkonic-secondary empty:hidden">
                    {stat.isText ? null : stat.title}
                  </h6>
                  <p className="mb-0 leading-[35px] text-parkonic-primary">
                    {stat.description}
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
