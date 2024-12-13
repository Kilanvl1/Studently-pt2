import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BorderGradientProps {
  children: ReactNode;
  borderWidth: number;
  className?: string;
  gradientColors: "purple" | "green";
  rounded?: "md" | "lg" | "xl" | "2xl";
  disabled?: boolean;
  shouldFitContent?: boolean;
}

export const BorderGradient = ({
  children,
  borderWidth,
  className = "",
  gradientColors,
  rounded,
  disabled = false,
  shouldFitContent = false,
}: BorderGradientProps) => {
  const gradientCss =
    gradientColors === "purple"
      ? "from-borderGradient-purple-start to-borderGradient-purple-end"
      : "from-borderGradient-green-start to-borderGradient-green-end";

  const roundedCss = rounded ? `rounded-${rounded}` : "";

  return (
    <div
      className={cn("relative group", shouldFitContent ? "w-fit" : "")}
      style={{ padding: borderWidth }}
    >
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          gradientCss,
          roundedCss,
          disabled ? "opacity-60" : ""
        )}
      />

      {/* Content container */}
      <div
        className={`
          relative 
          z-10
          overflow-hidden
          ${roundedCss}
          ${className}
        `}
        style={{
          margin: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
};
