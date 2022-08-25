import "./rooms.css";
import { Button } from "../Button/Button";
import { chatrooms } from "../../assets/chatrooms";
import { changeRoom } from "../../redux/socketReducer";
import { useAppDispatch } from "../../hooks/useRedux";

export type ChatRoom = {
  name: string;
};

export const Rooms = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="rooms-wrapper">
      {chatrooms &&
        chatrooms.map((chatroom: ChatRoom, i: number) => (
          <Button key={i} onClick={() => dispatch(changeRoom(chatroom.name))}>
            {chatroom.name}
          </Button>
        ))}
    </div>
  );
};
