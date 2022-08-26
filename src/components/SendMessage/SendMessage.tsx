import "./sendmessage.css";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { useAppSelector } from "../../hooks/useRedux";
import { Fragment, useState } from "react";

export const SendMessage = () => {
  const [message, setMessage] = useState<string>("");
  const user = useAppSelector((user) => user.user.username);
  const socket = useAppSelector((socket) => socket.socket.socketIo);
  const room = useAppSelector((socket) => socket.socket.currentRoom);
  console.log(user);

  const sendMessage = () => {
    if (message.length > 0) {
      socket.emit("send_message", {
        message: message,
        user: user,
        room: room,
      });
      setMessage("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && sendMessage();
  };

  return (
    <Fragment>
      {room && (
        <div className="send-msg-wrapper">
          <InputField
            value={message}
            onKeyDown={handleSubmit}
            placeholder="Message..."
            onChange={handleChange}
          />
          <Button type="submit" onClick={sendMessage}>
            Send
          </Button>
        </div>
      )}
    </Fragment>
  );
};
