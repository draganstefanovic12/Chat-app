import { Button } from "../Button/Button";
import { useState } from "react";
import { changeRoom } from "../../redux/socketReducer";
import { InputField } from "../InputField/InputField";
import { useAppDispatch } from "../../hooks/useRedux";

export const Rooms = () => {
  const dispatch = useAppDispatch();
  const [room, setRoom] = useState("");

  const handleRoom = () => {
    dispatch(changeRoom(room));
  };

  const handleSwitchRooms = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom(e.target.value);
  };

  return (
    <div>
      <InputField placeholder="Room..." onChange={handleSwitchRooms} />
      <Button onClick={handleRoom}>Switch Room</Button>
    </div>
  );
};
