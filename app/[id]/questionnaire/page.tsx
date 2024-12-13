import { Container } from "@/components/ui/container";
import { BackButton } from "@/components/ui/backButton";
import { Questionnaire } from "./questionnaire";
import { db } from "@/db/drizzle";
import { profileSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function QuestionnairePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const profile = await db
    .select()
    .from(profileSchema)
    .where(eq(profileSchema.id, parseInt(id)));

  return (
    <Container className="pt-32">
      <BackButton href="/" className="max-w-12 mb-2" />

      <div className="2xl:flex gap-x-20 2xl:justify-between">
        <div className="max-w-96 mb-5">
          <h1 className="font-bold text-3xl mb-5 2xl:text-4xl">
            Answer the following questions
          </h1>
          <p className="opacity-60 font-normal text-sm">
            In order to determine what government benefits you are entitled to,
            we need the following information:
          </p>
        </div>

        <Questionnaire initialProfile={profile[0]} />
      </div>
    </Container>
  );
}
