import { Rooms } from "../components/Rooms/Rooms";
import { SendMessage } from "../components/SendMessage/SendMessage";
import { ReceiveMessage } from "../components/ReceiveMessage/ReceiveMessage";

export const MainPage = () => {
  return (
    <div className="main-wrapper">
      <div className="rooms-wrapper">
        <Rooms />
      </div>
      <div className="msg-wrapper">
        <ReceiveMessage />
        <SendMessage />
      </div>
    </div>
  );
};
