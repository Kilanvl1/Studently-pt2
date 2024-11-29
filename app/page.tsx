import { Profile } from "@/components/profile";
import { LandingPage } from "./landingPage";

import { Container } from "@/components/ui/container";
import { HighlightsSection } from "./highlightsSection";

import rocketGraphic from "@/public/rocket-graphic.png";
import Image from "next/image";

export default async function Home() {
  return (
    <Container>
      <LandingPage />
      <section className="py-14">
        <p className="text-lg text-center ">
          Trusted by +400 students in the Netherlands.
        </p>
      </section>
      <div className="max-w-[800px] mx-auto mb-32">
        <HighlightsSection />
        <div className="2xl:flex items-center gap-x-4">
          <Profile />
          <Image src={rocketGraphic} alt="Rocket" className="mx-auto" />
        </div>
      </div>
    </Container>
  );
}
