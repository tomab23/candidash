
import { Input } from "../ui/input";
import type { ReactNode } from "react";
import { Label } from "../ui/label";

type Props = {
  name: string;
  value?: string;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classname?: string
  placeholder? : string
  label: string
};
const InputCandidature = ({ children, name, value, onChange, classname, placeholder, label }: Props) => {

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="">
        {label}
      </Label>
      {!children ? (
        <Input
          className={classname}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default InputCandidature;
