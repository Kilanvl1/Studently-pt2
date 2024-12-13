import { ResultsOverview } from "./resultsOverview";
import { Container } from "@/components/ui/container";

/* import { BookApointment } from "app/_components/ui/BookApointment";
import { Whatsapp } from "app/_components/ui/Whatsapp";
 */
import { db } from "@/db/drizzle";
import { profileSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  const profile = await db
    .select()
    .from(profileSchema)
    .where(eq(profileSchema.id, params.id));

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:justify-between">
          <ResultsOverview profile={profile[0]} />
          <div className="flex flex-col gap-y-10">
            {/* <BookApointment id={params.id} />
            <Whatsapp /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
