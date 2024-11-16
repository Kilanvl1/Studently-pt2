export type Profile = {
  id: number;
  name: string;
  age: number | null;
  phoneNumber: string;
  hasBookedMeeting: boolean | null;
  isStudent: boolean | null;
  isDutch: boolean | null;
  isEU: boolean | null;
  isEligible: boolean | null;
  isInsured: boolean | null;
  hasInsuranceBenefit: boolean | null;
  isWorking: boolean | null;
  isLivingAtHome: boolean | null;
};
