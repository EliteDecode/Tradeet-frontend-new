import React, { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
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
            Forgot Password?
          </h2>
          <p className="border-b border-[#ADBC9F] pb-4 text-sm md:text-base">
            Relax!, lets see how we can get you another password.
            <br />
            Please enter your account’s email
          </p>
          <form className="mt-8">
            <div>
              <label
                htmlFor="email"
                className="font-medium text-sm md:text-base"
              >
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="p-4 border w-full rounded-lg outline-[#12362A] font-medium"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="w-full mt-12">
              <Link to="/auth/forgot-password/verify">
                <button className="w-full px-6 py-4 mb-10 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg ">
                  Send Code
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
}

export default ForgotPassword
