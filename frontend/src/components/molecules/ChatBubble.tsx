import clsx from "clsx";
import React from "react";

type ChatBubbleProps = {
  username: string;
  isSender?: boolean;
  children: React.ReactNode;
};

export default function ChatBubble({
  username,
  isSender,
  children,
}: ChatBubbleProps) {
  const position = isSender ? "flex-row-reverse" : "flex-row";

  return (
    <div className={clsx("flex flex-row items-center gap-3", position)}>
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary-500">
        <span className="font-bold text-white">
          {username[0].toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col space-y-1">
        <span className={clsx("text-xs", isSender && "ml-auto")}>
          {username}
        </span>
        <p className="max-w-3xl px-4 py-2 text-xs whitespace-normal bg-white rounded-md shadow md:text-sm">
          {children}
        </p>
      </div>
    </div>
  );
}
