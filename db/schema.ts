import { integer, text, boolean, pgTable, serial } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const profile = pgTable("profile", {
  id: serial("id").primaryKey().unique(),
  name: text("name").notNull(),
  age: integer("age"),
  phoneNumber: text("phone_number").notNull(),
  hasBookedMeeting: boolean("has_booked_meeting").default(sql`NULL`),
  isStudent: boolean("is_student").default(sql`NULL`),
  isDutch: boolean("is_dutch").default(sql`NULL`),
  isEU: boolean("is_eu").default(sql`NULL`),
  isEligible: boolean("is_eligible").default(sql`NULL`),
  isInsured: boolean("is_insured").default(sql`NULL`),
  hasInsuranceBenefit: boolean("has_insurance_benefit").default(sql`NULL`),
  isWorking: boolean("is_working").default(sql`NULL`),
  isLivingAtHome: boolean("is_living_at_home").default(sql`NULL`),
});

export type Profile = InferSelectModel<typeof profile>;
export type NewProfile = InferInsertModel<typeof profile>;
