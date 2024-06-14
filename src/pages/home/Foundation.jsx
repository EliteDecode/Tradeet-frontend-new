import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Foundation = () => {
  return (
    <div className="">
      <div className="w-full md:h-[490px] h-[250px] bg-[url(/src/assets/foundationImg.png)] bg-center bg-cover text-white flex flex-col justify-center items-center">
        <h2 className="md:text-6xl text-[26px] md:font-bold font-semibold">
          DownTown Foundation
        </h2>
        <p className="mt-8 text-center font-[500] hidden md:block">
          Your support helps us make a difference in <br />
          the lives of those in need
        </p>
        <Link to="/donor">
          <button className="bg-[#12362A] font-semibold md:w-[465px] w-[330px] mt-8 md:py-4 md:px-6 py-2 px-4 rounded-lg">
            Donate
          </button>
        </Link>
      </div>

      <div className="md:px-24 px-6 md:my-[60px] my-10">
        <h2 className="font-semibold md:text-[28px] text-[20px] text-[#2D2D2D]">
          Tradeet Online Shopping In Nigeria
        </h2>
        <p className="md:text[18px] text-sm leading-[26px] mt-6">
          Tradeet is Nigeria's number one marketplace, where personalized
          shopping meets unbeatable prices. We provide a platform for you to
          buy, sell and donate valuables to achieve your desired goal(s). We
          also offer top quality products across different categories like
          fashion, mobile phones, electronics, and home essentials. With
          Tradeet, you can give away your used items and donate to charity.
          Achieve your aims with quality deals at a click!
        </p>

        <p className="md:text-lg text-base text-[#12362A] underline mt-8 font-medium">
          See all categories{" "}
          <IoIosArrowRoundForward size={24} className="inline" />
        </p>
      </div>
    </div>
  );
};

export default Foundation;
