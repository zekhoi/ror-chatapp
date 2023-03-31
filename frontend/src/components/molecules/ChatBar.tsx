import Input from "@/components/atoms/Input";
import React from "react";
import { FiSend } from "react-icons/fi";

type MessageInputProps = {
  text?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ChatBar({
  text = "",
  placeholder = "Send a message...",
  onChange,
  onSubmit,
}: MessageInputProps) {
  return (
    <form
      className="relative flex items-center justify-center w-full border rounded"
      onSubmit={onSubmit}
    >
      <Input
        value={text}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 text-sm bg-white rounded outline-none pr-14 ring-gray-200 ring-1 focus:ring-primary-500"
      />
      <button
        type="submit"
        className="absolute right-0 h-full px-4 text-sm text-white rounded-r bg-primary-500 hover:bg-primary-600"
      >
        <FiSend className="w-5 h-5" />
      </button>
    </form>
  );
}
