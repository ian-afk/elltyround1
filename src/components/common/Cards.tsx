import { useState, type ReactNode } from "react";
import CheckButton from "./CheckButton";

interface CardsProps {
  children: ReactNode;
}

function Cards({ children }: CardsProps) {
  const [check, setCheck] = useState(false);
  const [checkHover, setCheckHover] = useState(false);
  const [isHeld, setIsHeld] = useState(false);

  const onHold = () => {
    setIsHeld(true);
  };

  const onRelease = () => {
    setIsHeld(false);
    setCheck(!check);
  };
  return (
    <div
      className="flex justify-between items-center px-2 h-[42px]"
      onMouseEnter={() => setCheckHover(true)}
      onMouseLeave={() => setCheckHover(false)}
      onMouseDown={onHold}
      onMouseUp={() => {
        onRelease();
      }}
    >
      {children}
      <CheckButton
        check={check}
        onCheck={setCheck}
        checkHover={checkHover}
        onCheckHover={setCheckHover}
        isHeld={isHeld}
        onIsHeld={setIsHeld}
        onHold={onHold}
        onRelease={onRelease}
      />
    </div>
  );
}

export default Cards;
