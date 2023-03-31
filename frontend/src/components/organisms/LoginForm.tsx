import Button from "@/components/atoms/Button";
import InputWithLabel from "@/components/molecules/InputWithLabel";
import { generateUsername } from "@/utils/generator";
import { useRouter } from "next/router";
import React from "react";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [username, setUsername] = React.useState(generateUsername() || "");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/chat");
    }, 2000);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputWithLabel
        labelName="Username"
        placeholder={"username"}
        value={username}
        onChange={handleUsernameChange}
      />
      <Button type="button" isLoading={isLoading} onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
}
