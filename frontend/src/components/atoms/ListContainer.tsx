import React from "react";

type ListContainerProps = {
  children: React.ReactNode;
};

export default function ListContainer({ children }: ListContainerProps) {
  return (
    <div className="flex flex-col flex-1 w-full py-1 overflow-y-auto gap-y-6">
      {children}
    </div>
  );
}
