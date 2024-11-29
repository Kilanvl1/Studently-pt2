import { BorderGradient } from "./borderGradient";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = {
  disabled?: boolean;
};

export const SubmitButton = ({ disabled }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <BorderGradient gradientColors="purple" borderWidth={1} disabled={disabled}>
      <Button type="submit" disabled={pending || disabled}>
        {pending ? "Submitting..." : "Submit"}
      </Button>
    </BorderGradient>
  );
};
