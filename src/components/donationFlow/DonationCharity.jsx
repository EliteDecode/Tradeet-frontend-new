import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import CardCharity from "../UI/CardCharity";
import data from "./CharityList";
import { useNavigate } from "react-router-dom/dist";

const DonationCharity = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <div className="items-center gap-2 md:text-lg text-base flex">
          <MdArrowBackIos /> Go Back
        </div>
      </button>
      <div className="my-8">
        <h2 className="md:text-3xl text-[26px] font-semibold">
          Choose a campaign and donate
        </h2>
        <p className="text-gray-400 md:text-lg text-base">
          Choose from the list below to donate
        </p>
      </div>
      <div className="md:max-w-[1100px]  mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((val) => (
          <Link to={`/donor/charity/${val.id}`} key={val.id}>
            <CardCharity val={val} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DonationCharity;
