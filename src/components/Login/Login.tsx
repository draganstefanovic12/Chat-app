import "./login.css";
import { login } from "../../redux/userReducer";
import { Button } from "../Button/Button";
import { useState } from "react";
import { InputField } from "../InputField/InputField";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

type LoginProps = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Login = ({ setClose }: LoginProps) => {
  const [username, setUsername] = useState<string>("");
  const socket = useAppSelector((socket) => socket.socket.socketIo);
  const dispatch = useAppDispatch();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = () => {
    //Regex for usernames 10chars long and alphanumeric+ _ and . only
    const regex = new RegExp(/^[a-z0-9_.]+$/);
    const valid = regex.test(username);
    if (!valid) return;
    dispatch(login(username));
    socket.emit("user_name", { user: username });
    setClose(false);
  };

  const handleClickClose = () => {
    setClose(false);
  };

  return (
    <>
      <div className="title-bar small-bar">
        <p>Username</p>
        <Button onClick={handleClickClose} className="small-icon-btn">
          X
        </Button>
      </div>
      <div className="login-wrapper">
        <InputField onChange={handleUsername} />
        <Button onClick={handleClick}>Submit</Button>
      </div>
    </>
  );
};
