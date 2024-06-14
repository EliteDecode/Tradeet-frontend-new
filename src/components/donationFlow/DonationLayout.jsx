import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import first from "../../assets/donation/first.jpeg";
import second from "../../assets/donation/second.jpeg";
import third from "../../assets/donation/third.jpeg";
import DonationCard from "../UI/DonationCard";

const donations = [
  {
    id: 1,
    title: "Name of organization/Charity",
    img: first,
    type: "charity",
    verified: true,
  },
  {
    id: 2,
    title: "BuildHubb",
    img: second,
    type: "foundation",
    verified: true,
  },
  {
    id: 3,
    title: "Name of organization/Charity",
    img: third,
    type: "charity",
    verified: true,
  },
  {
    id: 4,
    title: "Name of organization/Charity",
    img: third,
    type: "charity",
    verified: true,
  },
  {
    id: 5,
    title: "Name of organization/Charity",
    img: third,
    type: "charity",
    verified: true,
  },
];

const DonationLayout = () => {
  return (
    <div>
      <button>
        <Link to={"/"} className="items-center gap-2 text-base flex">
          <IoMdClose /> Cancel
        </Link>
      </button>
      <div className="my-8">
        <h2 className="md:text-3xl text-2xl font-semibold">Donate</h2>
        <p className="text-gray-400 md:text-lg text-base ">
          Donate directly to available charities either corporate or individual.
        </p>
        <h2 className="text-md font-semibold my-2 md:text-[24px] text-lg">
          Select Foundation
        </h2>
        <div className="flex items-start justify-start gap-4 flex-wrap">
          {donations.map((donate) => (
            <Link to={`/donor/charity`} key={donate.id}>
              <DonationCard
                image={donate.img}
                title={donate.title}
                type={donate.type}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationLayout;
