/* eslint-disable no-console */
import { useEffect, useState } from "react";

type Data = {
  message: Message;
};

type Message = {
  content: string;
  username: string;
};

const useWebSocket = (username: string, tag: string, isLoading: boolean) => {
  const [error, setError] = useState<boolean>(false);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Data[]>([]);
  const channel = {
    channel: "ChatroomChannel",
    tag: tag,
    username: username,
  };

  useEffect(() => {
    if (!username || !tag || isLoading) return;
    const socket = new WebSocket(
      process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3000/cable"
    );

    socket.onopen = () => {
      // console.log("Connected to WebSocket server");
      socket.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify(channel),
        })
      );
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (
        message.type === "ping" ||
        message.type === "confirm_subscription" ||
        message.type === "welcome"
      ) {
        return;
      }
      // console.log("Message from WebSocket server: ", message);
      setMessages((messages) => [...messages, message]);
    };

    socket.onclose = () => {
      // console.log("Disconnected from WebSocket server");
    };

    socket.onerror = () => {
      // console.log("WebSocket error: ", error);
      setError(true);
    };

    setWebSocket(socket);

    return () => {
      socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, tag, username]);

  const sendMessage = (message: string) => {
    const data = { content: message, username: username };
    if (webSocket) {
      webSocket.send(
        JSON.stringify({
          command: "message",
          identifier: JSON.stringify(channel),
          data: JSON.stringify(data),
        })
      );
    }
  };

  return { messages, error, sendMessage };
};

export default useWebSocket;
