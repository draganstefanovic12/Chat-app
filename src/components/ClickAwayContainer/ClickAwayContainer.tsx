import { useEffect, useRef, useState } from "react";

type ClickAwayProps = {
  children: JSX.Element;
};

export const ClickAwayContainer = ({ children }: ClickAwayProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleDoubleClick = () => {
    setClicked(false);
  };

  const style = { backgroundColor: clicked ? "#002081" : "" };

  const iconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickAway);
  }, [iconRef]);

  return (
    <div
      ref={iconRef}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={style}
      className="icon-cont"
    >
      {children}
    </div>
  );
};
