"use client";

import { addProfile } from "@/actions/profileAction";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useActionState } from "react";
import { SubmitButton } from "./ui/submitButton";
import { createProfileSchema, CreateProfileType } from "@/zod-types/profile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage } from "./ui/formErrorMessage";

export const ProfileForm = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
  } = useForm<CreateProfileType>({
    resolver: zodResolver(createProfileSchema),
    mode: "onBlur",
  });
  const [state, addProfileAction] = useActionState(addProfile, undefined);

  return (
    <>
      {state?.errors && <FormErrorMessage message={state.errors.name?.[0]} />}
      <form action={addProfileAction} className="[&>*]:mb-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John" {...register("name")} />
          <FormErrorMessage message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            placeholder="+31 648440764"
            type="tel"
            {...register("phoneNumber")}
          />
          <FormErrorMessage message={errors.phoneNumber?.message} />
        </div>
        <SubmitButton disabled={!isValid || !isDirty} />
      </form>
    </>
  );
};
