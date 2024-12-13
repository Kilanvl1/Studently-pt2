"use client";
import { useState } from "react";

import { ButtonChevron } from "@/components/ui/buttonChevron";
import { useRouter } from "next/navigation";
import { BorderGradient } from "@/components/ui/borderGradient";
export const SeeResultsButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <BorderGradient
      gradientColors="purple"
      borderWidth={0.5}
      rounded="2xl"
      shouldFitContent={true}
    >
      <ButtonChevron onClick={handleClick} isLoading={isLoading} type="submit">
        See results
      </ButtonChevron>
    </BorderGradient>
  );
};
