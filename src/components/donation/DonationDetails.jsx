import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackIcon from "../../assets/backIcon.png";
import { data } from "./data";
import CampaignGoals from "./CampaignGoals";
import DonationDetailCard from "./DonationDetailCard";
import OngoingFundraising from "./OngoingFundraising";
import cardImg from "../../assets/donation/foundationImg.jfif";

const DonationDetails = () => {
  const { id } = useParams();
  const val = data[id - 1];

  const navigate = useNavigate();
  return (
    <div className="md:max-w-[1116px] bg-white mx-auto my-5 px-4">
      <div className="flex">
        <button
          onClick={() => navigate(-1)}
          to="/donation"
          className="flex items-center gap-4"
        >
          <img src={BackIcon} alt="" /> <span>Go back</span>
        </button>
      </div>
      {/* body starts here */}

      <div className="md:flex justify-between gap-4 mt-8 ">
        {/* left side */}
        <div>
          <div className="md:max-w-[600px]  rounded-lg">
            <img src={cardImg} alt="" className="rounded-lg" />
          </div>

          {/* right side */}
          <div className="md:max-w-[525px] mt-8 px-4 hidden md:block">
            <CampaignGoals />
          </div>
        </div>

        <div>
          <DonationDetailCard val={val} />
        </div>
      </div>

      <div className="md:w-[525px] mt-6 px-4 md:hidden">
        <CampaignGoals />
      </div>
      <div className="w-full">
        <OngoingFundraising />
      </div>
    </div>
  );
};

export default DonationDetails;
