import { useState } from "react";
import Back from "..//../assets/back.svg";
// import Back from "..//../assets/Back.svg";
import Bck from "..//../assets/bck.svg";

const Header = () => {
  const [activebutton, setActivebutton] = useState(null);

  const handleClick = (button) => {
    setActivebutton(button);
  };

  return (
    <div className=" flex flex-row items-center justify-between py-4 px-6 lg:px-24 lg:py-6  ">
      <div className="flex items-center justify-center  gap-4">
        <img src={Back} alt="back" className="lg:hidden" />
        <img src={Bck} alt="back" className="hidden lg:block" />

        <p className="hidden lg:block lg:font-medium lg:text-lg lg:leading-[21.94px] lg:text-[#777777] ">
          Go back
        </p>
        <p className="hidden lg:block lg:font-semibold lg:leading-[29.26px]   lg:text-[#2D2D2D] ">
          /
        </p>
        <p className="text-[#2D2D2D] font-medium text-lg leading-[21.94px]">
          Notification
        </p>
      </div>

      <div className="flex gap-2 lg:gap-4">
        <button
          onClick={() => handleClick("All")}
          className={`font-medium   leading-[14.63px] text-xs   py-2 px-4 rounded-lg lg:font-semibold lg:text-base lg:leading-[20px] lg:px-10 ${
            activebutton === "All"
              ? "bg-brand-green text-light-grey"
              : "text-[#2D2D2D] border-solid border-[0.5px] border-brand-green"
          }   `}
        >
          All
        </button>
        <button
          onClick={() => handleClick("Unread")}
          className={`flex gap-2 items-center justify-center font-medium   border-solid border-[0.5px] leading-[14.63px] text-xs  py-2 px-2 rounded-lg border-[#12362A]   lg:font-semibold lg:text-base lg:leading-[20px] ${
            activebutton === "Unread"
              ? "bg-brand-green text-light-grey"
              : "   text-[#2D2D2D]"
          }   `}
        >
          <div className=""> Unread </div>

          <span className="   bg-pressed-state-green text-light-grey font-semibold text-[8px] leading-[10.89px] rounded-full px-2 py-1 lg:text-[11px] lg:leading-[18px] lg:py-[1.5px]">
            2{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
