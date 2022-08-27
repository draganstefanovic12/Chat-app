import chatIcon from "../assets/images/chat.png";
import { login } from "../redux/userReducer";
import { Footer } from "../components/Footer/Footer";
import { Chatroom } from "../components/Chatroom/Chatroom";
import { DesktopIcon } from "../components/DesktopIcon/DesktopIcon";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.socket.socketIo);
  const chatroomState = useAppSelector((state) => state.chatroomIcon);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!);
    user && dispatch(login(user.user));
    //Sending out user data after login
    socket.emit("user_name", user);
  }, [dispatch, socket]);

  return (
    <>
      <DesktopIcon icon={chatIcon} name="Chatroom" />
      <Footer />
      {!chatroomState.close && !chatroomState.minimize && <Chatroom />}
    </>
  );
};
