import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BorderGradientProps {
  children: ReactNode;
  borderWidth?: number;
  className?: string;
  gradientColors: "purple" | "green";
  rounded?: boolean;
  disabled?: boolean;
}

export const BorderGradient = ({
  children,
  borderWidth = 2,
  className = "",
  gradientColors,
  rounded = true,
  disabled = false,
}: BorderGradientProps) => {
  const gradientCss =
    gradientColors === "purple"
      ? "from-borderGradient-purple-start to-borderGradient-purple-end"
      : "from-borderGradient-green-start to-borderGradient-green-end";
  return (
    <div className="relative group w-fit" style={{ padding: borderWidth }}>
      {/* Gradient border container */}
      <div
        className={`
          absolute 
          inset-0 
          bg-gradient-to-r 
          ${gradientCss}
          ${rounded ? "rounded-2xl" : ""}
          ${disabled ? "opacity-60" : ""}
        `}
      />

      {/* Content container */}
      <div
        className={`
          relative 
          z-10
          overflow-hidden
          ${rounded ? "rounded-2xl" : ""}
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
