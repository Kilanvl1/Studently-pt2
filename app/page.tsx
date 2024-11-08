import { Profile } from "@/components/profile";
import { LandingPage } from "./landingPage";

import { Container } from "@/components/ui/container";

export default async function Home() {
  return (
    <Container>
      <LandingPage />

      <Profile />
    </Container>
  );
}
