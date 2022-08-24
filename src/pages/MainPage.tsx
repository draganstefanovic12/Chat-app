import { SendMessage } from "../components/SendMessage/SendMessage";
import { ReceiveMessage } from "../components/ReceiveMessage/ReceiveMessage";
import { Rooms } from "../components/Rooms/Rooms";

export const MainPage = () => {
  return (
    <div className="main-wrapper">
      <Rooms />
      <ReceiveMessage />
      <SendMessage />
    </div>
  );
};
