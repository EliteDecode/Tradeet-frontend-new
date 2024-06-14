import { Link, useNavigate } from "react-router-dom";
import LeftIcon from "../../../assets/left-icon.svg";

const VerificationCode = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div id="confirm__number" className="mb-16 p-4 mt-4 md:mt-28">
        <div className="flex justify-center items-center mt-4 w-full">
          <div
            className="md:border md:border-[#ADBC9F] md:w-[500px] w-full h-[330px] 
					md:shadow-sm rounded-[8px] p-6 relative"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex md:justify-center justify-start items-center -top-10 left-0 md:absolute mb-5 md:mb-0"
            >
              <img src={LeftIcon} alt="left icon" className="cursor-pointer" />
              <span className="md:block hidden text-[18px] font-medium leading-[21px] text-[#2D2D2D] ml-2">
                Go back
              </span>
            </button>
            <div className="mt-">
              <span className="md:text-[28px] text-[25px] text-[#2D2D2D] leading-[39px] font-semibold">
                Enter Verification Code
              </span>
              <div className="flex max-w-[350px]">
                <span className="md:text-[15px] text-[13px] text-[#2D2D2D] leading-[21px] font-medium ">
                  We’ve sent an SMS with an activation code to your phone
                  +2348100000000
                </span>
              </div>
            </div>
            <div className=" mt-[15px] md:w-[27.5rem] w-full border-b border-[#D9D9D9]"></div>

            {/* Code input boxes */}
            <div className="flex justify-between items-start md:gap-4 gap-2 mt-4 ">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="md:w-[55px] md:h-[55px] w-[45px] h-[45px] text-[#777777] 
								text-lg text-center rounded-[15px] border-[#D9D9D9] border"
                />
              ))}
            </div>

            <div className="mt-3">
              <p className="text-[14px] text-[#2D2D2D] font-normal leading-[20px]">
                Code expires in:{" "}
                <span className="text-[#12362A] font-medium">00:59</span>
              </p>
            </div>

            {/* Continue button */}
            <Link to="/auth/verification-failed">
              <button className="bg-[#ADBC9F] md:w-[450px] w-full h-[46px] rounded-[8px] mt-8">
                <span className="text-white md:text-[20px] text-[18px] font-semibold leading-[24px]">
                  Verify
                </span>
              </button>
            </Link>
            <div
              className="flex md:justify-start md:items-start justify-center items-center 
						md:mt-12 mt-16"
            >
              <span className="text-[#2D2D2D] text-[17px] leading-[20px] font-normal">
                Already have an account?
              </span>
              <Link to="/auth/login">
                <span
                  className="ml-2 text-[17px] text[#12362A] font-normal leading-[20px]
									cursor-pointer"
                >
                  Login
                </span>
              </Link>
            </div>
            <div
              className="flex md:justify-end md:items-end justify-center items-center 
						md:-mt-3 -mt-[2rem] gap-[2px]"
            >
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
              <div className="w-[46px] h-[4px] bg-[#12362A] rounded-[12px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
