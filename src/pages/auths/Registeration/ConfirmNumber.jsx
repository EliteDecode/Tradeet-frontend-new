import LeftIcon from "../../../assets/left-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import ConfirmNumberForm from "../../../components/AuthComponents/ConfirmNumberForm";

const ConfirmNumber = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div id="confirm" className="mb-16 p-4 ">
        <div className="flex justify-center items-center mt-4 md:mt-28 ">
          <div
            className="md:border md:border-[#ADBC9F] md:w-[500px] w-full h-[420px] 
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

            <div className="">
              <span className="md:text-[28px] text-[25px] text-[#2D2D2D] leading-[39px] font-semibold">
                Confirm Phone Number
              </span>
              <div className="flex max-w-[350px]">
                <span className="md:text-[15px] text-[13px] text-[#2D2D2D] leading-[21px] font-medium">
                  Please confirm your country code and enter your phone number.
                </span>
              </div>
            </div>
            <div className=" mt-[15px] md:w-[27.5rem] w-full border-b border-[#D9D9D9]"></div>
            
            {/* form here*/}
            <ConfirmNumberForm />

            <div
              className="flex md:justify-start md:items-start justify-center items-center 
						md:mt-12 mt-14"
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
						md:-mt-3 -mt-10 gap-[2px]"
            >
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
              <div className="w-[46px] h-[4px] bg-[#12362A] rounded-[12px]"></div>
              <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmNumber;
