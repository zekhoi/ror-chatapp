/* eslint-disable no-console */
import socket from "@/libs/socket";
import { useEffect, useState } from "react";
// import api from "@/libs/api";

type Message = {
  type: string;
  data: string;
};

const useSocket = (channelTag: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    console.log("Connecting to socket server");
    socket.on("connect", () => {
      console.log("Connected to socket server");
      socket.emit("subscribe", { tag: channelTag });
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    socket.on("message", (message: Message) => {
      setMessages([...messages, message] as Message[]);
    });

    socket.on("connect_error", (error) => {
      console.log("Error connecting to socket server", error.message);
    });

    return () => {
      socket.emit("leave", { channelTag });
      socket.off("message");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelTag]);

  const sendMessage = (message: string) => {
    socket.emit("message", {
      username: "test",
      tag: channelTag,
      content: message,
    });
  };

  return { messages, sendMessage };
};

export default useSocket;
