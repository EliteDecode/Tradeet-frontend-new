import React from 'react'
import { Link } from 'react-router-dom';

const ResetSuccessful = () => {
  return (
    <div className=" md:mt-[100px] mb-10 w-full flex justify-center items-center">
      <div className="md:w-[636px] w-full flex flex-col justify-center items-center md:border border-[#ADBC9F] rounded-lg p-5">
        <div className="flex flex-col justify-center items-center md:w-[450px] w-full">
          <div className="w-[250px] h-[250px]"></div>
          <h2 className="mt-4 font-semibold md:text-3xl text-2xl text-center">
            Password Reset Successful!
          </h2>
          <p className="md:text-lg text-sm mt-1">
            You have successfully reset your password
          </p>
        </div>
        <div className="w-full mt-8">
          <Link to="/auth/login">
            <button
              className= "w-full px-6 py-4 mb-10 bg-[#12362A] font-semibold md:text-xl text-sm text-white rounded-lg"
            >
              Continue to log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResetSuccessful
