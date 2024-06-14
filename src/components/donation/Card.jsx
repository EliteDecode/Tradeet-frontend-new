import React from "react";
import PeopleIcon from "../../assets/peopleIcon.png";
import ClockIcon from "../../assets/clockIcon.png";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import cardImg from "../../assets/donation/foundationImg.jfif";
import icon from "../../assets/donation/foundationIcon.jfif";

const Card = ({ val }) => {
  return (
    <Link
      to={`/donation/${val.id}`}
      className="md:max-w-[386px] w-full border-black border flex flex-col mb-8 rounded-lg"
    >
      <div>
        <img src={cardImg} alt="" className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <img src={icon} width={20} alt="" className="rounded-xl" />
          <h6 className="text-black text-[12px] font-semibold ps-2 ">
            {val.foundation}
          </h6>
        </div>
        <div className="font-semibold ps-4 text-left mt-1 text-[18px]">
          {val.name}
        </div>
        <div className="flex items-center mt-6">
          <div className="flex items-center">
            <img src={PeopleIcon} alt="" />
            <span className="text-[12px] ps-2">{val.people}</span>
          </div>
          <div className="flex items-center ps-16">
            <img src={ClockIcon} alt="" />
            <span className="text-[12px] ps-2">{val.daysLeft} days left</span>
          </div>
        </div>
        <div className="mt-3">
          <ProgressBar
            currAmount={val.currAmount}
            totalAmount={val.totalAmount}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center">
            <h2 className="font-semibold">N{val.currAmount}</h2>
            <span className="text-[#777777] text-[12px] ps-3 font-semibold">
              raised out of
            </span>
          </div>
          <h2 className="font-semibold text-[#777777]">N{val.totalAmount}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
