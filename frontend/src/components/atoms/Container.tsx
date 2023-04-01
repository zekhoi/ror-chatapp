import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col flex-1 w-full max-w-screen-xl px-4 overflow-y-hidden gap-y-3">
      {children}
    </div>
  );
}
