import Input from "@/components/atoms/Input";
import React from "react";

type InputWithLabelProps = {
  labelName: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputWithLabel({
  labelName,
  ...rest
}: InputWithLabelProps) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-gray-800">
        {labelName}
      </label>
      <Input id={labelName} {...rest} />
    </div>
  );
}
