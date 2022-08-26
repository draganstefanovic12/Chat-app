import "./footer.css";
import winLogo from "../../assets/images/windows-logo.png";
import { Button } from "../Button/Button";

type FooterProps = {
  minimize: boolean;
  close: boolean;
};

export const Footer = ({ minimize }: FooterProps) => {
  return (
    <div className="footer-taskbar">
      <Button className="footer-btn">
        <div className="start-wrapper">
          <img className="win-logo" src={winLogo} alt="" />
          <p>Start</p>
        </div>
      </Button>
    </div>
  );
};
