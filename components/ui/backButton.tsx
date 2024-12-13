"use client";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { BorderGradient } from "./borderGradient";
export type BackButtonProps = {
  href: string;
  className?: string;
};

export const BackButton = ({ href, className }: BackButtonProps) => {
  return (
    <div className={`${className} w-8 h-8 rounded-full`}>
      <BorderGradient
        gradientColors="purple"
        borderWidth={1}
        rounded="2xl"
        shouldFitContent={true}
      >
        <Link href={href}>
          <div className="w-8 h-8 flex items-center justify-center bg-black">
            <ArrowLeft color="white" className="w-5 h-5" />
          </div>
        </Link>
      </BorderGradient>
    </div>
  );
};
