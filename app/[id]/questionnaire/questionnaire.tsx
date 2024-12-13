"use client";

import { useState } from "react";

import { ProfileContext, ProfileContextType } from "./questionNode";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { LeafNode } from "../../../components/ui/leafNode";
import { SeeResultsButton } from "./seeResultsButton";

import { updateProfile } from "@/actions/profileAction";

import { ConditionalQuestion } from "./conditionalQuestion";
import { questionNodes } from "./questionNodes";

import { Profile } from "@/db/schema";
import { SubmitButton } from "@/components/ui/submitButton";

export const Questionnaire = ({
  initialProfile,
}: {
  initialProfile: Profile;
}) => {
  const [profile, setProfile] = useState(initialProfile);
  const updateProfileAction = updateProfile.bind(null, profile);

  const contextValue: ProfileContextType = {
    profile,
    updateProfile: setProfile,
  };
  const ageAsNumber = profile.age ?? 0;

  return (
    <form
      className="flex flex-col gap-y-8 2xl:flex-1 min-h-[80vh] max-w-[32rem]"
      action={updateProfileAction}
    >
      <InputWithLabel
        placeholder="Type your age..."
        label="Your age"
        type="number"
        value={ageAsNumber || ""}
        onChange={(e) =>
          setProfile((prev) => ({ ...prev, age: parseInt(e.target.value) }))
        }
      />

      {ageAsNumber > 0 && ageAsNumber <= 32 ? (
        <ProfileContext.Provider value={contextValue}>
          {questionNodes.studentNode()}
          <ConditionalQuestion
            condition={profile.isStudent}
            trueComponent={questionNodes.DutchNationalityNode()}
            falseComponent={questionNodes.notAStudentNode()}
          />
          <ConditionalQuestion
            condition={profile.isDutch}
            trueComponent={questionNodes.LivingAwayFromHomeNode()}
            falseComponent={questionNodes.EUPassportNode()}
          />
          <ConditionalQuestion
            condition={profile.isLivingAtHome}
            trueComponent={<SubmitButton />}
            falseComponent={<SubmitButton />}
          />
          <ConditionalQuestion
            condition={profile.isEU}
            trueComponent={questionNodes.requirementsNode(ageAsNumber)}
            falseComponent={questionNodes.notEUNode()}
          />
          <ConditionalQuestion
            condition={profile.isEligible}
            trueComponent={questionNodes.insuranceNode()}
            falseComponent={questionNodes.insuranceNode()}
          />
          <ConditionalQuestion
            condition={profile.isInsured}
            trueComponent={questionNodes.insuranceBenefitNode()}
            falseComponent={questionNodes.workNode()}
          />
          <ConditionalQuestion
            condition={profile.hasInsuranceBenefit}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
          <ConditionalQuestion
            condition={profile.isWorking}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
        </ProfileContext.Provider>
      ) : ageAsNumber > 32 ? (
        <LeafNode
          bgColor="red"
          prompt="Oops..."
          info="In order to qualify for student benefits, you need to meet certain age requirements. Unfortunately, if you are above the age of 32, you are not eligible for student finance under the current regulations."
          icon="x"
        />
      ) : null}
    </form>
  );
};
