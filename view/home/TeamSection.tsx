import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TeamGallery } from "@/components/ui/TeamGallery";
import { teamGroupPhotos } from "@/constants";

export function TeamSection() {
  return (
    <section className="w-full px-2 pt-[50px] md:px-6 md:pt-[150px] lg:px-10">
      <Container>
        <Reveal>
          <TeamGallery
            photos={teamGroupPhotos}
            title={
              <>
                Meet Our{" "}
                <span className="font-semibold text-parkonic-secondary">Team</span>
              </>
            }
            subtitle="Licensed agents delivering expert guidance and transparent dealings in markets nationwide."
          />
        </Reveal>
      </Container>
    </section>
  );
}
