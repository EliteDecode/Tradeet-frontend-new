import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { TbDeviceMobile } from "react-icons/tb";
import { BsScissors } from "react-icons/bs";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="md:hidden w-full px-6 my-3 flex items-center justify-around">
      <div>
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 text-xl"
        >
          <BsBoxSeam />
          <span className="text-sm">Sell All</span>
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 text-xl"
        >
          <BsHandbag />
          <span className="text-sm">Fashion</span>
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 text-xl"
        >
          <SlScreenDesktop />
          <span className="text-sm">Computers</span>
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 text-xl"
        >
          <TbDeviceMobile />
          <span className="text-sm">Phones</span>
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="flex flex-col justify-center items-center gap-2 text-xl"
        >
          <BsScissors />
          <span className="text-sm">All Deals</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
