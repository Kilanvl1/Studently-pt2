import {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import info from "@/public/info.svg";

import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Profile } from "@/db/schema";
import { BorderGradient } from "@/components/ui/borderGradient";

export type ProfileContextType = {
  profile: Profile;
  updateProfile: Dispatch<SetStateAction<Profile>>;
};

// null! is a way of telling typescript that the context will never be null
export const ProfileContext = createContext<ProfileContextType>(null!);

type QuestionNodeProps = {
  propertyKey: keyof Profile;
  question: string;
  children?: React.ReactNode;
  provideQuestionInfo?: string[];
};

export const QuestionNode = ({
  propertyKey,
  question,
  children,
  provideQuestionInfo,
}: QuestionNodeProps) => {
  const { profile, updateProfile } = useContext(ProfileContext);

  const [value, setValue] = useState(
    profile[propertyKey] === true
      ? "yes"
      : profile[propertyKey] === false
      ? "no"
      : null
  );
  const nextQuestionRef = useRef<HTMLDivElement>(null);

  const handleSelectChange = (e: string) => {
    const newProfileObject: Profile = { ...profile };

    const questionIds = Object.keys(profile);
    const currentQuestionId = questionIds.indexOf(propertyKey);

    // A property of profile can be a string | number | boolean | null so that's why we cast the result to boolean | null
    for (let i = currentQuestionId + 1; i < questionIds.length; i++) {
      (newProfileObject[questionIds[i] as keyof Profile] as boolean | null) =
        null;
    }

    const valueAsBool = e === "yes" ? true : false;
    setValue(e);
    updateProfile({ ...newProfileObject, [propertyKey]: valueAsBool });
  };

  useEffect(() => {
    nextQuestionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [value]);
  return (
    <div>
      <div className="flex items-center gap-x-2 mb-2">
        <Label htmlFor={propertyKey} className="text-base font-normal">
          {question}
        </Label>
        {provideQuestionInfo && (
          <Popover>
            <PopoverTrigger>
              <Image src={info} alt="info" />
            </PopoverTrigger>
            <PopoverContent>
              <ul className="list-disc px-4">
                {provideQuestionInfo.map((info, index) => (
                  <li key={index} className="mb-2">
                    {info}
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        )}
      </div>
      {children}
      <RadioGroup onValueChange={handleSelectChange}>
        {value === "yes" ? (
          <BorderGradient
            gradientColors="purple"
            borderWidth={0.5}
            rounded="lg"
          >
            <MyRadioGroupItem value="yes" label="Yes" checked />
          </BorderGradient>
        ) : (
          <MyRadioGroupItem value="yes" label="Yes" />
        )}

        {value === "no" ? (
          <BorderGradient
            gradientColors="purple"
            borderWidth={0.5}
            rounded="lg"
          >
            <MyRadioGroupItem value="no" label="No" checked />
          </BorderGradient>
        ) : (
          <MyRadioGroupItem value="no" label="No" />
        )}
      </RadioGroup>
    </div>
  );
};

const MyRadioGroupItem = ({
  value,
  label,
  checked,
}: {
  value: "no" | "yes";
  label: "Yes" | "No";
  checked?: boolean;
}) => {
  return (
    <Label className="flex items-center space-x-4 rounded-lg py-4 px-2 border-[#DEDEDE] border bg-white hover:cursor-pointer">
      <RadioGroupItem value={value} className="font-medium" checked={checked} />
      <p className="font-normal text-base">{label}</p>
    </Label>
  );
};
