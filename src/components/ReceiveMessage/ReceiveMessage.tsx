import "./receivemessage.css";
import { Message } from "../../types";
import { useAppSelector } from "../../hooks/useRedux";
import { useEffect, useRef, useState } from "react";

export const ReceiveMessage = () => {
  const [currMsg, setCurrMsg] = useState<Message[]>([]);
  const socket = useAppSelector((socket) => socket.socket.socketIo);
  console.log(currMsg);

  useEffect(() => {
    //Fetching room content on room change
    socket.on("changed_room", (data) => {
      setCurrMsg(data.content);
    });

    socket.on("receive_message", (data: Message) => {
      setCurrMsg([...currMsg, data]);
    });

    divRef.current?.scrollIntoView();
  }, [currMsg, socket]);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="msg-receive-wrapper">
      {currMsg.map((message: Message, i: number) => (
        <div ref={divRef} key={i} className="msg-receive">
          <p>{message.user}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};
