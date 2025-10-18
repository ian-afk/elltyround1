import { useState } from "react";

function Buttons() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <button
        className={`${
          hover ? "bg-[#FFD84D]" : "bg-[#FFCE22] "
        } rounded px-2.5 h-10 mt-2.5`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Done
      </button>
    </>
  );
}

export default Buttons;
