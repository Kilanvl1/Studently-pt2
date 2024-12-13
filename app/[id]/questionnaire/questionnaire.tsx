"use client";

import { useState } from "react";

import { UserContext, UserContextType } from "./questionNode";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import { LeafNode } from "../../../components/ui/leafNode";
import { SeeResultsButton } from "./seeResultsButton";

import { updateProfile } from "@/actions/profileAction";

import { ConditionalQuestion } from "./conditionalQuestion";
import { questionNodes } from "./questionNodes";

import { Profile } from "@/db/schema";
import { SubmitButton } from "@/components/ui/submitButton";

export const Questionnaire = ({ profile }: { profile: Profile }) => {
  const [user, setUser] = useState(profile);
  const updateProfileActionWithUser = updateProfile.bind(null, user);

  const contextValue: UserContextType = { user, updateUser: setUser };
  const ageAsNumber = user.age ?? 0;
  console.log(user);
  return (
    <form
      className="flex flex-col gap-y-8 2xl:flex-1 min-h-[80vh] max-w-[32rem]"
      action={updateProfileActionWithUser}
    >
      <InputWithLabel
        placeholder="Type your age..."
        label="Your age"
        type="number"
        value={ageAsNumber || ""}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, age: parseInt(e.target.value) }))
        }
      />

      {ageAsNumber > 0 && ageAsNumber <= 32 ? (
        <UserContext.Provider value={contextValue}>
          {questionNodes.studentNode()}
          <ConditionalQuestion
            condition={user.isStudent}
            trueComponent={questionNodes.DutchNationalityNode()}
            falseComponent={questionNodes.notAStudentNode()}
          />
          <ConditionalQuestion
            condition={user.isDutch}
            trueComponent={questionNodes.LivingAwayFromHomeNode()}
            falseComponent={questionNodes.EUPassportNode()}
          />
          <ConditionalQuestion
            condition={user.isLivingAtHome}
            trueComponent={<SubmitButton />}
            falseComponent={<SubmitButton />}
          />
          <ConditionalQuestion
            condition={user.isEU}
            trueComponent={questionNodes.requirementsNode(ageAsNumber)}
            falseComponent={questionNodes.notEUNode()}
          />
          <ConditionalQuestion
            condition={user.isEligible}
            trueComponent={questionNodes.insuranceNode()}
            falseComponent={questionNodes.insuranceNode()}
          />
          <ConditionalQuestion
            condition={user.isInsured}
            trueComponent={questionNodes.insuranceBenefitNode()}
            falseComponent={questionNodes.workNode()}
          />
          <ConditionalQuestion
            condition={user.hasInsuranceBenefit}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
          <ConditionalQuestion
            condition={user.isWorking}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
        </UserContext.Provider>
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
