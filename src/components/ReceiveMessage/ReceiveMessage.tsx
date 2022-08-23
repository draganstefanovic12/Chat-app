import "./receivemessage.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

type Message = {
  user: string;
  message: string;
};

export const ReceiveMessage = () => {
  const socket = io("http://localhost:3000");
  const [received, setReceived] = useState<any>();

  useEffect(() => {
    console.log("hello");
    socket.on("receive_message", (data) => {
      received ? setReceived([...received, data]) : setReceived([data]);
    });
  }, [received, socket]);

  return (
    <>
      {received &&
        received.map((message: Message) => (
          <div className="msg-wrapper">
            <p>{message.user}</p>
            <p>{message.message}</p>
          </div>
        ))}
    </>
  );
};
