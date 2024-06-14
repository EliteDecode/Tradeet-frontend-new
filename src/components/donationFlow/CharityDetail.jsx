import React from "react";
import { useParams } from "react-router-dom";
import CharityList from "./CharityList";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import image from "../../assets/charity/image.jpeg";
import logo from "../../assets/charity/logo.jpeg";
import { useNavigate } from "react-router-dom/dist";

const CharityDetail = () => {
  const { charityname } = useParams();

  const charity = CharityList.find((item) => item.id == charityname);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <div className="items-center gap-2 md:text-lg text-base flex">
          <MdArrowBackIos /> Go Back
        </div>
      </button>
      <div className="p-4 md:p-8 border rounded-md w-auto md:w-[38rem] mx-auto my-[2rem]">
        <div className="w-full h-[14rem] overflow-hidden rounded-t-md">
          <img src={image} alt={charity.title} className="w-full " />
        </div>
        <div className="flex items-start justify-between my-2 md:my-4 relative">
          <div className="flex flex-col items-start gap-6 md:gap-2">
            <p className="flex items-center gap-2 text-[8px] md:text-xs">
              <img
                src={logo}
                className="w-4 h-auto rounded-lg overflow-hidden"
              />{" "}
              Reed Foundation
            </p>
            <h2 className="font-semibold text-lg md:text-2xl">
              {charity.name}
            </h2>
          </div>
          <div className="py-[4px] px-4 inline-block rounded-md bg-gray-200 h-fit w-fit absolute right-0">
            <p className="text-gray-600 text-[8px] md:text-xs">
              Item being donated
            </p>
          </div>
        </div>
        <div className="mb-[3rem] md:mb-[6rem]">
          <div className="flex flex-col items-start gap-2 py-2 border-b border-gray-300">
            <h2 className="text-[10px] md:text-sm text-gray-600 font-semibold">
              Amount goal
            </h2>
            <div className="flex items-center justify-start gap-4 w-full">
              <p className="font-semibold md:text-lg text-sm">
                {charity.initialDispalyed}
              </p>
              <p className="md:text-sm text-xs text-gray-500">raised out of</p>
              <p className="font-semibold md:text-lg text-sm">
                {charity.goalDisplayed}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 py-2 border-b border-gray-300">
            <h2 className="text-[10px] md:text-sm text-gray-600 font-semibold">
              Expiry date
            </h2>
            <p className="font-semibold md:text-lg text-sm">52 Days left</p>
          </div>
          <div className="flex flex-col items-start gap-2 py-2 border-b border-gray-300">
            <h2 className="text-[10px] md:text-sm text-gray-600 font-semibold">
              Number of people that donated
            </h2>
            <p className="font-semibold md:text-lg text-sm">115 people</p>
          </div>
        </div>
        <Link to="/donor/donationitemsfilled">
          <button className="text-center py-3 w-full rounded-md bg-[#12362A] md:text-xl text-sm text-white font-semibold">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CharityDetail;
