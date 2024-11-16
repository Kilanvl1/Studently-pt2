"use client";
import { useState } from "react";

import { ButtonChevron } from "@/components/ui/buttonChevron";
import { useRouter } from "next/navigation";
export const SeeResultsButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <ButtonChevron onClick={handleClick} isLoading={isLoading} type="submit">
      See results
    </ButtonChevron>
  );
};
