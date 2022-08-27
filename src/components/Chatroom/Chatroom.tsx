import "./chatroom.css";
import { Rooms } from "../Rooms/Rooms";
import { Login } from "../Login/Login";
import { Button } from "../Button/Button";
import { SendMessage } from "../SendMessage/SendMessage";
import { ReceiveMessage } from "../ReceiveMessage/ReceiveMessage";
import { useEffect, useState } from "react";
import { handleClose, handleMinimize } from "../../redux/chatroomIconReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { Welcome } from "../Welcome/Welcome";

export const Chatroom = () => {
  const [close, setClose] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.username);
  const socket = useAppSelector((state) => state.socket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //If the app is opened after minimizing/closing it will fetch current active users
    socket.socketIo.emit("user_name");
  }, [socket]);

  const handleClickClose = () => {
    dispatch(handleClose(true));
  };

  const handleClickMinimize = () => {
    dispatch(handleMinimize(true));
  };

  const handleLogin = () => {
    setClose(true);
  };

  return (
    <>
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
            <Rooms handleLogin={handleLogin} />
          </div>
          <div className="msg-wrapper">
            {!socket.currentRoom && <Welcome />}
            <ReceiveMessage />
          </div>
        </div>
        {user && <SendMessage />}
      </div>
      {close && <Login setClose={setClose} />}
    </>
  );
};
