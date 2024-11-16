import { Profile } from "@/components/profile";
import { LandingPage } from "./landingPage";

import { Container } from "@/components/ui/container";
import { HighlightsSection } from "./highlightsSection";

export default async function Home() {
  return (
    <Container>
      <LandingPage />
      <section className="py-14">
        <p className="text-lg text-center ">
          Trusted by +400 students in the Netherlands.
        </p>
      </section>
      <div className="max-w-[800px] mx-auto">
        <HighlightsSection />
        <Profile />
      </div>
    </Container>
  );
}
