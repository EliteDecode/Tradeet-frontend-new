import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaCheck } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const MailVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [correctCode, setCorrectCode] = useState(false);
  const inputRefs = useRef([]);

  const navigate = useNavigate()

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return false;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }

    if (value && newOtp.join("").length === 4) {
      setCorrectCode(true);
    }
    // console.log(newOtp.join(""));
  };
  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0 && inputRefs.current[i - 1]) {
      e.target.previousSibling.focus();
    }
    if ( i !== 5) {
      setCorrectCode(false);
    }
  };
  return (
    <div className="md:mt-[100px] mb-10 w-full flex justify-center items-center">
      <div className="w-[640px]">
        <div className="px-8 md:px-0 mt-10 md:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 items-center font-medium"
          >
            <FaArrowLeftLong />
            <span className="hidden md:block ">Go back</span>
          </button>
        </div>

        <div className="md:w-[640px] w-full px-8 md:border border-[#ADBC9F] rounded-lg mt-8">
          <h2 className="font-semibold md:text-3xl text-2xl mt-4">
            Please check your email
          </h2>
          <p className="border-b border-[#ADBC9F] pb-4 text-sm md:text-base">
            <span>We have sent a retrival code to </span>
            <span className="font-semibold">JaneUX@gmail.com</span>
          </p>
          <form className="mt-8">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                {otp.map((data, i) => (
                  <input
                    type="text"
                    key={i}
                    ref={(input) => (inputRefs.current[i] = input)}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    value={data}
                    className="md:w-[72px] w-[48px] md:py-4 py-2 outline-none text-center border border-black rounded-lg md:text-3xl text-xl font-semibold"
                  />
                ))}
              </div>
              <div className="mr-10">
                {correctCode ? <FaCheck size={20} /> : ""}
              </div>
            </div>

            <div className="w-full mt-12">
              <Link to="/auth/reset-password">
                <button className="w-full px-6 py-4 mb-10 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg">
                  Verify
                </button>
              </Link>
            </div>
          </form>
        </div>

        <p className="md:mt-5 ml-8 text-sm md:text-base">
          <span>Remember your password? </span>
          <Link to="/auth/login" className="font-semibold text-[#12362A]">
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MailVerification;
