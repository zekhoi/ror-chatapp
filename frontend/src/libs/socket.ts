import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3000", {
  transports: ["websocket"],
  upgrade: true,
  reconnection: true,
  path: "/cable",
});

export default socket;
