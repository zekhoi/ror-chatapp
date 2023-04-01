// import LoginForm from "@/components/organisms/LoginForm";
import Button from "@/components/atoms/Button";
import InputWithLabel from "@/components/molecules/InputWithLabel";
import PublicLayout from "@/components/templates/PublicLayout";
import { useAuth } from "@/hooks";
import { generateUsername } from "@/utils/generator";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

export default function Login() {
  const { isLoading, user, login } = useAuth();
  const [username, setUsername] = useState(user || generateUsername() || "");
  const [channelTag, setChannelTag] = useState("simpul");

  const router = useRouter();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    login(username, channelTag);
    router.push(`/chat/${channelTag}`);
  };

  return (
    <PublicLayout title="Login">
      <div className="flex items-center justify-center w-full min-h-screen">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputWithLabel
            labelName="Username"
            placeholder={"username"}
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <InputWithLabel
            labelName="Channel"
            placeholder={"channel"}
            value={channelTag}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChannelTag(e.target.value)
            }
          />
          <Button type="button" isLoading={isLoading} onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
    </PublicLayout>
  );
}
