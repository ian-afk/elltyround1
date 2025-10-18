interface CheckButtonProps {
  checkHover: boolean;
  setCheckHover: React.Dispatch<React.SetStateAction<boolean>>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
  isHeld: boolean;
  setIsHeld: React.Dispatch<React.SetStateAction<boolean>>;
  onHold: () => void;
  onRelease: () => void;
}
//#ccd2e0 border shadow onClick
//#5087f9 checked background
//#2369f9 active check background
//#eaf0fe onClick effect
//#bdbdbd hover border
function CheckButton({
  checkHover,
  setCheckHover,
  check,
  setCheck,
  isHeld,
  onHold,
  onRelease,
}: CheckButtonProps) {
  const baseBlue = "#5087f9";
  const hoverBlue = "#2369f6";

  const getBgColor = () => {
    if (isHeld && check) return hoverBlue;
    if (check) return checkHover ? hoverBlue : baseBlue;
    return "transparent";
  };

  const bgColor = getBgColor();

  const getBorderColor = () => {
    if (check && isHeld) return hoverBlue;
    else if (check && !checkHover) return baseBlue;
    else if (checkHover) return check ? hoverBlue : "#BDBDBD";
    return "#d1d5db";
  };

  const borderColor = getBorderColor();

  return (
    <>
      <div
        className={`rounded-md transition-all duration-150 relative`}
        style={{
          boxShadow: isHeld ? `0 0 0 3px rgba(36, 105, 246, 0.1)` : "",
        }}
      >
        <div
          className={` h-[25px] w-[25px] rounded-md flex justify-center items-center cursor-pointer transition-all duration-150`}
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
            boxShadow: "none",
          }}
          onMouseEnter={() => setCheckHover(true)}
          onMouseLeave={() => setCheckHover(false)}
          onMouseDown={onHold}
          onMouseUp={() => {
            onRelease();
            setCheck(!check);
          }}
        >
          {(check || checkHover) && (
            <div
              className={`flex items-center justify-center transition-colors duration-150`}
              style={{
                width: "25px",
                height: "25px",
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12.6L10.0345 17.9672C10.055 17.9854 10.0863 17.9837 10.1047 17.9635L21 6"
                  stroke={check ? "#ffffff" : isHeld ? "#878787" : "#E3E3E3"}
                  stroke-linecap="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckButton;
