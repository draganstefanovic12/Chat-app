import "./receivemessage.css";
import { Message } from "../../types";
import { useAppSelector } from "../../hooks/useRedux";
import { useEffect, useRef, useState } from "react";
import { SendMessage } from "../SendMessage/SendMessage";

export const ReceiveMessage = () => {
  const [currMsg, setCurrMsg] = useState<Message[]>([]);
  const socket = useAppSelector((socket) => socket.socket.socketIo);

  useEffect(() => {
    //Fetching room content on room change
    socket.on("changed_room", (data) => {
      setCurrMsg(data.content);
    });

    socket.on("receive_message", (data: Message) => {
      setCurrMsg([...currMsg, data]);
      divRef.current!.scrollIntoView({ behavior: "smooth" });
    });
  }, [currMsg, socket]);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {currMsg.map((message: Message, i: number) => (
        <div ref={divRef} key={i} className="msg-receive-wrapper">
          <p>{message.user}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};
