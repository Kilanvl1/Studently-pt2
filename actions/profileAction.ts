"use server";

import { db } from "@/db/drizzle";
import { profileSchema } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { Profile } from "@/db/schema";
import { createProfileSchema } from "@/zod-types/profile";

export const addProfile = async (state: any, formData: FormData) => {
  const validatedData = createProfileSchema.safeParse({
    name: formData.get("name") as string,
    phoneNumber: formData.get("phoneNumber") as string,
  });

  if (!validatedData.success) {
    return { errors: validatedData.error.flatten().fieldErrors };
  }

  const newId = (
    await db
      .insert(profileSchema)
      .values(validatedData.data)
      .returning({ id: profileSchema.id })
  )[0].id;

  /* redirect(`/${newId}/questionnaire`); */
};

export const updateProfile = async (
  profileObject: Profile,
  formData: FormData
) => {
  const id = profileObject.id;
  await db
    .update(profileSchema)
    .set(profileObject)
    .where(eq(profileSchema.id, id));
  redirect(`/${id}/results`);
};
