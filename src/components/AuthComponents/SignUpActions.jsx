import React from 'react'
import Google from "../../assets/google.svg";
import Apple from "../../assets/apple.svg";
import Facebook from "../../assets/facebook.svg";

const SignUpActions = () => {
  return (
    <div className="border-t border-[#D9D9D9] md:h-[115px] h-[100px] mt-3 flex flex-col justify-center items-center relative">
      <div className="flex md:gap-10 gap-6  cursor-pointer w-full justify-between mt-3">
        {/* Google Login*/}
        <div
          className="flex justify-center items-center border border-[#12362A] 
							md:w-[164px] w-[100px] md:h-[54px] h-[38px] rounded-[10px] hover:bg-gray-100"
        >
          <img src={Google} alt="Google icon" className="w-[19px] h-[19px]" />
        </div>
        {/* Apple Login*/}
        <div
          className="flex justify-center items-center border border-[#12362A] 
							md:w-[164px] w-[100px] md:h-[54px] h-[38px] rounded-[10px]  hover:bg-gray-100"
        >
          <img src={Apple} alt="Apple icon" className="w-[19px] h-[19px]" />
        </div>
        {/* Facebook Login*/}
        <div
          className="flex justify-center items-center border border-[#12362A] 
							md:w-[164px] w-[100px] md:h-[54px] h-[38px] rounded-[10px] hover:bg-gray-100"
        >
          <img
            src={Facebook}
            alt="facebook icon"
            className="w-[19px] h-[19px]"
          />
        </div>
      </div>

      <div className=" flex items-center w-full">
        <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
        <div className="font-medium md:text-[20px] px-3 text-[14px] leading-[36px] ">
          or sign up with Email
        </div>
        <div className="border-b w-full border-[#D9D9D9] flex-1"></div>
      </div>
    </div>
  );
}

export default SignUpActions