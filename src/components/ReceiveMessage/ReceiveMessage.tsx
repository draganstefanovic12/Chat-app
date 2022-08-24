import "./receivemessage.css";
import { useAppSelector } from "../../hooks/useRedux";
import { useEffect, useState } from "react";

type Message = {
  user: string;
  message: string;
};

export const ReceiveMessage = () => {
  const [received, setReceived] = useState<Message[]>([]);
  const socket = useAppSelector((socket) => socket.socket.socketIo);

  useEffect(() => {
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
