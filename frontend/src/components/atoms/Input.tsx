import React from "react";

type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "px-4 py-2.5 text-sm bg-white rounded outline-none peer pr-14 ring-gray-200 ring-1 focus:ring-primary-500 text-gray-800",
  ...rest
}: InputProps) {
  return <input className={className} {...rest} />;
}
