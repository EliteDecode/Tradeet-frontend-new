import React from "react";
import PeopleIcon from "../../assets/peopleIcon.png";
import ClockIcon from "../../assets/clockIcon.png";
import GiftIcon from "../../assets/giftIcon.png";
import Facebook from "../../assets/facebookIcon.png";
import Instagram from "../../assets/instagramIcon.png";
import XTwitter from "../../assets/XTwitterIcon.png";
import LinkIcon from "../../assets/linksIcon.png";
import ProgressBar from "./ProgressBar";
import { donations } from "./data";
import icon from "../../assets/donation/foundationIcon.jfif";

const DonationDetailCard = ({ val }) => {
  return (
    <div className="lg:w-[490px] md:w-[420px] px-4 border border-[#D9D9D9] rounded-md ">
      <div className="w-full h-[82px] border-b py-1 flex items-center justify-center">
        <h2 className="font-semibold text-center lg:text-2xl text-[18px]">
          {val.name}
        </h2>
      </div>

      {/* right body here*/}
      <div className="md:w-[357px]">
        <div className="flex items-center mt-3">
          <img src={icon} width={20} alt="" className="rounded-xl" />
          <h6 className="text-black lg:text-[16px] text-[14px] font-semibold ps-2 ">
            {val.foundation}
          </h6>
          <span className="text-[#777777] lg:text-[16px] text-[14px] font-medium ps-1 ">
            started this funraiser
          </span>
        </div>

        <div className="mt-2 flex justify-between">
          <div className="flex items-center">
            <h2 className="font-semibold text-xl">N{val.currAmount}</h2>
            <span className="text-[#777777] text-[14px] ps-3 font-medium">
              raised out of
            </span>
          </div>
          <h2 className="font-semibold text-xl text-[#777777]">
            N{val.totalAmount}
          </h2>
        </div>

        <div className="mt-3">
          <ProgressBar
            currAmount={val.currAmount}
            totalAmount={val.totalAmount}
          />
        </div>

        <div className="flex items-center mt-6">
          <div className="flex items-center">
            <img src={PeopleIcon} alt="" />
            <span className="text-[10px] text-[#777777] font-medium ps-2">
              {val.people} Donation
            </span>
          </div>
          <div className="flex items-center ps-16">
            <img src={ClockIcon} alt="" />
            <span className="text-[10px] ps-2 text-[#777777] font-medium ">
              {val.daysLeft} days left
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h2 className=" lg:text-2xl text-xl font-medium">Recent Donations</h2>
          {donations.map((val) => (
            <div className="flex items-center mt-3 gap-5" key={val.id}>
              <img src={GiftIcon} alt="" />
              <div className="w-[185px] font-medium text-[#777777] text-[16px] ">
                <h3>{val.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="">N{val.amount}</div>
                  <span className="pb-1">.</span>
                  <div className="">{val.days} week ago</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-medium">Share</h2>
          <div className="mt-3 flex gap-3 font-medium text-[#777777]">
            <div className="">
              <a
                href="#"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img src={LinkIcon} alt="" />
                <span className="text-[12px]">Copy Link</span>
              </a>
            </div>
            <div className="">
              <a
                href="#"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img src={Facebook} alt="" />
                <span className="text-[12px]">Facebook</span>
              </a>
            </div>
            <div className="">
              <a
                href="#"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img src={Instagram} alt="" />
                <span className="text-[12px]">Instagram</span>
              </a>
            </div>
            <div className="">
              <a
                href="#"
                target="_blank"
                className="flex flex-col items-center"
              >
                <img src={XTwitter} alt="" />
                <span className="text-[12px]">X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailCard;
