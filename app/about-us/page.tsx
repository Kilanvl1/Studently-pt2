import { Container } from "@/components/ui/container";

import { GraduationCap, SquareCheck, Globe, TrainFront } from "lucide-react";

import { FounderDisplay } from "./founderDisplay";

export default function AboutUsPage() {
  return (
    <Container className="pt-32 flex flex-col gap-y-4 min-h-screen">
      <h3 className="font-bold text-3xl">Run by students, for students</h3>
      <p>
        Studently is a student-run organization that aims to provide students
        with the resources they are entitled to by the government.
      </p>
      <p>
        The concept is simple. We help you receive what you are entitled to and
        you pay only if we succeed.
      </p>
      <h3 className="font-bold text-3xl">Meet the owners</h3>
      <div className="2xl:flex gap-x-4">
        <FounderDisplay
          avatarImage="/kilan-avatar.jpg"
          founderName="Kilan"
          properties={[
            {
              icon: <GraduationCap className="w-6 h-6" />,
              description: "Computer Science, Vrije Universiteit",
            },
            {
              icon: <SquareCheck className="w-6 h-6" />,
              description: "Entitled to €328 / month",
            },
            {
              icon: <TrainFront className="w-6 h-6" />,
              description: "Entitled to free OV transport",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              description: "French / Dutch",
            },
          ]}
        />
        <FounderDisplay
          avatarImage="/alex-avatar.webp"
          founderName="Alex"
          properties={[
            {
              icon: <GraduationCap className="w-6 h-6" />,
              description: "International Business, Vrije Universiteit",
            },
            {
              icon: <SquareCheck className="w-6 h-6" />,
              description: "Entitled to €328 / month",
            },
            {
              icon: <TrainFront className="w-6 h-6" />,
              description: "Entitled to free OV transport",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              description: "Spanish",
            },
          ]}
        />
      </div>
    </Container>
  );
}
