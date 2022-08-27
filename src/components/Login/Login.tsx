import "./login.css";
import { login } from "../../redux/userReducer";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

export const Login = () => {
  const [username, setUsername] = useState<string | null>();
  const [error, setError] = useState<boolean>(false);
  const socket = useAppSelector((socket) => socket.socket.socketIo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!);
    user && dispatch(login(user.user));
    socket.emit("user_name", user);
  }, [dispatch, socket]);

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setError(false);
  };

  const handleClick = () => {
    username ? dispatch(login(username)) : setError(true);
  };

  return (
    <div className="login-wrapper">
      <InputField onChange={handleUsername} label="Username" />
      <Button onClick={handleClick}>Submit</Button>
      {error && <p>Username can't be empty.</p>}
    </div>
  );
};
