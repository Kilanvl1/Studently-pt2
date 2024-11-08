CREATE TABLE IF NOT EXISTS "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer,
	"phone_number" text NOT NULL,
	"has_booked_meeting" boolean DEFAULT false,
	"is_student" boolean DEFAULT false,
	"is_dutch" boolean DEFAULT false,
	"is_eu" boolean DEFAULT false,
	"is_eligible" boolean DEFAULT false,
	"is_insured" boolean DEFAULT false,
	"has_insurance_benefit" boolean DEFAULT false,
	"is_working" boolean DEFAULT false,
	"is_living_at_home" boolean DEFAULT false,
	CONSTRAINT "profile_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
