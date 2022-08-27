import "./welcome.css";
import keyboardGif from "../../assets/images/keyboard.gif";

export const Welcome = () => {
  return (
    <div className="welcome-cont">
      <h3>Welcome to the chatroom</h3>
      <img src={keyboardGif} alt="kb-gif" />
    </div>
  );
};
