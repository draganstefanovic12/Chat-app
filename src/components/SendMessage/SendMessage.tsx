import "./sendmessage.css";
import { Button } from "../Button/Button";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import { SocketIo } from "../../types";
import { InputField } from "../InputField/InputField";

export const SendMessage = ({ socket }: SocketIo) => {
  const { user } = useUser();
  const [message, setMessage] = useState<string>();

  const sendMessage = () => {
    socket.emit("send_message", { message: message, user: user });
    setMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && sendMessage();
  };

  return (
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
  );
};
