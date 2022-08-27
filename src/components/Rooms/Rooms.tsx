import "./rooms.css";
import { Button } from "../Button/Button";
import { useEffect } from "react";
import { chatrooms } from "../../assets/chatrooms";
import { changeRoom } from "../../redux/socketReducer";
import { ActiveUsers } from "../ActiveUsers/ActiveUsers";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

export type ChatRoom = {
  name: string;
};

type RoomsProps = {
  handleLogin: () => void;
};

export const Rooms = ({ handleLogin }: RoomsProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.username);
  const room = useAppSelector((state) => state.socket.currentRoom);

  //In case chatroom is minimized and reopened it will fetch the last opened room
  useEffect(() => {
    room && dispatch(changeRoom(room));
  }, [dispatch, room]);

  return (
    <div className="rooms-wrapper">
      {chatrooms.map((chatroom: ChatRoom, i: number) => (
        <Button key={i} onClick={() => dispatch(changeRoom(chatroom.name))}>
          {chatroom.name}
        </Button>
      ))}
      {!user && (
        <Button className="log-in-btn" onClick={handleLogin}>
          Log in
        </Button>
      )}
      <ActiveUsers />
    </div>
  );
};
