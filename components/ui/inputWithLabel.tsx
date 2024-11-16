import { Input, InputProps } from "./input";
import { Label } from "./label";

type InputWithLabelProps = InputProps & {
  label: string;
};

export function InputWithLabel({ label, ...props }: InputWithLabelProps) {
  return (
    <div className={`grid w-full items-center gap-1.5 my-5 ${props.className}`}>
      <Label htmlFor={props.id} className="font-normal text-base">
        {label}
      </Label>
      <Input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
    </div>
  );
}
