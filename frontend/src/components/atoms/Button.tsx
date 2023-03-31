import clsx from "clsx";
import React from "react";

type ButtonProps = {
  isLoading?: boolean;
  variant?: "primary" | "danger";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isLoading = false,
  variant = "primary",
  className = "px-4 py-2.5 text-sm rounded text-center text-white font-bold",
  children,
  ...rest
}: ButtonProps) {
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700",
    danger: "bg-red-500 hover:bg-red-600 active:bg-red-700",
  };

  return (
    <button className={clsx(className, variants[variant])} {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
