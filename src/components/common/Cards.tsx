import { useState } from "react";
import CheckButton from "./CheckButton";

interface CardsProps {
  label: string;
}

function Cards({ label }: CardsProps) {
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
      <label>{label}</label>
      <CheckButton
        check={check}
        setCheck={setCheck}
        checkHover={checkHover}
        setCheckHover={setCheckHover}
        isHeld={isHeld}
        setIsHeld={setIsHeld}
        onHold={onHold}
        onRelease={onRelease}
      />
    </div>
  );
}

export default Cards;
