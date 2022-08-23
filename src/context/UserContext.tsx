import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContextProps = {
  user: string | undefined;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
};

type User = {
  user: string;
};

type ProviderProps = {
  children: ReactNode;
};

const UserContext = createContext({} as UserContextProps);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<string>();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!) as User;
    if (user) {
      setUser(user.user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
