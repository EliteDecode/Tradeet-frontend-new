import React from "react";
import DonationInput from "./DonationInput";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const DonationRegistration = () => {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="w-full">
      <div className="max-w-[40rem] md:mx-auto mx-4">
        <button
          onClick={() => navigate(-1)}
          className="h-[100px] text-lg font-medium flex items-center justify-start gap-2"
        >
          <FaArrowLeftLong />
          <span>Back to website</span>
        </button>
      </div>

      <div className="p-4 md:px-6 rounded-lg md:m-2 md:mx-auto md:border-2 max-w-[40rem]">
        <div className="w-full pb-4 mb-4 border-b-2">
          <h1 className="font-semibold text-3xl">Create Account</h1>
          <p className="">Welcome to Tradeet, Create your charity account.</p>
        </div>
        <form form action="post" method="post" onSubmit={submitHandler}>
          <DonationInput
            title="Name"
            name="name"
            important={true}
            type="text"
            placeholder="Enter charity name here"
          />
          <DonationInput
            title="Email Address"
            name="email"
            important={true}
            type="text"
            placeholder="Enter charity email address"
          />
          <DonationInput
            title="Address"
            name="address"
            important={true}
            type="text"
            placeholder="Enter charity Address"
          />
          <DonationInput
            title="Password"
            name="password"
            important={true}
            type="password"
            placeholder="must be at least 8 characters"
          />
          <DonationInput
            title="CAC Number"
            name="cacnumber"
            important={true}
            type="text"
            placeholder="Enter CAC number here"
          />
          <DonationInput
            title="Utility Bill"
            name="utility"
            important={false}
            type="file"
            placeholder="Enter  here"
          />
          <button
            type="submit"
            className="w-full p-2 md:p-4 text-lg md:text-xl font-semibold text-white mb-4 rounded-lg bg-[#12362A]"
          >
            Sign Up
          </button>
        </form>
      </div>
      <p className="text-base md:text-lg w-fit mx-auto md:my-4 mb-4 p">
        Already have an account?{" "}
        <Link to={"/auth/donation-login"} className="text-[#12362A]">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default DonationRegistration;
