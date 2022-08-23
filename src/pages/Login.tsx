import { Button } from "../components/Button/Button";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { InputField } from "../components/InputField/InputField";

export const Login = () => {
  const [username, setUsername] = useState<string | null>();
  const [error, setError] = useState<boolean>(false);
  const { setUser } = useUser();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setError(false);
  };

  const handleClick = () => {
    username ? setUser(username) : setError(true);
    localStorage.setItem("ChatUser", JSON.stringify({ user: username }));
  };

  return (
    <div className="login-wrapper">
      <InputField onChange={handleUsername} label="Username" />
      <Button onClick={handleClick}>Submit</Button>
      {error && <p>Username can't be empty.</p>}
    </div>
  );
};
