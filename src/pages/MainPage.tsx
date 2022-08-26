import chatIcon from "../assets/images/chat.png";
import { Footer } from "../components/Footer/Footer";
import { Chatroom } from "../components/Chatroom/Chatroom";
import { DesktopIcon } from "../components/DesktopIcon/DesktopIcon";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useEffect } from "react";
import { login } from "../redux/userReducer";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const chatroomState = useAppSelector((state) => state.chatroomIcon);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("ChatUser")!);
    user && dispatch(login(user.user));
  }, [dispatch]);

  return (
    <>
      <DesktopIcon icon={chatIcon} name="Chatroom" />
      <Footer />
      {!chatroomState.close && !chatroomState.minimize && <Chatroom />}
    </>
  );
};
