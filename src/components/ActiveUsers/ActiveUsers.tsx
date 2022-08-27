import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useRedux";

type User = {
  user: string;
  id: string;
};

export const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState<User[]>([]);
  const socket = useAppSelector((socket) => socket.socket.socketIo);

  //Listening when users connect and disconnect
  useEffect(() => {
    socket.on("current_users", (data) => {
      setActiveUsers(data);
    });

    socket.on("disconnected_user", (data) => {
      setActiveUsers(data);
    });
  }, [socket]);

  return (
    <div className="active-users-wrapper">
      <p>Active users</p>
      {activeUsers.map((user: User, i: number) => (
        <li key={i}>{user.user}</li>
      ))}
    </div>
  );
};
