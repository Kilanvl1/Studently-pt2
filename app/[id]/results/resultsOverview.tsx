import Image from "next/image";
import checkmark from "@/public/checked-circle.svg";
import coin from "@/public/coin.svg";
import bus from "@/public/bus.svg";
import { BorderGradient } from "@/components/ui/borderGradient";
import { LeafNode } from "@/components/ui/leafNode";
import { Profile } from "@/db/schema";
import { BackButton } from "@/components/ui/backButton";
import { NotEligible } from "./notEligible";

type ResultsOverviewProps = {
  profile: Profile;
};

function calculateBenefitAmount(profile: Profile) {
  if (profile.isDutch) {
    return profile.isLivingAtHome ? "1,455.96" : "3,628.68";
  } else {
    return profile.hasInsuranceBenefit ? "3,628.68" : "5,104.68";
  }
}

export const ResultsOverview = ({ profile }: ResultsOverviewProps) => {
  const benefitAmount = calculateBenefitAmount(profile);
  const isAtRiskOfInsuranceFine = profile.isWorking && !profile.isInsured;
  return (
    <div className="flex flex-col gap-y-5 pt-14 max-w-[550px]">
      <BackButton href={`/${profile.id}/questionnaire`} className="max-w-12" />
      <div className="flex gap-x-2 items-center">
        <Image src={checkmark} alt="checkmar" />
        <h1 className="font-bold text-2xl 2xl:text-4xl">
          Good news, {profile.name}!
        </h1>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-normal">You are entitled to:</p>
        <BorderGradient rounded="md" borderWidth={1} gradientColors="purple">
          <div className="bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-9 px-7 rounded-md flex flex-col gap-y-4">
            <div className="flex items-start gap-x-4">
              <Image src={coin} alt="coin" className="pt-[6px]" />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-xl">{benefitAmount}/Year</h1>
                <p className="text-sm">
                  Benefits are paid out monthly to your bank account by DUO.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3/5 "></div>
            <div className="flex items-start gap-x-4">
              <Image src={bus} alt="bus" className="pt-[6px]" />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-xl">Free public transport</h1>
                <p className="text-sm">On either weekdays or weekends</p>
              </div>
            </div>
          </div>
        </BorderGradient>
        {isAtRiskOfInsuranceFine && (
          <LeafNode
            bgColor="red"
            icon={checkmark}
            prompt="Caution!"
            info="You are at risk of paying a 500€ insurance fine!"
          />
        )}
        {profile.isEligible === false && <NotEligible />}
      </div>
    </div>
  );
};
