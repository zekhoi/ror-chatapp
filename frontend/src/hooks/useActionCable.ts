// import { createConsumer } from "actioncable";
import cable from "@/libs/cable";
import { useEffect, useState } from "react";

type Message = {
  type: string;
  data: string;
};

const useActionCable = (channelTag: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // eslint-disable-next-line no-undef
  const [consumer, setConsumer] = useState<ActionCable.Cable | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const newConsumer = createConsumer(
      //   process.env.NEXT_PUBLIC_ACTION_CABLE_URL || "ws://localhost:3000/cable"
      // );
      const newConsumer = cable;
      setConsumer(newConsumer);
      return () => {
        newConsumer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (!consumer) return;
    const subscription = consumer.subscriptions.create(
      { channel: `chatroom_${channelTag}` },
      {
        connected: () => {
          console.log("Connected to actioncable server");
        },
        disconnected: () => {
          console.log("Disconnected from actioncable server");
        },
        received: (message: Message) => {
          setMessages([...messages, message] as Message[]);
        },
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [consumer]);

  return messages;
};

export default useActionCable;
