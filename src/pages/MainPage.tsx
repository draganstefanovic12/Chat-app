import chatIcon from "../assets/images/chat.png";
import { login } from "../redux/userReducer";
import { Footer } from "../components/Footer/Footer";
import { Chatroom } from "../components/Chatroom/Chatroom";
import { useEffect } from "react";
import { DesktopIcon } from "../components/DesktopIcon/DesktopIcon";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { Login } from "../components/Login/Login";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.socket.socketIo);
  const chatroomState = useAppSelector((state) => state.chatroomIcon);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!);
    user && dispatch(login(user.user));
    //Sending out who logged in on page open
    socket.emit("user_name", user);
  }, [dispatch, socket]);

  return (
    <>
      <DesktopIcon icon={chatIcon} name="Chatroom" />
      <Footer />
      <Login />
      {!chatroomState.close && !chatroomState.minimize && <Chatroom />}
    </>
  );
};
