import { useState } from "react";

export default function useMessage() {
  const [message, setMessage] = useState<string>("");

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value as string);
  };

  return { message, handleChangeMessage };
}
