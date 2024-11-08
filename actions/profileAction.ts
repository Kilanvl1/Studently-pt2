"use server";

import { db } from "@/db/drizzle";
import { profile } from "@/db/schema";
import { redirect } from "next/navigation";

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
