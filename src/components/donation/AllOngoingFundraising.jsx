import React from "react";
import BackIcon from "../../assets/backIcon.png";
import Card from "./Card";
import { data } from "./data";
import { useNavigate } from 'react-router-dom'

const AllOngoingFundraising = () => {
  const navigate = useNavigate()
  return (
    <div className="md:max-w-[1116px] bg-white mx-auto mt-5 px-4">
      <div className="flex">
        <button onClick={ ()=> navigate(-1)} className="flex items-center gap-4">
          <img src={BackIcon} alt="" /> <span>Go back</span>
        </button>
      </div>
      <h2 className="text-xl font-semibold mt-4 ">Outgoing Fundraising</h2>

      <div className="md:max-w-[1100px] mx-auto mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.slice(0, data.length).map((val) => (
          <Card val={val} key={val.id} />
        ))}
      </div>
    </div>
  );
};

export default AllOngoingFundraising;
