import { useState } from "react";
import Back from "..//../assets/back.svg";
import { Link, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const TrackNumber = () => {
  const [inputValue, setInputValue ] = useState(" ");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const navigate = useNavigate()

  return (
    <div className="container flex flex-col justify-center  px-8  py-12 lg:mx-auto  ">
      <span className="flex flex-row gap-20 font-semibold lg:gap-8   " onClick={()=>navigate(-1)}>
        <img src={Back} alt="back" />
        <p className=" text-center text-2xl leading-[29.26px] text-[#00151C] lg:hidden">
          Track your Order
        </p>
        <p className="hidden lg:block lg:font-medium lg:leading-[21.94px] lg:text-[#2D2D2D] lg:text-lg">
          Go back
        </p>
      </span>

      <div className="flex flex-row gap-12 lg:w-full  ">
        <div className="hidden lg:flex lg:flex-col   lg:justify-center  lg:mt-12  lg:pb-6 lg:w-7/12 lg:h-1/3 lg:border-light-grey lg:border-[1px] lg:rounded-lg lg:shadow-[0_4px_12px_3px_rgba(0,0,0,0.1)]">
          <p className="font-semibold text-[32px]   p-4 leading-[39.01px] text-[#2D2D2D]  ">
            Track your Order
          </p>
          <span className="flex gap-2  border-l-4 border-[#42684F]  bg-[#42684F1F] p-4 text-[#42684F] font-medium text-lg leading-[21.94px]">
            {" "}
            #<p>Tracking Number</p>
          </span>
        </div>

        <div className="   flex flex-col items-center mx-auto justify-center  mt-12   border-light-grey border-[1px] rounded-lg shadow-[0_4px_12px_3px_rgba(0,0,0,0.1)]  lg:w-full lg:px-8 lg:pb-8  lg:h-2/3    ">
          <p className=" text-center  p-8 lg:p-4 font-semibold text-xl leading-[24.38px] text-brand-black border-b-2  lg:w-full border-light-grey lg:leading-[29.26px] lg:text-2xl   ">
            Track the status of your package in real-time.
          </p>

          <div className="lg:w-full   ">
            <input
              type="text"
              name="tracking_number"
              onChange={handleInputChange}
              // value={inputValue}
              placeholder="Enter Tracking Number"
              className="my-8 lg:my-6   placeholder:text-[#2D2D2D] placeholder:text-center text-center border border-solid border-[#2D2D2D] outline-2 rounded-md py-4 px-4 lg:w-full focus:outline-none focus:border-[#2D2D2D] text-xl font-normal leading-[17.07px]"
            />
          {inputValue === " " ? (
            <Link to ="/incorrectNumber">
            <button
              type="submit"
              className=" py-4 mb-10  px-28 flex items-center  text-center justify-center font-semibold text-xl rounded-md bg-[#12362A] text-white leading-[24.38px] lg:w-full lg:mb-0  "
            >
              Track
            </button>
            </Link>
            ) :  <Link to ="/trackNumberConfirmation">
            <button
              type="submit"
              className=" py-4 mb-10  px-28 flex items-center  text-center justify-center font-semibold text-xl rounded-md bg-[#12362A] text-white leading-[24.38px] lg:w-full lg:mb-0  "
            >
              Track
            </button>
            </Link>
             }
        </div>
        </div>

      </div>
    </div>
  );
};

export default TrackNumber;
