import { io } from "socket.io-client";
import { SendMessage } from "../components/SendMessage/SendMessage";
import { ReceiveMessage } from "../components/ReceiveMessage/ReceiveMessage";

export const MainPage = () => {
  const socket = io("http://localhost:3000");
  return (
    <div className="main-wrapper">
      <ReceiveMessage />
      <SendMessage socket={socket} />
    </div>
  );
};
