import "./footer.css";
import winLogo from "../../assets/images/windows-logo.png";
import { Button } from "../Button/Button";
import { handleMinimize } from "../../redux/chatroomIconReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const chatroomState = useAppSelector((state) => state.chatroomIcon);

  const handleMaximize = () => {
    dispatch(handleMinimize(!chatroomState.minimize));
  };

  const className = chatroomState.minimize ? "taskbar-btn" : "focused-btn";

  return (
    <div className="footer-taskbar">
      <Button className="footer-btn">
        <div className="start-wrapper">
          <img className="win-logo" src={winLogo} alt="win-logo" />
          <p>Start</p>
        </div>
      </Button>
      {!chatroomState.close && (
        <Button onClick={handleMaximize} className={`footer-btn ${className}`}>
          {chatroomState.name}
        </Button>
      )}
    </div>
  );
};
