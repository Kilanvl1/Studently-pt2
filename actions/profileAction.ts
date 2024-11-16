"use server";

import { db } from "@/db/drizzle";
import { profile } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { Profile } from "@/types/profile";

export const addProfile = async (state: any, formData: FormData) => {
  const name = formData.get("name") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const newId = await db
    .insert(profile)
    .values({
      name: name,
      phoneNumber: phoneNumber,
    })
    .returning({ id: profile.id });

  redirect(`/${newId[0].id}/questionnaire`);
};

export const updateProfile = async (id: number, updatedProfile: Profile) => {
  await db.update(profile).set(updatedProfile).where(eq(profile.id, id));
  redirect(`/${id}/results`);
};
