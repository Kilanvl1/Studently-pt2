import chat from "@/public/chat-circle-text.svg";
import piggy from "@/public/piggy-bank.svg";
import binoculars from "@/public/binoculars.svg";
import rocket from "@/public/rocket.svg";
import { Highlight } from "./highlight";
import { BorderGradient } from "@/components/ui/borderGradient";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const HighlightsSection = () => {
  return (
    <section className="py-8 flex flex-col gap-y-8 2xl:py-24 2xl:items-center max-w-[800px] mx-auto">
      <h1 className="font-bold text-3xl max-w-80">
        We do the hard work, you enjoy the money
      </h1>
      <BorderGradient
        gradientColors="purple"
        borderWidth={1}
        rounded="2xl"
        shouldFitContent={true}
      >
        <Link href="about-us" className={buttonVariants()}>
          Meet the founders
        </Link>
      </BorderGradient>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-6">
        <Highlight
          image={piggy}
          alt="piggy"
          title="Success first, payment later!"
          subTitle="We charge a 10% fee only on benefits you receive, so you have nothing to lose."
        />
        <Highlight
          image={rocket}
          alt="rocket"
          title="Eligibility assessment"
          subTitle="We assess your eligibility for certain government benefits and help you maximize them."
        />
        <Highlight
          image={chat}
          alt="chat"
          title="Handle entire application process"
          subTitle="We handle the entire application process, so you can focus on your studies."
        />
        <Highlight
          image={binoculars}
          alt="binoculars"
          title="Expert guidance and support"
          subTitle="Benefit from our knowledgeable team guiding you through every step."
        />
      </div>
    </section>
  );
};
