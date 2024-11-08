"use client";

import { addProfile } from "@/actions/profileAction";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useActionState } from "react";
import { Button } from "./ui/button";

export const ProfileForm = () => {
  const [state, addProfileAction] = useActionState(addProfile, undefined);

  return (
    <form action={addProfileAction}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" placeholder="John" />
      <Label htmlFor="phoneNumber">Phone Number</Label>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+31 648440764"
        type="tel"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
