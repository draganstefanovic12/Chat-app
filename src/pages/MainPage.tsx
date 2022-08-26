import { Footer } from "../components/Footer/Footer";
import { Chatroom } from "../components/Chatroom/ChatRoom";
import { useState } from "react";

export const MainPage = () => {
  const [close, setClose] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);

  console.log(minimize);

  return (
    <>
      {!close && <Chatroom setClose={setClose} setMinimize={setMinimize} />}
      <Footer close={close} minimize={minimize} />
    </>
  );
};
