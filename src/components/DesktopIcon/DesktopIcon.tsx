import "./desktopicon.css";
import { Fragment } from "react";
import { handleClose } from "../../redux/chatroomIconReducer";
import { useAppDispatch } from "../../hooks/useRedux";
import { ClickAwayContainer } from "../ClickAwayContainer/ClickAwayContainer";

type DesktopIconProps = {
  icon: string;
  name: string;
};

export const DesktopIcon = ({ icon, name }: DesktopIconProps) => {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(handleClose(false));
  };

  return (
    <ClickAwayContainer>
      <Fragment>
        <img onDoubleClick={handleOpen} src={icon} alt="icon" />
        <p>{name}</p>
      </Fragment>
    </ClickAwayContainer>
  );
};
