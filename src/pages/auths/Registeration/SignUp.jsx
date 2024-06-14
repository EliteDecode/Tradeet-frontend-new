import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "../../../components/AuthComponents/SignUpForm";
import SignUpActions from "../../../components/AuthComponents/SignUpActions";
import LeftIcon from "../../../assets/left-icon.svg";
import Loading from "../../../components/Spinner";
import { useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div
        id="signup"
        className="w-full flex flex-col justify-center items-center">
        <div
          className="flex flex-col md:justify-start justify-center md:items-start md:border md:border-[#ADBC9F] 
					md:shadow-sm md:w-[680px] w-full  shadow-[#00000084] 
					rounded-[10px] mt-8 md:mt-28 relative ">
          <button
            onClick={() => navigate(-1)}
            className="flex md:justify-center justify-start items-center -top-10 left-0 md:absolute mb-5 md:mb-0 px-10 md:px-0">
            <img src={LeftIcon} alt="left icon" className="cursor-pointer" />
            <span className="  text-[18px] font-medium leading-[21px] text-[#2D2D2D] ml-2">
              Back to website
            </span>
          </button>
          <div className="pt-6 px-10 flex flex-col w-full">
            <h1
              className="text-[#2D2D2D] md:text-[32px] text-[26px] leading-[32px] 
						font-Montserrat font-semibold">
              Create Account
            </h1>
            <span className="md:text-[18px] text-[14px] mt-2 leading-[17px] font-medium">
              Welcome to Tradeet, Create your account with
            </span>
            <div className="pt-[20px] md:w-auto w-full"></div>

            {/* SignUp Options */}
            <SignUpActions />

            {/* Form Inputs */}
            <SignUpForm />
          </div>
        </div>
        <div className="mt-4 mb-16 md:w-[680px] w-full px-10 flex justify-between items-center">
          <div>
            <span className="text-[#2D2D2D] text-[17px] leading-[20px] font-normal">
              Already have an account?
            </span>
            <Link to="/auth/login">
              <span
                className="ml-2 text-[17px] text[#12362A] font-normal leading-[20px]
									cursor-pointer">
                Login
              </span>
            </Link>
          </div>
          {/* className="flex md:justify-end md:items-end justify-center items-center 
						md:-mt-3 -mt-10" */}
          <div className="flex gap-[2px] ">
            <div className="w-[46px] h-[4px] bg-[#12362A] rounded-[12px]"></div>
            <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
            <div className="w-[18px] h-[4px] bg-[#ADBC9F] rounded-[12px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
