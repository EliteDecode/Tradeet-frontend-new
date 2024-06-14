import { Link } from "react-router-dom";
import React from "react";
import heroImg from "../../assets/donation/donationHeroImg.jfif";

const DonationHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="w-full h-[600px] md:h-[90vh] bg-center bg-cover bg-no-repeat  text-white flex flex-col justify-center items-center"
    >
      <div className="bg-black flex flex-col justify-center items-center gap-16 w-full h-[600px] md:h-[90vh] bg-opacity-50">
        <div className="md:w-[600px] w-[370px] font-['Montserrat'] text-center md:text-4xl text-lg font-bold md:font-semibold">
          Join Us in Making a Difference, by Empowering Change and Transforming
          Lives
        </div>
        <Link to="/campaign">
          <button className="bg-[#12362A] md:w-[469px] rounded-lg font-semibold w-[261px] h-[56px] center text-white">
            Create New Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationHero;
