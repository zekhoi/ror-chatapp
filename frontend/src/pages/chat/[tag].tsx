/* eslint-disable no-console */
import Container from "@/components/atoms/Container";
import ListContainer from "@/components/atoms/ListContainer";
import ChatBar from "@/components/molecules/ChatBar";
import ChatBubble from "@/components/molecules/ChatBubble";
import LoadingScreen from "@/components/organisms/LoadingScreen";
import Navbar from "@/components/organisms/Navbar";
import PrivateLayout from "@/components/templates/PrivateLayout";
import useAuth from "@/hooks/useAuth";
import useWebSocket from "@/hooks/useWebSocket";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

type ChatProps = {
  tag: string;
};

export default function Chat({ tag }: ChatProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  // const messages = useActionCable(tag);
  // const { messages } = useSocket(tag);
  const { user, isLoading } = useAuth();
  const { messages, error, sendMessage } = useWebSocket(user, tag, isLoading);

  const handleChatInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  if (error) {
    router.push("/500");
    return <LoadingScreen />;
  }

  return (
    <PrivateLayout title="Lets Chat!">
      <div className="flex flex-col items-center w-full h-screen min-h-screen py-3">
        <Container>
          <Navbar />
          <ListContainer>
            {messages.length > 0
              ? messages.map(({ message }) => (
                  <ChatBubble
                    isSender={message?.username === user}
                    key={uuid()}
                    username={message?.username}
                  >
                    {message?.content}
                  </ChatBubble>
                ))
              : ""}
          </ListContainer>
          <ChatBar
            text={message}
            placeholder="Send a message..."
            onChange={handleChatInput}
            onSubmit={handleMessageSubmit}
          />
        </Container>
      </div>
    </PrivateLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;
  return {
    props: {
      tag,
    },
  };
};
