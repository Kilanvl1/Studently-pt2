import { integer, text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

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
  hasBookedMeeting: boolean("has_booked_meeting").default(false),
  isStudent: boolean("is_student").default(false),
  isDutch: boolean("is_dutch").default(false),
  isEU: boolean("is_eu").default(false),
  isEligible: boolean("is_eligible").default(false),
  isInsured: boolean("is_insured").default(false),
  hasInsuranceBenefit: boolean("has_insurance_benefit").default(false),
  isWorking: boolean("is_working").default(false),
  isLivingAtHome: boolean("is_living_at_home").default(false),
});
