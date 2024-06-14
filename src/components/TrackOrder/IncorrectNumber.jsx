import { Link, useNavigate } from "react-router-dom";
import Back from "..//../assets/back.svg";

const IncorrectNumber = () => {
  const navigate = useNavigate()
  return (
    <div className="container flex flex-col px-8 py-12 lg:mx-auto">
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
        <span className="flex gap-2  border-l-4 border-[#42684F]  bg-[#42684F1F] p-4 text-[#42684F] font-medium text-lg leading-[21.94px]"> #
        <p >Tracking Number</p>
        </span>
      </div>


      <div className="   flex flex-col mt-12 mx-auto   border-[#ED1111] border-[1px] rounded-lg lg:w-full lg:px-8 lg:pb-8   lg:h-2/3   ">
        <p className=" text-left p-8 font-semibold text-xl leading-[24.38px] text-[#ED1111] border-b-2  border-light-grey lg:p-4 lg:w-full lg:leading-[29.26px] lg:text-2xl   ">
          Incorrect Tracking Number
        </p>

        <div className=" leading-[21.94px] text-lg p-4 lg:p-0 lg:mt-4 lg:w-full   ">
          <p className="mb-4 text-[#777777] font-medium lg:mb-0 lg:leading-[24.38px] lg:text-xl">
            Incorrect Tracking Number, please check and try again.
          </p>
          <span className="font-semibold text-lg flex gap-2">
            <Link to="/trackOrder">
            <a
              href="#"
              className="  uppercase text-[#42684F]  "
            >
              click here
            </a>
            </Link>
            <p className="text-[#777777] ">to try again</p>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default IncorrectNumber;
