import "./chatroom.css";
import { Rooms } from "../Rooms/Rooms";
import { Button } from "../Button/Button";
import { SendMessage } from "../SendMessage/SendMessage";
import { ReceiveMessage } from "../ReceiveMessage/ReceiveMessage";
import { handleClose, handleMinimize } from "../../redux/chatroomIconReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

export const Chatroom = () => {
  const user = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();

  const handleClickClose = () => {
    dispatch(handleClose(true));
  };

  const handleClickMinimize = () => {
    dispatch(handleMinimize(true));
  };

  return (
    <div className="main-chatroom-cont">
      <div className="title-bar">
        <p>Chat</p>
        <div>
          <Button onClick={handleClickMinimize} className="small-icon-btn">
            _
          </Button>
          <Button onClick={handleClickClose} className="small-icon-btn">
            X
          </Button>
        </div>
      </div>
      <div className="rooms-msg-cont">
        <div className="rooms-wrapper">
          <Rooms />
        </div>
        <div className="msg-wrapper">
          <ReceiveMessage />
        </div>
      </div>
      <SendMessage />
    </div>
  );
};
