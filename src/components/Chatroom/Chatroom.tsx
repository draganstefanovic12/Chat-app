import "./chatroom.css";
import { Rooms } from "../Rooms/Rooms";
import { Button } from "../Button/Button";
import { SendMessage } from "../SendMessage/SendMessage";
import { ReceiveMessage } from "../ReceiveMessage/ReceiveMessage";

type ChatroomProps = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setMinimize: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Chatroom = ({ setClose, setMinimize }: ChatroomProps) => {
  const handleMinimize = () => {
    setMinimize(true);
  };

  const handleClose = () => {
    setClose(true);
  };

  return (
    <div className="main-chatroom-cont">
      <div className="title-bar">
        <p>Chat</p>
        <div>
          <Button onClick={handleMinimize} className="small-icon-btn">
            _
          </Button>
          <Button onClick={handleClose} className="small-icon-btn">
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
