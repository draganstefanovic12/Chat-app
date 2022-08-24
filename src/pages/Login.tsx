import { login } from "../redux/userReducer";
import { Button } from "../components/Button/Button";
import { InputField } from "../components/InputField/InputField";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState<string | null>();
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!);
    user && dispatch(login(user.user));
  }, []);

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
