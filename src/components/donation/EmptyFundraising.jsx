import React from "react";
import { Link } from "react-router-dom";

const EmptyFundraising = () => {
  return (
    <div className="w-full h-[544px] flex justify-center items-center flex-col">
      <h2 className="md:text-[32px] text-[18px] font-semibold">
        No Ongoing Event
      </h2>
      <Link to="/campaign">
        <button className="bg-[#12362A] text-white font-semibold sm:w-[469px] w-[261px] h-[56px] mt-6 rounded-lg">
          Create New Event
        </button>
      </Link>
    </div>
  );
};

export default EmptyFundraising;
