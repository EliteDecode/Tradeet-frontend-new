import React from "react";
import DonationHero from "./DonationHero";
import "./styles.css";
import OngoingFundraising from "./OngoingFundraising";
import { data } from "./data";
import EmptyFundraising from "./EmptyFundraising";

const Donation = () => {
  return (
    <div className="font-[Montserrat]">
      <DonationHero />
      {data.length ? <OngoingFundraising /> : <EmptyFundraising />}
    </div>
  );
};

export default Donation;
