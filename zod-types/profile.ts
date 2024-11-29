import { z } from "zod";

export const createProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .min(8, "Phone number is required and must be at least 8 digits"),
});

export type CreateProfileType = z.infer<typeof createProfileSchema>;
