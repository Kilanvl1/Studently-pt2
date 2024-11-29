"use client";

import { BorderGradient } from "@/components/ui/borderGradient";
import { ButtonChevron } from "@/components/ui/buttonChevron";

function scrollToProfileSection() {
  const profileSection = document.getElementById("profile-section");
  profileSection?.scrollIntoView({ behavior: "smooth" });
}

export const CtaButton = () => {
  return (
    <BorderGradient gradientColors="purple" borderWidth={1}>
      <ButtonChevron onClick={scrollToProfileSection}>
        Unlock my benefits
      </ButtonChevron>
    </BorderGradient>
  );
};
