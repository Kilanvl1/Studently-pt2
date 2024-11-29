"use server";

import { db } from "@/db/drizzle";
import { profile } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { NewProfile, Profile } from "@/db/schema";
import { CreateProfileType, createProfileSchema } from "@/zod-types/profile";

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
      .insert(profile)
      .values(validatedData.data)
      .returning({ id: profile.id })
  )[0].id;

  redirect(`/${newId}/questionnaire`);
};

export const updateProfile = async (id: number, updatedProfile: Profile) => {
  await db.update(profile).set(updatedProfile).where(eq(profile.id, id));
  redirect(`/${id}/results`);
};
