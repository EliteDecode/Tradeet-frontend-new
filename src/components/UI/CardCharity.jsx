import React from "react";
import { IoIosPeople } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import ProgressBar from "../donationFlow/Progress";
import logo from "../../assets/charity/logo.jpeg";

import cardImg from "../../assets/donation/foundationImg.jfif";

const CardCharity = ({ val }) => {
  return (
    <div className="md:max-w-[386px] w-full border-black border flex flex-col mb-8 rounded-lg">
      <div className="md:h-full">
        <img
          src={cardImg}
          alt=""
          className="rounded-t-lg md:h-full h-[140px] w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center">
          <img src={logo} width={20} alt="" className="rounded-xl" />
          <h6 className="text-black text-[10px] font-semibold ps-2 ">
            {val.foundation}
          </h6>
        </div>
        <div className="font-semibold ps-4 text-left mt-1 md:text-[18px] text-sm ">
          {val.name}
        </div>
        <div className="flex items-center md:mt-6 mt-2">
          <div className="flex items-center">
            <IoIosPeople />
            <span className="text-[10px] ps-2">{val.people}</span>
          </div>
          <div className="flex items-center ps-16">
            <CiClock2 />
            <span className="text-[10px] ps-2">{val.daysLeft} days left</span>
          </div>
        </div>
        <div className="md:mt-3 ">
          <ProgressBar
            currAmount={val.currAmount}
            totalAmount={val.totalAmount}
          />
        </div>
        <div className="mt-2 md:flex justify-between gap-2">
          <h2 className="font-medium md:text-[20px] text-base w-1/2">
            {val.initialDispalyed}
          </h2>
          <div className="flex items-center justify-between w-full">
            <span className="text-[#777777] md:text-sm text-[10px] font-medium">
              raised out of
            </span>
            <h2 className="font-medium text-[#777777] md:text-[20px] text-base">
              {val.goalDisplayed}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCharity;
