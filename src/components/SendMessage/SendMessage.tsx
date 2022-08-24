import "./sendmessage.css";
import { send } from "../../redux/socketReducer";
import { Button } from "../Button/Button";
import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useRedux";

export const SendMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");
  const user = useAppSelector((user) => user.user.username);
  const room = useAppSelector((socket) => socket.socket.currentRoom);

  const sendMessage = () => {
    dispatch(send({ message: message, user: user, room: room }));
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
