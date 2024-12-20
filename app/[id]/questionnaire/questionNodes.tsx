import { QuestionNode } from "./questionNode";

import { LeafNode } from "../../../components/ui/leafNode";
import check from "@/public/check.svg";

import Image from "next/image";
export const questionNodes = {
  studentNode: () => {
    const key = "isStudent";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you a full time student?"
        provideQuestionInfo={[
          "HBO or university: bachelor, master or associate degree",
          "MBO: vocational training pathway",
        ]}
      />
    );
  },
  notAStudentNode: () => {
    return (
      <LeafNode
        info={
          "You don't qualify for the student benefits, as it's specifically designed to support students pursuing full-time studies at Dutch educational institutions."
        }
        bgColor="red"
        icon="x"
        prompt="Oops..."
      />
    );
  },
  DutchNationalityNode: () => {
    const key = "isDutch";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you from the Netherlands?"
        provideQuestionInfo={[
          "You have a Dutch passport or,",
          "You are a Dutch citizen",
        ]}
      />
    );
  },
  LivingAwayFromHomeNode: () => {
    const key = "isLivingAtHome";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you live with your parents?"
        provideQuestionInfo={[
          "You are living away from your parents if you are registered with the municipality at a different address than your parent(s).",
        ]}
      />
    );
  },
  EUPassportNode: () => {
    const key = "isEU";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have an EU passport?"
      />
    );
  },
  notEUNode: () => {
    return (
      <LeafNode
        info={
          "Unfortunately all student benefits are only for EU passport holders."
        }
        bgColor="red"
        icon="x"
        prompt="Oops..."
      />
    );
  },
  requirementsNode: (age: number) => {
    const key = "isEligible";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you meet one of the two following requirements?"
      >
        <div className="mb-4">
          <div className="items-center flex mb-2 gap-x-3">
            <Image src={check} alt="check" />
            <p>Lived in the Netherlands at least 5 years.</p>
          </div>
          <div className=" items-center flex gap-x-3">
            <Image src={check} alt="check" />
            {age >= 21 ? (
              <p>You work at least 32 hours a month.</p>
            ) : (
              <p>You earn a minimum of 155€ a month</p>
            )}
          </div>
        </div>
      </QuestionNode>
    );
  },
  insuranceNode: () => {
    const key = "isInsured";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have a Dutch health insurance?"
        provideQuestionInfo={[
          "Everyone who lives or works in the Netherlands, is required by law to have a Dutch health insurance.",
        ]}
      />
    );
  },
  insuranceBenefitNode: () => {
    const key = "hasInsuranceBenefit";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you receiving a health insurance benefit?"
        provideQuestionInfo={[
          "A health insurance benefit means that you are receiving money from the government to help pay for your health insurance.",
        ]}
      />
    );
  },
  workNode: () => {
    const key = "isWorking";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have a job in the Netherlands?"
      />
    );
  },
};
