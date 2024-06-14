import React from "react";
import { Outlet } from "react-router-dom";

const Donation = () => {
  return (
    <div className="p-[1rem] md:px-[6rem]">
      <Outlet />
    </div>
  );
};

export default Donation;
